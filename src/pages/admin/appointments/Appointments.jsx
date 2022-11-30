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
import React, { useState } from "react";
import { clock, dummy2 } from "../../../assets";
import { AppointmentView, SearchBar } from "../../../components";
import Button from "@mui/material/Button";

import "./appointments.css";
const Appointment = () => {
  const currentDate = "2022-11-30T09:45";
  const schedulerData = [
    {
      startDate: "2022-11-30T09:45",
      endDate: "2022-11-30T11:20",
      title: "Appointment date",
    },
    {
      startDate: "2022-11-30T09:45",
      endDate: "2022-11-30T11:20",
      title: "Appointment date",
    },
    {
      startDate: "2022-11-30T09:30",
      endDate: "2022-11-30T11:00",
      title: "Appointment date",
    },
    {
      startDate: "2022-11-30T12:00",
      endDate: "2022-11-30T13:30",
      title: "Appointment date",
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

  const AppointmentContent = ({ ...restProps }) => {
    return (
      <div {...restProps}>
        {/* <div style={{ width: "2rem", height: "3rem", background: "red" }}>
          <div className="kwn-side_divider" />
        </div> */}
      </div>
    );
  };
  const TooltipContent = ({
    appointmentData,
    formatDate,
    appointmentResources,
    ...restProps
    // #FOLD_BLOCK
  }) => {
    return (
      <div
        className="kwn-upcoming-appointment-calender-tool_tip-main_container"
        {...restProps}
      >
        <div className="kwn-side_divider-calender" />
        <div className="kwn-appointment-calender-tool_tip-container">
          <div className="kwn-appointment-up_coming-tool_tip-title">
            <h1>{appointmentData.title}</h1>
          </div>
          <div className="kwn-appointment-calender-tool_tip-date-main_container">
            <img src={clock} />
            <div className="kwn-appointment-calender-tool_tip-date-container">
              <h3>
                {formatDate(appointmentData.startDate, {
                  day: "numeric",
                  weekday: "long",
                  month: "long",
                  year: "numeric",
                })}
                <span>
                  |
                  {`${formatDate(appointmentData.startDate, {
                    hour: "numeric",
                    minute: "numeric",
                  })}`}
                </span>
              </h3>
            </div>
          </div>
          <hr />
          <div style={{ marginTop: "2rem" }}></div>
          <div className="kwn-appointment_profile_view">
            <img src={dummy2} />
            <div className="kwn-appointment_name_view">
              <h3>vandarani aduhai</h3>
              <h4>Depression</h4>
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
      {
        <div className="kwn-appointsments-appointment_view">
          {appointmentArray
            .filter((item) => item.type === selectedType.title)
            .map((item) => {
              return item.type === "Upcoming" ? (
                <Paper>
                  <Scheduler data={schedulerData}>
                    <ViewState
                      // currentDate={currentDate}
                      defaultCurrentDate="2022-11-30T09:45"
                    />
                    <DayView
                      displayName="Days"
                      cellDuration={60}
                      startDayHour={8}
                      endDayHour={14}
                    />
                    <WeekView
                      cellDuration={60}
                      startDayHour={8}
                      endDayHour={14}
                    />

                    <Toolbar />
                    {/* <MonthView /> */}
                    <Appointments containerComponent={AppointmentContent} />
                    <TodayButton />
                    <ViewSwitcher />

                    <DateNavigator />
                    <CurrentTimeIndicator />
                    <AppointmentTooltip
                      contentComponent={TooltipContent}
                      // showCloseButton
                    />
                  </Scheduler>
                </Paper>
              ) : (
                <AppointmentView type={item.type} />
              );
            })}
        </div>
      }
    </div>
  );
};

export default Appointment;
