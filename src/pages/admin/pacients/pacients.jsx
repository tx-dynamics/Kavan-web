import React, { useState, useEffect } from "react";
import { user, users } from "../../../assets";
import { SearchBar } from "../../../components";
import { authReq } from "../../../requests";
import "./pacients.css";

function random(seed) {
  var x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

const sdbm = str => {
  let arr = str.split('');
  return arr.reduce(
    (hashCode, currentVal) =>
      (hashCode =
        currentVal.charCodeAt(0) +
        (hashCode << 6) +
        (hashCode << 16) -
        hashCode),
    0
  );
};

const characters = "abcdefghijklmnopqrstuvwxyz"

const Pacients = () => {

  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    console.log("Hi@")
    authReq('GET', '/appointment')
      .then(data => {
        console.log("Hello Data =>", data)
        setPatientData(
          data.appointments.filter(x => true)
            .map(app => {
              let seed = sdbm(app.appointer._id)
              const arr = new Array(8).fill(0).map(_ => Math.round(random(Math.abs(seed++))*10))
              console.log(arr)
              return {
                id: app._id,
                name: app.appointer.name,
                lastVisit: `${new Date(app.appointmentStart).toISOString()}`,
                nextVisit: new Date(data.appointments.filter(x => x._id > app._id).find(x => x.appointer._id == app.appointer._id)?.appointmentStart),
                idNumber: `${arr.join('')}${characters.charAt(Math.floor(random(sdbm(app.appointer._id)) * characters.length)).toUpperCase()}`
              }
            })
        )
      })
  }, [])

  return (
    <div className="kavan_admin_main_container">
      <div className="kwn-search">
        <SearchBar />
      </div>
      <div className="kwn-pacients-count-container">
        <h1 className="kwn-heading">pacientes</h1>
        <div style={{ marginLeft: "5.7rem" }}>
          <div className="kwn-dashboard-appointments_and_patients_view">
            <div className="kwn-dashboard-round_calender_view">
              <img src={users} />
            </div>
            <div>
              <h2>{"45"}</h2>
              <h3>{"pacientes"}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="kwn-pacients-table-view">
        <table>
          <thead>
            <tr>
              <th scope="col">NOMBRE Y APELLIDO</th>
              <th scope="col">LAST VISIT</th>
              <th scope="col">NEXT VISIT</th>
              <th scope="col">ID number</th>
            </tr>
          </thead>
          <tbody>
            {patientData.map((item) => {
              return (
                <tr>
                  <td data-label={"NOMBRE Y APELLIDO"}>{item.name}</td>
                  <td data-label={"Last Visit"}>{item.startsAt}</td>
                  {item.nextVisit == "" ? (
                    <td data-label={"Next Visit"}>
                      <div className="kawan-pacient-table-create-visit">
                        <p>Create next visit</p>
                      </div>
                    </td>
                  ) : (
                    <td data-label={"Next Visit"}>16-07-2021 15:00</td>
                  )}
                  <td data-label={"Next Visit"}>{item.idNumber}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pacients;
