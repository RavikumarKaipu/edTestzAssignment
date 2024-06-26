import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AppointmentHistory = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/appointments', {
        headers: {
          Authorization: token
        }
      });
      setAppointments(response.data);
    };

    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Appointment History</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.appointment_date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentHistory;
