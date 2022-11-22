import React from 'react'
import { Navbar, Footer, TextInput, Button } from '../../../components'
import './contactUs.css'

export default function ContactUs() {
    return (
        <div>
            <Navbar />
            <div className='kwn-contact_us-main_container'>
                <h1>Contact Us</h1>
                <div className='kwn-contact_us-form_container'>
                    <TextInput type={'text'} title={'Name'} placeholder={'EX:Lonnie Murphy'} />
                    <TextInput type={'text'} title={'Email'} placeholder={'EX:Lonnie@gmail.com'} />
                    <TextInput type={'text'} title={'Subject'} placeholder={'EX:Project complaint'} />
                    <TextInput type={'text'} textarea title={'Message'} placeholder={'Write Here'} />
                    <div className='kwn-contact_us-Button_container'>
                        <Button>Submit</Button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
