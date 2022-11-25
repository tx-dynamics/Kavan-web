import React, { useState } from 'react'
import { dummy2 } from '../../../assets'
import { AppointmentView, SearchBar } from '../../../components'
import './appointments.css'
const Appointments = () => {
    const [selectedType, setSelectedType] = useState({ id: 0, title: 'Requests' })

    const appointmentTypeArray = [
        {
            id: 0,
            title: 'Requests',
        },
        {
            id: 1,
            title: 'Pending',
        },
        {
            id: 2,
            title: 'Upcoming',
        },
        {
            id: 3,
            title: 'Reschedule',
        },
        {
            id: 4,
            title: 'Completed',
        },
        {
            id: 5,
            title: 'Cancelled',
        },
    ]

    const appointmentArray = [
        {
            id: 1,
            date: '11 June 2021',
            time: '10:00 AM',
            reason: 'I don’t want to consult right now',
            type: 'Requests',
            image: dummy2,
            name: 'Dr. Atiana',
            profession: 'General Psychologist specialist',
        },
        {
            id: 2,
            date: '11 June 2021',
            time: '10:00 AM',
            reason: 'I don’t want to consult right now',
            type: 'Pending',
            image: dummy2,
            name: 'Dr. Atiana',
            profession: 'General Psychologist specialist',
        },
        {
            id: 3,
            date: '11 June 2021',
            time: '10:00 AM',
            reason: 'I don’t want to consult right now',
            type: 'Upcoming',
            image: dummy2,
            name: 'Dr. Atiana',
            profession: 'General Psychologist specialist',
        },
        {
            id: 4,
            date: '11 June 2021',
            time: '10:00 AM',
            reason: 'I don’t want to consult right now',
            type: 'Reschedule',
            image: dummy2,
            name: 'Dr. Atiana',
            profession: 'General Psychologist specialist',
        },
        {
            id: 5,
            date: '11 June 2021',
            time: '10:00 AM',
            reason: 'I don’t want to consult right now',
            type: 'Completed',
            image: dummy2,
            name: 'Dr. Atiana',
            profession: 'General Psychologist specialist',
        },
        {
            id: 6,
            date: '11 June 2021',
            time: '10:00 AM',
            reason: 'I don’t want to consult right now',
            type: 'Cancelled',
            image: dummy2,
            name: 'Dr. Atiana',
            profession: 'General Psychologist specialist',
        },
    ]

    return (
        <div className='kavan_admin_main_container'>
            <div className='kwn-search'>
                <SearchBar />
            </div>
            <h1 className='kwn-heading'>appointments</h1>
            <div className='kwn_appointments_type_top_view'>
                {appointmentTypeArray.map((item) => {
                    return (
                        <div className='kwn_appointments_type_view' onClick={() => setSelectedType(item)} style={{ backgroundColor: item.id === selectedType.id ? '#006039' : '#ffffff' }} key={item.id}>
                            <h3 style={{ color: item.id === selectedType.id ? '#ffffff' : '#666666' }}>{item.title}</h3>
                        </div>
                    )
                })}
            </div>
            <div className='kwn-appointsments-appointment_view'>
                {appointmentArray.filter((item) => item.type === selectedType.title).map((item) => {
                    return (
                        <AppointmentView type={item.type} />
                    )
                })}
            </div>
        </div>
    )
}

export default Appointments
