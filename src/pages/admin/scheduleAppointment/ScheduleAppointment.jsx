import React, { useState } from 'react'
import { dummy2 } from '../../../assets'
import { Button, SearchBar } from '../../../components'
import './scheduleAppointment.css'
const ScheduleAppointment = () => {

    return (
        <div className='kavan_admin_main_container'>
            <div className='kwn-search'>
                <SearchBar />
            </div>
            <h1 className='kwn-heading'>Scheduled Appointment</h1>
            <div className='kwn-schedule_appointment_top_view'>
                <div className='kwn-schedule_appointment_view'>
                    <div className='kwn-schedule_appointment_img'>
                        <img src={dummy2} />
                    </div>
                    <div className='kwn-schedule_appointment_prfile_top_view'>
                        <div className='kwn-schedule_appointment_title_view'>
                            <div>
                                <h2>vandarani aduhai</h2>
                                <h3>Depression</h3>
                            </div>
                            <div>
                                <h2>date</h2>
                                <h3>11June, 2022</h3>
                            </div>
                        </div>
                        <div className='kwn-schedule_appointment_session_view'>
                            <div>
                                <h2>Session Duration</h2>
                                <h3>30:00 min</h3>
                            </div>
                            <div>
                                <h2>Time</h2>
                                <h3>10:00 AM</h3>
                            </div>
                        </div>
                        <div className='kwn-schedule_appointment_button_view'>
                            <Button>Start Session</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ScheduleAppointment
