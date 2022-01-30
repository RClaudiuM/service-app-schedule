import { Button } from "@mui/material";
import React from "react";
import "./Appointment.css";

function Appointment({ text }) {
  return (
    <div className="appointment-item">
      <div className="appointment-header">
        <div className="appointment-name-container">{text}</div>
        <div className="appointment-time-container">10:40PM</div>
      </div>
      <div className="appointment-make">Car: Audi A6</div>
      <div className="appointment-button-container">
        <Button fullWidth variant="contained">
          Resolved
        </Button>
      </div>
    </div>
  );
}

export default Appointment;
