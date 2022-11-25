import React from 'react'
import { clock, dummy2, threeDots } from '../../assets'
import './appointmentView.css'
const AppointmentView = () => {
    return (
        <div className='kwn-appointment_view'>
            <div className='kwn-side_divider' />
            <div className='kwn-appointment_content_top_view'>
                <div className='kwn-appointment_title_view'>
                    <h2>Appointment date</h2>
                    <img src={threeDots} />
                </div>
                <div className='kwn-appointment_time_view'>
                    <img src={clock} />
                    <h2>Thursday 11 June 2021 I 10:00 AM</h2>
                </div>
                <div className='kwn-appointment_divider' />
                <div className='kwn-appointment_profile_view'>
                    <img src={dummy2} />
                    <div className='kwn-appointment_name_view'>
                        <h3>vandarani aduhai</h3>
                        <h4>Depression</h4>
                    </div>
                </div>
                <div className='kwn-appointment_buttons_view'>
                    <div className='kwn-appointment_button'>
                        <h3>CANCEL</h3>
                    </div>
                    <div className='kwn-appointment_button' style={{ backgroundColor: '#006039' }}>
                        <h3>ACCEPT</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppointmentView
