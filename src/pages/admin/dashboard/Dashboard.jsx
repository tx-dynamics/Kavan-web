import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { arrowLeft, arrowRight, clock, dummy1, dummy2, search, sideBarAppointment, threeDots, users } from '../../../assets'
import { AppointmentView, SearchBar } from '../../../components'
import { Area } from '@ant-design/plots';
import './dashboard.css'

const Dashboard = () => {
    const graphArray = [
        {
            'Date': '1',
            'scales': 100
        },
        {
            'Date': '2',
            'scales': 105
        },
        {
            'Date': '3',
            'scales': 200
        },
        {
            'Date': '4',
            'scales': 250
        },
        {
            'Date': '5',
            'scales': 165
        },
        {
            'Date': '6',
            'scales': 300
        },
        {
            'Date': '7',
            'scales': 350
        },
        {
            'Date': '8',
            'scales': 370
        },
        {
            'Date': '9',
            'scales': 390
        },
        {
            'Date': '10',
            'scales': 400
        },
        {
            'Date': '11',
            'scales': 420
        },
        {
            'Date': '12',
            'scales': 230
        },
        {
            'Date': '13',
            'scales': 312
        },
        {
            'Date': '14',
            'scales': 413
        },
        {
            'Date': '15',
            'scales': 450
        },
        {
            'Date': '16',
            'scales': 470
        },
        {
            'Date': '17',
            'scales': 340
        },
        {
            'Date': '18',
            'scales': 500
        },
        {
            'Date': '19',
            'scales': 203
        },
        {
            'Date': '20',
            'scales': 10
        },
        {
            'Date': '21',
            'scales': 50
        },
        {
            'Date': '22',
            'scales': 430
        },
        {
            'Date': '23',
            'scales': 340
        },
        {
            'Date': '24',
            'scales': 120
        },
        // {
        //     Date:25,
        //     scales:4
        // },
        // {
        //     Date:26,
        //     scales:4
        // },
        // {
        //     Date:27,
        //     scales:4
        // },
        // {
        //     Date:28,
        //     scales:4
        // },
        // {
        //     Date:29,
        //     scales:4
        // },
        // {
        //     Date:30,
        //     scales:4
        // },


    ]
    const appointmentPatientArray = [
        {
            id: 1,
            title: 'Appointments',
            count: '24.5k',
            img: sideBarAppointment
        },
        {
            id: 2,
            title: 'Patients',
            count: '24.5k',
            img: users
        }
    ]

    const config = {
        xField: 'Date',
        yField: 'scales',
        xAxis: {
            range: [0, 1],
            tickCount: 7,
        },
        line: { color: '#006039', size: 4 },
        color: '#006039',

        areaStyle: () => {
            return {
                fillOpacity: 10,
                fill: 'l(270) 0:#ffffff 0.3:#a4d2cd 0.5:#59a392 0.7:#499783 1:#006039',
            };
        },
    };

    return (
        <div className='kavan_admin_main_container'>
            <div className='kwn-search'>
                <SearchBar />
            </div>
            <div className='kwn-dashboard-title_container'>
                <h1>Kavan Dashboard</h1>
                <h3>Welcome, Annette!</h3>
            </div>
            <div className='kwn-dashboard-appointments_and_patients_top_view'>
                {appointmentPatientArray.map((item) => {
                    return (
                        <div className='kwn-dashboard-appointments_and_patients_view'>
                            <div className='kwn-dashboard-round_calender_view'>
                                <img src={item.img} />
                            </div>
                            <div>
                                <h2>{item.count}</h2>
                                <h3>{item.title}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className='kwn-dashboard-arrows_top_view'>
                <h1 className='kwn-heading'>Patient’s Graph</h1>
                <div className='kwn-dashboard-arrows_view'>
                    <div>
                        <img src={arrowLeft} />
                    </div>
                    <div>
                        <img src={arrowRight} />
                    </div>
                </div>
            </div>

            <div className='kwn-dashboard-total_patients_view'>
                <h3>Total patient in july</h3>
                <h4>165</h4>
                <h5>20.5 %</h5>
            </div>
            <div className='kwn-dashboard-graph_view'>
                <Area data={graphArray} {...config} />
            </div>

            <div className='kwn-dashboard-appointments_top_view'>
                <h1 className='kwn-heading'>appointments requests </h1>
                <div className='kwn-dashboard-appointment_view'>
                    <AppointmentView />
                    <AppointmentView />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
