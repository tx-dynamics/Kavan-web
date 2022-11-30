import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
// import {
//   Scheduler,
//   DayView,
//   Appointments,
// } from "@devexpress/dx-react-scheduler-material-ui";
import React, { useState } from "react";
import { dummy2 } from "../../../assets";
import { AppointmentView, SearchBar } from "../../../components";
import Button from "@mui/material/Button";

import "./appointments.css";
const Appointment = () => {
  const currentDate = "2018-11-01";
  const schedulerData = [
    {
      startDate: "2018-11-01T09:45",
      endDate: "2018-11-01T11:00",
      title: "Meeting",
    },
    {
      startDate: "2018-11-01T12:00",
      endDate: "2018-11-01T13:30",
      title: "Go to a gym",
    },
  ];
  const [selectedType, setSelectedType] = useState({
    id: 1,
    title: "Requests",
  });

  const appointmentTypeArray = [
    {
      id: 1,
      title: "Requests",
    },
    {
      id: 2,
      title: "Upcoming",
    },
    {
      id: 3,
      title: "Reschedule",
    },
    {
      id: 4,
      title: "Completed",
    },
    {
      id: 5,
      title: "Cancelled",
    },
  ];

  const appointmentArray = [
    {
      id: 1,
      date: "11 June 2021",
      time: "10:00 AM",
      reason: "I don’t want to consult right now",
      type: "Requests",
      image: dummy2,
      name: "Dr. Atiana",
      profession: "General Psychologist specialist",
    },
    {
      id: 3,
      date: "11 June 2021",
      time: "10:00 AM",
      reason: "I don’t want to consult right now",
      type: "Upcoming",
      image: dummy2,
      name: "Dr. Atiana",
      profession: "General Psychologist specialist",
    },
    {
      id: 4,
      date: "11 June 2021",
      time: "10:00 AM",
      reason: "I don’t want to consult right now",
      type: "Reschedule",
      image: dummy2,
      name: "Dr. Atiana",
      profession: "General Psychologist specialist",
    },
    {
      id: 5,
      date: "11 June 2021",
      time: "10:00 AM",
      reason: "I don’t want to consult right now",
      type: "Completed",
      image: dummy2,
      name: "Dr. Atiana",
      profession: "General Psychologist specialist",
    },
    {
      id: 6,
      date: "11 June 2021",
      time: "10:00 AM",
      reason: "I don’t want to consult right now",
      type: "Cancelled",
      image: dummy2,
      name: "Dr. Atiana",
      profession: "General Psychologist specialist",
    },
  ];

  return (
    <div className="kavan_admin_main_container">
      <div className="kwn-search">
        <SearchBar />
      </div>
      <h1 className="kwn-heading">appointments</h1>
      <div className="kwn_appointments_type_top_view">
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
      </div>
      <div className="kwn-appointsments-appointment_view">
        {appointmentArray
          .filter((item) => item.type === selectedType.title)
          .map((item) => {
            return <AppointmentView type={item.type} />;
          })}
      </div>
    </div>
  );
};

export default Appointment;
