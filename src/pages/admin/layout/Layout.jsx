import React from 'react'
import { LeftSideBar, RightSideBar } from '../../../components'
import * as Admin from '../';

import './layout.css'
import { Route, Routes } from 'react-router-dom';
import AppointmentStack from '../../../navigation/appointmentStack/AppointmentStack';
import ChatStack from '../../../navigation/chatStack/ChatStack';
import SettingStack from '../../../navigation/settngStack/SettingStack';

const Layout = () => {
    return (
        <div className='kwn-admin-layout'>
            <LeftSideBar />
            <div className="kwn-admin-overflow">
                <Routes>
                    <Route path="AdminHome" element={<Admin.Dashboard />} />
                    <Route exact path="AppointmentStack/*" element={<AppointmentStack />} />
                    <Route exact path="ChatStack/*" element={<ChatStack />} />
                    <Route exact path="SettingStack/*" element={<SettingStack />} />
                </Routes>
            </div>

            <RightSideBar />
        </div>
    )
}

export default Layout
