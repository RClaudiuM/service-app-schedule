import React, { useState } from "react";
import Appointment from "./Appointment";
import "./Dashboard.css";

const initState = ["George", "Mitica", "Yasuo", "Popica", "Nevasta lu Popica"];

function Dashboard() {
  const [appointments, setAppointments] = useState(initState);
  console.log(appointments);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">Programări</div>
      <div className="appointment-container">
        {appointments.map((appointment, index) => (
          <Appointment text={appointment} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
