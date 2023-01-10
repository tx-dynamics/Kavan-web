import React from 'react'
import { apple, blackCheck, facebookBlue, google } from '../../../assets'
import { Navbar, Footer, TextInput, Button } from '../../../components'
import { useNavigate } from 'react-router-dom'
import './signUp.css'

export default function SignUp() {
    const navigate = useNavigate()
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
                    <TextInput type={'text'} title={'Full Name'} placeholder={'EX:Lonnie Murphy'} />
                    <TextInput type={'text'} title={'Email'} placeholder={'EX:Lonnie@gmail.com'} />
                    <TextInput type={'password'} title={'Password'} placeholder={'************'} />
                    <TextInput type={'password'} title={'Confirm Password'} placeholder={'************'} />
                </div>
                <div className='kwn-sign_up-terms_container'>
                    <img alt='' src={blackCheck} />
                    <p>I agree to <span>Terms & Conditions</span></p>
                </div>
                <div className='kwn-sign_up-Button_container'>
                    <Button onClick={() => navigate('/phoneNumber')}>Sign UP</Button>
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
