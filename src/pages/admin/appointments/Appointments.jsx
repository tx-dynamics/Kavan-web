import Paper from "@mui/material/Paper";
import { AllDayPanel, ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DateNavigator,
  DayView,
  Appointments,
  ViewSwitcher,
  MonthView,
  Toolbar,
  WeekView,
  AppointmentTooltip,
  TodayButton,
  CurrentTimeIndicator,
} from "@devexpress/dx-react-scheduler-material-ui";
import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { clock, dummy2, threeDots } from "../../../assets";
import { AppointmentView, SearchBar } from "../../../components";
import { authReq } from "../../../requests";
import Button from "@mui/material/Button";

import "./appointments.css";
import SmallBtn from "../../../components/smallBtn/smallBtn";
const Appointment = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({})
  const [startDate, setStartDate] = useState(0)
  const [endDate, setEndDate] = useState(0)
  const [refresh, setRefresh] = useState(false)
  const [schedulerData, setSchedulerData] = useState([
    {
      startDate: "2022-11-30T09:00",
      endDate: "2022-11-30T10:00",
      title: "Appointment date",
      btn1: "Reschedule",
      btn2: "Join session",
    },
    {
      startDate: "2022-11-30T10:20",
      endDate: "2022-11-30T11:20",
      title: "Appointment date",
      status: "join",
    },
    {
      startDate: "2022-11-30T10:00",
      endDate: "2022-11-30T11:00",
      title: "Appointment date",
      // status: "join",
    },
    {
      startDate: "2022-11-30T11:00",
      endDate: "2022-11-30T12:00",
      title: "Appointment date",
    },
    {
      startDate: "2022-11-30T13:00",
      endDate: "2022-11-30T14:30",
      title: "Appointment date",
    },
  ]);

  const doRefresh = () => {
    authReq('GET', '/appointment')
    .then(data => {
      setSchedulerData(data.appointments.filter(x => x.status !== 'patient-canceled').filter(x => x.status !== 'patient-completed').map(app => {
        const startDate = new Date(app.appointmentStart).toISOString()
        const endDate = new Date(app.appointmentEnd).toISOString()
        console.log(startDate, endDate, app.status)
        return {
          id: app._id,
          patient: app.appointer,
          startDate: startDate,
          endDate: endDate,
          title: `Appointment date`,
          status: app.status == "patient-pending" ? "join" : undefined
        }
      }))
    })

  authReq('GET', '/user/me')
    .then(data => {
      setUser(data.data)
      setStartDate(parseInt(data.data?.startDate?.split("T")[1]?.split(":")[0]))
      setEndDate(parseInt(data.data?.endDate?.split("T")[1]?.split(":")[0]))
    })
  }

  useEffect(() => {
    doRefresh()
  }, [])

  useEffect(() => {
    doRefresh()
  }, [refresh])
  const AppointmentContent = ({ formatDate, ...restProps }) => {
    return (
      <div {...restProps}>
        <div className="kwn-appointment_content-container">
          <div className="kwn-appointment-content-slider"></div>
          <div className="kwn-appointment-content">
            <div className="kwn-appointment-content-time-container">
              <div className="kwn-appointment-content-time-sub-container">
                <img src={clock} />
                <h4>
                  {dayjs({ ...restProps }.data.startDate).format(
                    "ddd MMMM D, YYYY"
                  )}
                  <span>
                    {" | "}
                    {dayjs({ ...restProps }.data.startDate).format("hh:mm A")}
                  </span>
                </h4>
              </div>
              <div className="kwn-appointment-content-three-dot">
                <img src={threeDots} />
              </div>
            </div>
            <div className="kwn-appointment-content-divider"></div>
            <div className="kwn-appointment-content-btn-main-container">
              <div className="kwn-appointment-content-profile_name">
                <img src={restProps?.data?.patient?.image} />
                <div className="kwn-appointment-content-profile_name-sub-container">
                  <h2>{[restProps?.data?.patient?.name, console.log(restProps.data)][0]}</h2>
                  <h3>Anxiety</h3>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <SmallBtn
                  onClick={async () => {
                    if({ ...restProps.data }.status == "join") {
                      await authReq('PATCH', `/appointment/${restProps.data.id}`, { status: 'patient-canceled' })
                      setRefresh(!refresh)
                    }
                    else navigate(`/dashboard/AppointmentStack/rescheduleAppointment?id=${restProps.data.id}`)
                  }
                  }
                  containerStyle={{
                    border:
                      { ...restProps.data }.status == "join"
                        ? "none"
                        : "0.7px solid #006039",
                    backgroundColor:
                      { ...restProps.data }.status == "join"
                        ? "#EC4B4A"
                        : "#fff",
                  }}
                  fontStyle={{
                    color:
                      { ...restProps.data }.status == "join"
                        ? "#fff"
                        : "#006039",
                  }}
                  text={
                    { ...restProps.data }.status == "join"
                      ? "Cancel"
                      : "Reschedule"
                  }
                />
                <div style={{ marginLeft: "1rem" }}>
                  <SmallBtn
                    onClick={async () => {
                      console.log("Clicked", restProps.data.id)
                      if({ ...restProps.data }.status == "join") {
                        await authReq('PATCH', `/appointment/${restProps.data.id}`, { status: 'patient-upcoming' })
                        setRefresh(!refresh)
                      }
                      else navigate(`/dashboard/ChatStack?id=${restProps.data.id}`)
                    }}
                    containerStyle={{
                      backgroundColor:
                        { ...restProps.data }.status == "join"
                          ? "#f8b84e"
                          : "#006039",
                    }}
                    fontStyle={{
                      color:
                        { ...restProps.data }.status == "join"
                          ? "#006039"
                          : "#fff",
                    }}
                    text={
                      { ...restProps.data }.status == "join"
                        ? "Accept"
                        : "Join session"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="kavan_admin_main_container">
      <div className="kwn-search">
        <SearchBar />
      </div>
      <h1 className="kwn-heading">appointments</h1>
      {/* <div className="kwn_appointments_type_top_view">
        {appointmentTypeArray.map((item) => {
          return (
            <div
              className="kwn_appointments_type_view"
              onClick={() => setSelectedType(item)}
              style={{
                backgroundColor:
                  item.id === selectedType.id ? "#006039" : "#ffffff",
              }}
              key={item.id}
            >
              <h3
                style={{
                  color: item.id === selectedType.id ? "#ffffff" : "#666666",
                }}
              >
                {item.title}
              </h3>
            </div>
          );
        })}
      </div> */}
      {
        <div className="kwn-appointsments-appointment_view">
          {/* {appointmentArray
            .filter((item) => item.type === selectedType.title)
            .map((item) => {
              return item.type === "Upcoming" ? ( */}
          <Paper>
            <Scheduler data={schedulerData}>
              <ViewState
                // currentDate={currentDate}
                defaultCurrentDate={new Date().toISOString()}
              />
              <DayView
                displayName="Days"
                cellDuration={30}
                // startDayHour={parseInt(user?.startDate?.split("T")[1]?.split(":")[0])}
                // endDayHour={parseInt(user?.endDate?.split("T")[1]?.split(":")[0])}
                startDayHour={startDate == 0 ? 11 : startDate}
                endDayHour={endDate == 0 ? 21 : endDate}
              />
              {/* <WeekView cellDuration={60} startDayHour={startDate == 0 ? 11 : startDate} endDayHour={endDate == 0 ? 16 : endDate} /> */}

              <Toolbar />
              {/* <MonthView /> */}
              <Appointments appointmentComponent={AppointmentContent} />
              <TodayButton />
              <ViewSwitcher />

              <DateNavigator />
              <CurrentTimeIndicator
              //  indicatorComponent={TimeIndicator}
              />
              {/* <AppointmentTooltip
                contentComponent={TooltipContent}
              /> */}
            </Scheduler>
          </Paper>
          {/* ) : (
                <AppointmentView type={item.type} />
              );
            })} */}
        </div>
      }
    </div>
  );
};

export default Appointment;
