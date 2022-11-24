import React, { useState } from 'react'
import { bell, clock, dropdown, dummy2, info } from '../../assets'
import './rightSideBar.css'

const RightSideBar = () => {
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
    const appointmentArray = [
        {
            id: 0,
            title: 'Vandarani Aduhai',
            disease: 'Depression',
            time: '10:00 AM',
            image: dummy2
        },
        {
            id: 1,
            title: 'Vandarani Aduhai',
            disease: 'Depression',
            time: '10:00 AM',
            image: dummy2
        }
    ]
    const chatsArray = [
        {
            id: 1,
            image: dummy2
        },
        {
            id: 2,
            image: dummy2
        },
        {
            id: 3,
            image: dummy2
        },
        {
            id: 4,
            image: dummy2
        },
        {
            id: 5,
            image: dummy2
        },
        {
            id: 6,
            image: dummy2
        }
    ]

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
                {appointmentArray.map((item) => {
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
                                <div className='kwn-right_side_bar-appointment_view_schedule_botton'>
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
