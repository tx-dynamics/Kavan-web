import React from 'react'
import { Link } from 'react-router-dom'
import './appointments.css'
const Appointments = () => {
    return (
        <div className='kavan_admin_main_container'>
            <Link to='scheduleAppointment'>
                Appointment screen
            </Link>
        </div>
    )
}

export default Appointments
