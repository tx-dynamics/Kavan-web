import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Footer, Navbar, TextInput } from '../../../components'
import './confirmPassword.css'
const ConfirmPassword = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    return (
        <div>
            <Navbar />
            <div className='kwn-confirm_password-main_container'>
                <div className='kwn-confirm_password-title_container'>
                    <h1>Confirm Password</h1>
                    <h2>Enter and confirm a new password</h2>
                </div>
                <div className='kwn-confirm_password-form_container'>
                    <TextInput eyeValue={showPassword} onClickEye={() => setShowPassword(!showPassword)} type={'password'} title={'Password'} placeholder={'***********'} />
                    <TextInput eyeValue={showConfirmPassword} onClickEye={() => setShowConfirmPassword(!showConfirmPassword)} type={'password'} title={' Confirm Password'} placeholder={'***********'} />
                </div>
                <div className='kwn-confirm_password-Button_container'>
                    <Button onClick={() => navigate('/signIn')}>Create</Button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ConfirmPassword
