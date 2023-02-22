import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { clock, dummy2, threeDots } from '../../assets'
import './appointmentView.css'
const AppointmentView = (props) => {
    const [modelShow, setModelShow] = useState(false)
    const navigate = useNavigate()
    return (
        <div onClick={() => props.type === 'patient-upcoming' ? navigate('scheduleAppointment') : null} className='kwn-appointment_view'>
            <div className='kwn-side_divider' />
            <div className='kwn-appointment_content_top_view'>
                <div className='kwn-appointment_title_view'>
                    <h2>Appointment date</h2>
                    {props.type === 'patient-completed' || props.type === 'patient-canceled' ?
                        <div className='kwn-top_button' style={{ backgroundColor: props.type === 'patient-canceled' ? '#EC4B4A' : '#006039' }}>
                            <h3>{props.type === 'patient-canceled' ? 'CANCEL' : 'COMPLETED'}</h3>
                        </div>
                        :
                        <div className='kwn_three_dot_top_view' >
                            <img onClick={() => setModelShow(!modelShow)} src={threeDots} />
                            {modelShow &&
                                <div className='kwn-three_dot_modal'>
                                    <h2 onClick={() => navigate('rescheduleAppointment')}>Reschedule</h2>
                                    <h2 onClick={() => navigate('cancelAppointment')}>Cancel</h2>
                                </div>
                            }
                        </div>
                    }

                </div>
                <div className='kwn-appointment_time_view'>
                    <img src={[console.log(props.appointment), clock][1]} />
                    <h2>{props.type === 'patient-completed' || props.type === 'patient-canceled' ? `${new Date(props.appointment.appointmentStart).toDateString()}` : `${new Date(props.appointment.appointmentStart).toDateString()}`}</h2>
                </div>
                {props.type === 'patient-reschedule' || props.type === 'patient-canceled' ?
                    <div className='kwn-appointment_reason_view'>
                        <h3>Reason:</h3>
                        <h4>{props.appointment.cancelationReason}</h4>
                    </div>
                    : null
                }
                <div className='kwn-appointment_divider' />
                <div className='kwn-appointment_profile_view'>
                    <img src={props.appointment.appointer.image} />
                    <div className='kwn-appointment_name_view'>
                        <h3>{props.appointment.appointer.name}</h3>
                        <h4>Depression</h4>
                    </div>
                </div>
                {props.type === 'patient-pending' &&
                    <div className='kwn-appointment_buttons_view'>
                        <div className='kwn-appointment_button'>
                            <h3>CANCEL</h3>
                        </div>
                        <div className='kwn-appointment_button' style={{ backgroundColor: '#006039' }}>
                            <h3>ACCEPT</h3>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}

export default AppointmentView
