import React from 'react'
import { useNavigate } from 'react-router-dom'
import { clockWithDots } from '../../../assets'
import { Button, Footer, Navbar } from '../../../components'
import './registrationPending.css'
const RegistrationPending = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Navbar />
            <div className='kwn-reg_pending-main_container'>
                <div className='kwn-reg_pending-title_container'>
                    <img src={clockWithDots} />
                    <h1>Your Registration Process is Pending!</h1>
                    <h2>After reviewing your profile by admin your profile is live then you can treat the patients</h2>
                </div>
                <Button onClick={() => navigate('/registrationSuccessfull')}>Next</Button>
                <div onClick={() => navigate('/signIn')} className='kwn-reg_pending-back_to_login'>
                    <p >Back to login</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default RegistrationPending
