import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  arrowLeft,
  arrowRight,
  clock,
  dummy1,
  dummy2,
  search,
  sideBarAppointment,
  threeDots,
  users,
} from "../../../assets";
import { AppointmentView, SearchBar } from "../../../components";
import { WithAuth } from "../../../components/auth/auth.js";
import { authReq } from "../../../requests.js";
import { Area } from "@ant-design/plots";
import "./dashboard.css";

const Dashboard = () => {
  const [graphArray, setGraphArray] = useState([]);
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const navigate = useNavigate()
  const [year, setYear] = useState(new Date().getFullYear())
  const [month, setMonth] = useState(new Date().getMonth())
  const [user, setUser] = useState({})
  const [appointments, setAppointments] = useState([])
  const [newAppointments, setNewAppointments] = useState(0)
  const [appointmentPatientArray, setAppointmentPatientArray] = useState([]);

  const config = {
    xField: "Date",
    yField: "scales",
    xAxis: {
      range: [0, 1],
      tickCount: 7,
    },
    line: { color: "#006039", size: 4 },
    color: "#006039",

    areaStyle: () => {
      return {
        fillOpacity: 10,
        fill: "l(270) 0:#ffffff 0.3:#a4d2cd 0.5:#59a392 0.7:#499783 1:#006039",
      };
    },
  };

  const updateGraph = (appointments, month, year) => {
    setGraphArray(new Array(29).fill(0).map((_, i) => i+1).map(i => {
      return {
        Date: `${i}`,
        scales: appointments.filter(app => {
      console.log("||||||||||||||||||||||",  new Date(app.appointmentStart).getMonth(), month, new Date(app.appointmentStart).getFullYear(), year)
          return new Date(app.appointmentStart).getDay() == i && new Date(app.appointmentStart).getFullYear() == year && new Date(app.appointmentStart).getMonth() == month
        }).length,
      }
    }))
  }

  useEffect(() => {

    authReq('GET', "/appointment")
      .then(data => {

        setAppointmentPatientArray([
          {id: 1, title: "CItas", count: data.appointments.length, img: sideBarAppointment},
          {id: 2, title: "Pacientes", count: data.appointments.filter(appointment => appointment.status === 'patient-upcoming').length, img: users},
        ])
  
        const appointments = data.appointments.sort((a, b) => a > b ? -1 : 1)
        const newestAppointmentId = localStorage.getItem('kawan_newestPatientId', appointments[0]?._id) ?? '0'
        console.log(newestAppointmentId, appointments)
        const newAppointments = appointments.filter(x => x._id > newestAppointmentId).length
        setNewAppointments(newAppointments)
        if(appointments[appointments.length - 1]) localStorage.setItem('kawan_newestPatientId', appointments[appointments.length - 1]?._id)
        console.log("ABCDEFGH", appointments[0], newAppointments)
        setAppointments(appointments)

        updateGraph(appointments, month, year)
      })

  }, [])

  useEffect(() => {
    authReq('GET', "/user/me")
    .then(data => setUser(data.data))
  }, [])

  return <WithAuth component={
  <div className="kavan_admin_main_container">
  <div className="kwn-search">
    <SearchBar />
  </div>
  <div className="kwn-dashboard-title_container">
    <h1>Kavan Dashboard</h1>
    <h3>Welcome, {user.name}!</h3>
  </div>
  <div className="kwn-dashboard-resume_container">
    <h1>Solicitud De Citas </h1>
  </div>
  <div className="kwn-dashboard-solicitud-container">
    <div className="kwn-dashboard-solicitud-sub-container">
      <div className="kwn-dashboard-side_line"></div>
      <div className="kwn-dashboard-solicitud-tag">
        <p>You have #{newAppointments} new patient request</p>
      </div>
    </div>

    <div className="kwn-dashboard-solicitud-btn" onClick={() => navigate("/dashboard/AppointmentStack")}>
      <p>Ver solicitudes</p>
    </div>
  </div>
  <div className="kwn-dashboard-resume_container">
    <h1>Resumen</h1>
  </div>
  <div className="kwn-dashboard-appointments_and_patients_top_view">
    {appointmentPatientArray.map((item) => {
      return (
        <div className="kwn-dashboard-appointments_and_patients_view">
          <div className="kwn-dashboard-round_calender_view">
            <img src={item.img} />
          </div>
          <div>
            <h2>{item.count}</h2>
            <h3>{item.title}</h3>
          </div>
        </div>
      );
    })}
  </div>

  <div className="kwn-dashboard-arrows_top_view">
    <h1 className="kwn-heading">Patient’s Graph</h1>
    <div className="kwn-dashboard-arrows_view">
      <div>
        <img src={arrowLeft} style={{cursor: 'pointer'}} onClick={() => {
          let newMonth = month - 1
          let newYear = year
          if(newMonth < 0) {
            newMonth = 11
            newYear = year - 1
          }
          setYear(newYear)
          setMonth(newMonth)
          updateGraph(appointments, newMonth, newYear)
        }} />
      </div>
      <div>
        <img src={arrowRight} style={{cursor: 'pointer'}} onClick={() => {
          let newMonth = month + 1
          let newYear = year
          if(newMonth > 11) {
            newMonth = 0
            newYear = year + 1
          }
          setMonth(newMonth)
          setYear(newYear)
          updateGraph(appointments, newMonth, newYear)
        }} />
      </div>
    </div>
  </div>

  <div className="kwn-dashboard-total_patients_view">
    <h3>Total patient in {monthNames[month]}</h3>
    <h4>{appointments.filter(app => new Date(app.appointmentStart).getFullYear() == year && new Date(app.appointmentStart).getMonth() == month).length}</h4>
    {/* <h5>20.5 %</h5> */}
  </div>
  <div className="kwn-dashboard-graph_view">
    <Area data={graphArray} {...config} />
  </div>

  <div className="kwn-dashboard-appointments_top_view">
    <h1 className="kwn-heading">appointments requests </h1>
    <div className="kwn-dashboard-appointment_view">
      {appointments.map(appointment => <AppointmentView appointment={appointment} />)}
    </div>
  </div>
</div>}
  />;
};

export default Dashboard;
