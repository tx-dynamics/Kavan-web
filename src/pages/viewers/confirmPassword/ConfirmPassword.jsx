import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllParams } from '../../../urlParams'
import { req } from "../../../requests";
import { Button, Footer, Navbar, TextInput } from '../../../components'
import './confirmPassword.css'
const ConfirmPassword = () => {
    const navigate = useNavigate()
    const params = getAllParams()
    const email = params.email
    const otp = params.otp
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
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
                    <TextInput onChange={ev => setPassword(ev.target.value)} value={password} eyeValue={showPassword} onClickEye={() => setShowPassword(!showPassword)} type={'password'} title={'Password'} placeholder={'***********'} />
                    <TextInput onChange={ev => setConfirmPassword(ev.target.value)} value={confirmPassword} eyeValue={showConfirmPassword} onClickEye={() => setShowConfirmPassword(!showConfirmPassword)} type={'password'} title={' Confirm Password'} placeholder={'***********'} />
                </div>
                <div className='kwn-confirm_password-Button_container'>
                    <Button onClick={async () => {
                        await req('PATCH', '/user/resetPassword', { email, otp, password })
                        navigate('/signIn')
                    }}>Create</Button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ConfirmPassword
