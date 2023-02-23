import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { bell, clock, dropdown, dummy2, info } from '../../assets'
import { authReq } from '../../requests'
import './rightSideBar.css'

const RightSideBar = () => {
    const navigate = useNavigate()
    const [showDropdow, setShowDropdown] = useState(true)
    const notificationArray = [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 4,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 5,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
    ]
    const [appointmentArray, setAppointmentArray] = useState([])
    const [chatsArray, setChatArray] = useState([])

    useEffect(() => {
        authReq('GET', '/appointment')
            .then(data => {
                console.log(data)
                setAppointmentArray(data.appointments.filter(x => new Date(x.appointmentStart).toISOString().split('T')[0] === new Date().toISOString().split('T')[0]).map(app => {
                    return {
                        id: app._id,
                        title: app.appointer.name,
                        disease: 'Depression',
                        image: app.appointer.image
                    }
                }) ?? [])
                console.log(data.messages)
                setChatArray(data.messages.map((x, id) => { return { id, image: x.sender.image } }))
            })
    }, [])

    return (
        <div className='kwn-right_side_bar-main_container'>
            <div className="kwn-right_side_bar-img_container">
                <img src={info} />
                <div className='kwn-right_side_bar-profile_img'>
                    <img src={dummy2} />
                </div>
            </div>
            <div className="kwn-right_side_bar-top_notification_container">
                <div className='kwn-right_side_bar-notification_container'>
                    <div className='kwn-right_side_bar-notification_title'>
                        <img src={bell} className='kwn-right_side_bar-bell_icon' />
                        <h3>Notification</h3>
                        <img onClick={() => setShowDropdown(!showDropdow)} src={dropdown} className='kwn-right_side_bar-dropdown' />
                    </div>
                    {showDropdow &&
                        <div className='kwn-right_side_bar-notification_content'>
                            {notificationArray.map((item) => {
                                return (
                                    <p key={item.id}>{item.title}</p>
                                )
                            })}
                        </div>
                    }
                </div>
            </div>
            <div className='kwn-right_side_bar-today_appoint_container'>
                <h1>today appointments</h1>
                {appointmentArray.filter((_, i) => i < 2).map((item) => {
                    return (
                        <div className='kwn-right_side_bar-appointment_view'>
                            <div className='kwn-right_side_bar-appointment_view_image'>
                                <img src={item.image} />
                            </div>
                            <div className='kwn-right_side_bar-appointment_view_content'>
                                <h4>{item.title}</h4>
                                <p>{item.disease}</p>
                                <div className='kwn-right_side_bar-appointment_view_clock'>
                                    <img src={clock} />
                                    <p>{item.time}</p>
                                </div>
                            </div>
                            <div className='kwn-right_side_bar-appointment_view_button'>
                                <div className='kwn-right_side_bar-appointment_view_message_botton'>
                                    <p>Message</p>
                                </div>
                                <div className='kwn-right_side_bar-appointment_view_schedule_botton' style={{cursor: 'pointer'}} onClick={() => {
                                    navigate(`/dashboard/AppointmentStack/rescheduleAppointment?id=${item.id}`)
                                }}>
                                    <p>Reschedule</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='kwn-right_side_bar-chat_container'>
                <h1>Recent Chats</h1>
                <div className='kwn-right_side_bar-chat_profiles'>
                    {chatsArray.map((item) => {
                        return (
                            <div className='kwn-right_side_bar_chat'>
                                <img src={item.image} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default RightSideBar
