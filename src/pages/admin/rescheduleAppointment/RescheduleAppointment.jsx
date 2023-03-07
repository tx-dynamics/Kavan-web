import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { calenderWithDots, filled, unFilled } from "../../../assets";
import { authReq } from "../../../requests";
import { getAllParams } from "../../../urlParams";
import { Button, SearchBar, TextInput } from "../../../components";
import DropDown from "../../../components/DropDown/DropDown";
import "./rescheduleAppointment.css";

const baseArray = new Array(15).fill(0).map((_, i) => i+8 > 12 ? `${i+8-12}:00 PM` : `${i+8}:00 AM`).map(x => { return {label: x, value: x} })

const RescheduleAppointment = () => {
  const params = getAllParams()
  const navigate = useNavigate();
  const [user, setUser] = useState({})
  const [date, setDate] = useState("")
  const [reason, setReason] = useState("")
  const [duration, setDuration] = useState("")
  const [appointments, setAppointments] = useState([])
  const [isSubmit, setIsSubmit] = useState(false);

  const [times, setTimes] = useState(baseArray)
  const [time, setSelectedTime] = useState({})

  console.log(times)
  const formatTime = (date, time) => {
    const slot = `${time} ${date}`;
    return slot
  }

  useEffect(() => {
    authReq('GET', '/user/me')
      .then(data => setUser(data.data))
  }, [])

  useEffect(() => {
    authReq('GET', '/appointment')
      .then(data => {
        setAppointments(data.appointments.filter(x => x.status !== 'patient-canceled').filter(x => x.status !== 'patient-completed').map(app => {
          const startDate = new Date(app.appointmentStart).toISOString()
          const endDate = new Date(app.appointmentEnd).toISOString()
          console.log(startDate, endDate, app.status)
          return { ...app }
        }))
      })
  }, [])

  useEffect(() => {
    console.log("Ummmm")
    const existsArr = appointments.filter(app => app.slot === formatTime(date, time))
    console.log(appointments)
    if(existsArr.length > 0) console.log("Exists")
  }, [date, time])

  useEffect(() => {
    setSelectedTime("")
    const newTimes = baseArray
      .map(({label}) => label)
      .filter(t => {
        const hour = `${parseInt(t.split(' ')[0].split(':')[0]) + (t.split(' ')[1] == 'AM' ? 0 : 12)}:00`
        const finalDateString = `${date}T${hour}`
        const finalDate = date ? +new Date(finalDateString) : 0
        console.log(finalDate, Date.now(), finalDate > Date.now())
        return finalDate > Date.now()
      })
      .filter(t => {
        const hour = `${parseInt(t.split(' ')[0].split(':')[0]) + (t.split(' ')[1] == 'AM' ? 0 : 12)}:00`
        const actualStartDate = user?.startDate?.split("T")[1]?.split(':')?.slice(0, 2)?.join(':')
        const actualEndDate = user?.endDate?.split("T")[1]?.split(':')?.slice(0, 2)?.join(':')
        console.log(hour, actualStartDate, actualEndDate)
        return hour >= actualStartDate && hour <= actualEndDate
      })
      .map(t => { return { label: t, value: t } })
      .filter(t => {
        const dateTimeString = `${t.value} ${new Date(date).toISOString().split('T')[0]}`
        const existsArr = appointments.filter(app => app.slot === dateTimeString)
        return existsArr.length <= 0
      })

    setTimes(newTimes)
    console.log("New Ts", newTimes)
  }, [date])
  return (
    <div className="kavan_admin_main_container">
      <div className="kwn-search">
        <SearchBar />
      </div>
      {isSubmit ? (
        <div className="kwn-reschedule_appointment_success_top_view">
          <div className="kwn-reschedule_appointment_success_view">
            <img src={calenderWithDots} />
            <h1>Rescheduling Success!</h1>
            <h3>
              Appointment succesfully changed. You will receive a notification
              and the patient you selected will contact you.
            </h3>
            <div className="kwn-reschedule_appointment_appointment_button">
              <Button onClick={() => navigate(-1)} style={{ width: 214 }}>
                View Appointment
              </Button>
            </div>
            <div className="kwn-reschedule_appointment_cancel_button">
              <Button
                onClick={() => navigate(-1)}
                border
                style={{ width: 214 }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h1 className="kwn-heading">Cambiar Cita </h1>
          <div className="kwn_reschedule_appointment_reasons_top_view">
            <h2>Motivo del cambio de la cita</h2>
            <div className="kwn_reschedule_appointment_reasons_view">
              {/* {reasonArray.map((item) => {
                return (
                  <div
                    onClick={() => setSelected(item)}
                    className="kwn_reschedule_appointment_reasons"
                  >
                    <img src={item.id === selected.id ? filled : unFilled} />
                    <h2>{item.title}</h2>
                  </div>
                );
              })} */}
              <TextInput
                type={"text"}
                value={reason}
                onChange={ev => setReason(ev.target.value)}
                inputStyle={{ fontSize: 20 }}
                style={{ width: "97%" }}
                placeholder={"Me ha surgido un imprevisto personal..."}
              />
            </div>
            <div className="kwn_reschedule_appointment-nueva">
              <h1>Nueva Cita</h1>
            </div>
            <div className="kwn_reschedule_appointment_inputs_top_view">
              <TextInput
                type={"date"}
                value={date}
                onChange={ev => setDate(ev.target.value)}
                inputStyle={{ fontSize: 20 }}
                style={{ width: "100%" }}
                title={"Select Date"}
              />
              <DropDown
                text={"Time"}
                options={times}
                selected={time}
                setSelected={setSelectedTime}
              />
              <TextInput
                type={"number"}
                value={duration}
                onChange={ev => setDuration(ev.target.value)}
                placeholder={"30"}
                inputStyle={{ fontSize: 20 }}
                style={{ width: "100%" }}
                title={"Select Duration (Mins)"}
              />
            </div>
            <div className="kwn_reschedule_appointment_button_view">
              <Button onClick={async () => {
                const durationMs = parseInt(duration)*60*1000
                const timeValue = parseInt(time.value.split(' ')[0]) + (time.value.includes('AM') ? 0 : 12)
                const appointmentStart = Date.parse(`${date}T${timeValue}:00`)
                const appointmentEnd = Date.parse(`${date}T${timeValue}:00`) + durationMs

                const slot = formatTime(date, time.value)

                console.log("APPOINTMENT =>", appointmentStart, appointmentEnd, `${date}T${timeValue}:00`)

                await authReq('PATCH', `/appointment/${params.id}`, {
                  status: 'patient-upcoming',
                  appointmentStart,
                  appointmentEnd,
                  slot,
                  cancelationReason: reason
                })

                setIsSubmit(true)
              }}>Submit</Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RescheduleAppointment;
