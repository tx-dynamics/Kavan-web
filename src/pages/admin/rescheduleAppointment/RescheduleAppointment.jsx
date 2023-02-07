import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { calenderWithDots, filled, unFilled } from "../../../assets";
import { Button, SearchBar, TextInput } from "../../../components";
import "./rescheduleAppointment.css";
const RescheduleAppointment = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState({ id: 0 });
  const [isSubmit, setIsSubmit] = useState(false);

  const reasonArray = [
    {
      id: 0,
      title: "I am having a schedule clash",
    },
    {
      id: 1,
      title: "I am not available on schedule",
    },
    {
      id: 2,
      title: "I have a activity that can’t be left behind",
    },
    {
      id: 3,
      title: "I don’t want to tell",
    },
    {
      id: 4,
      title: "Others",
    },
  ];

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
                inputStyle={{ fontSize: 20 }}
                style={{ width: "100%" }}
                title={"Select Date"}
              />
              <TextInput
                type={"time"}
                inputStyle={{ fontSize: 20 }}
                style={{ width: "100%" }}
                title={"Select Time"}
              />
              <TextInput
                type={"text"}
                placeholder={"30:00 Mins "}
                inputStyle={{ fontSize: 20 }}
                style={{ width: "100%" }}
                title={"Select Duration"}
              />
            </div>
            <div className="kwn_reschedule_appointment_button_view">
              <Button onClick={() => setIsSubmit(true)}>Submit</Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RescheduleAppointment;
