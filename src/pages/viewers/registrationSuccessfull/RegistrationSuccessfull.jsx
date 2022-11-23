import React from 'react'
import { useNavigate } from 'react-router-dom'
import { checkWithDots } from '../../../assets'
import { Button, Footer, Navbar } from '../../../components'
import './registrationSuccessfull.css'
const RegistrationSuccessfull = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Navbar />
            <div className='kwn-reg_successfull-main_container'>
                <div className='kwn-reg_successfull-title_container'>
                    <img src={checkWithDots} />
                    <h1>You are Registered Successfully</h1>
                    <h2>Your profile has been approved by admin. Now can start start treating patients</h2>
                </div>
                <Button onClick={() => navigate('/registrationPending')}>Start Questions</Button>
                <div className='kwn-reg_successfull-get_started'>
                    <p>Get Started</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default RegistrationSuccessfull

