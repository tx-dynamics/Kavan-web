import React from 'react'
import { useNavigate } from 'react-router-dom'
import { navbarLogo, sideBarAppointment, sideBarChat, sideBarHome, sideBarLogout, sideBarSettings } from '../../assets'
import './leftSideBar.css'
const LeftSideBar = () => {
    const navigate = useNavigate()
    const optionsArray = [
        {
            id: 1,
            title: 'HOME',
            icon: sideBarHome,
            route: window.location.href.includes("/dashboard/AdminHome"),
            to: '/dashboard/AdminHome',
        },
        {
            id: 2,
            title: 'appointments',
            icon: sideBarAppointment,
            route: window.location.href.includes("/dashboard/AppointmentStack"),
            to: '/dashboard/AppointmentStack',
        },
        {
            id: 3,
            title: 'Chat',
            icon: sideBarChat,
            route: window.location.href.includes("/dashboard/ChatStack"),
            to: '/dashboard/ChatStack',
        },
        {
            id: 4,
            title: 'SETTINGS',
            icon: sideBarSettings,
            route: window.location.href.includes("/dashboard/SettingStack"),
            to: '/dashboard/SettingStack',
        }
    ]

    return (
        <div className='kwn-left_side_bar-main_container'>
            <div className='kwn-left-side_bar-logo_container'>
                <img src={navbarLogo} />
            </div>
            <div className='kwn-left-side_bar-options_container'>
                {optionsArray.map((item) => {
                    return (
                        <div onClick={() => navigate(item.to)} className={'kwn-left-side_bar-options_view'} style={{ backgroundColor: item.route ? '#1f7753' : '', }} >
                            <img src={item.icon} />
                            <h2>{item.title}</h2>
                        </div>
                    )
                })}
            </div>
            <div onClick={() => navigate('/')} className='kwn-left-side_bar-logout_container'>
                <img src={sideBarLogout} />
                <h2>Logout</h2>
            </div>
        </div>
    )
}

export default LeftSideBar
