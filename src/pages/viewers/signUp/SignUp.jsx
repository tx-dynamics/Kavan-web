import React, { useState } from 'react'
import { apple, blackCheck, facebookBlue, google } from '../../../assets'
import { Navbar, Footer, TextInput, Button } from '../../../components'
import { req } from '../../../requests'
import { useNavigate } from 'react-router-dom'
import './signUp.css'

export default function SignUp() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [confirmationMessage, setConfirmationMessage] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const socialArray = [
        {
            id: 1,
            title: 'Continue with Google',
            icon: google
        },
        {
            id: 1,
            title: 'Continue with Facebook',
            icon: facebookBlue
        },
        {
            id: 1,
            title: 'Continue with Apple',
            icon: apple
        }
    ]

    return (
        <div>
            <Navbar />
            <div className='kwn-sign_up-main_container'>
                <div className='kwn-sign_up-title_container'>
                    <h1>Hello Awsome</h1>
                    <h2>Register yourself to start with KAVAN HEALTH</h2>
                </div>

                <div className='kwn-sign_up-form_container'>
                    <TextInput type={'text'} title={'Full Name'} value={name} onChange={ev => setName(ev.target.value)} placeholder={'EX:Lonnie Murphy'} />
                    <TextInput type={'text'} title={'Email'} value={email} onChange={ev => setEmail(ev.target.value)} placeholder={'EX:Lonnie@gmail.com'} />
                    <TextInput type={'password'} title={'Password'} value={password} onChange={ev => setPassword(ev.target.value)} placeholder={'************'} />
                    <TextInput type={'password'} title={'Confirm Password'} value={confirmPassword} onChange={ev => {
                        setConfirmPassword(ev.target.value)
                        if(ev.target.value != password) setConfirmationMessage("Your password does not match the confirmation password")
                        else setConfirmationMessage("")
                    }} placeholder={'************'} />
                    <span style={{ color: 'red' }}>{confirmationMessage}</span>
                </div>
                <div className='kwn-sign_up-terms_container'>
                    <img alt='' src={blackCheck} />
                    <p>I agree to <span>Terms & Conditions</span></p>
                </div>
                <div className='kwn-sign_up-Button_container'>
                    <Button onClick={async () => {
                        if(password != confirmPassword) return
                        await req('POST', '/user/signup', {
                            name,
                            email,
                            password,
                        })
                        await req('POST', '/user/sendOTP', { email })
                        navigate(`/verifyEmail?email=${encodeURIComponent(email)}`)
                    }}>Sign UP</Button>
                </div>
                <h3>OR</h3>
                <div className='kwn-sign_up-social_container'>
                    {socialArray.map((item) => {
                        return (
                            <div>
                                <img alt='' src={item.icon} />
                                <p>{item.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}
