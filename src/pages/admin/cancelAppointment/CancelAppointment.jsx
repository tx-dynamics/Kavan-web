import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { filled, redCrossWithDots, unFilled } from '../../../assets'
import { Button, SearchBar, TextInput } from '../../../components'
import './cancelAppointment.css'
const CancelAppointment = () => {
    const navigate = useNavigate()
    const [selected, setSelected] = useState({ id: 0 })
    const [isSubmit, setIsSubmit] = useState(false)

    const reasonArray = [
        {
            id: 0,
            title: 'I don’t want to consult'
        },
        {
            id: 1,
            title: 'I have recovered from disease'
        },
        {
            id: 2,
            title: 'I just want to cancel'
        },
        {
            id: 3,
            title: 'I have found a suitable medicine'
        },
        {
            id: 4,
            title: 'Others'
        },
    ]

    return (
        <div className='kavan_admin_main_container'>
            <div className='kwn-search'>
                <SearchBar />
            </div>
            {isSubmit ?
                <div className="kwn-reschedule_appointment_success_top_view">
                    <div className="kwn-reschedule_appointment_success_view">
                        <img src={redCrossWithDots} />
                        <h1>Appointment canceled</h1>
                        <h3>We have very sad that have canceled your
                            appointment. We will always improve our
                            service to satisfy you in the next appointment.</h3>
                        <div className='kwn-reschedule_appointment_appointment_button'>
                            <Button onClick={() => navigate(-1)} style={{ width: 214 }}>Ok</Button>
                        </div>

                    </div>
                </div>
                :
                <>
                    <h1 className='kwn-heading'>Cancel</h1>
                    <div className='kwn_reschedule_appointment_reasons_top_view'>
                        <h2>REASON FOR cancel appointment</h2>
                        <div className='kwn_reschedule_appointment_reasons_view'>
                            {reasonArray.map((item) => {
                                return (
                                    <div onClick={() => setSelected(item)} className='kwn_reschedule_appointment_reasons'>
                                        <img src={item.id === selected.id ? filled : unFilled} />
                                        <h2>{item.title}</h2>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='kwn_reschedule_appointment_inputs_top_view'>
                            <TextInput textarea type={'text'} placeholder={'Write reason here'} inputStyle={{ fontSize: 20 }} style={{ width: '100%' }} />
                        </div>
                        <div className='kwn_reschedule_appointment_button_view'>
                            <Button onClick={() => setIsSubmit(true)}>Submit</Button>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default CancelAppointment
