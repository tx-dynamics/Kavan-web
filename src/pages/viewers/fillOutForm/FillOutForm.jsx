import React, { useState } from 'react'
import { apple, blackCheck, cross, facebookBlue, google, hide } from '../../../assets'
import { Navbar, Footer, TextInput, Button } from '../../../components'
import './fillOutForm.css'

export default function FillOutForm() {
    const [professionDropdown, setProfessionDropdown] = useState(false)
    const [specialiezedText, setSpecialiezedText] = useState('')
    const [specialiezedArray, setSpecialiezedArray] = useState([])

    const addSpecialiezed = () => {
        var data = [...specialiezedArray];
        data.push({ id: data.length + 1, title: specialiezedText });
        setSpecialiezedArray(data)
        setSpecialiezedText('')

    }
    const subtractSpecialiezed = (value) => {
        var data = [...specialiezedArray];
        var final = data.filter(element => element.id !== value);
        setSpecialiezedArray(final)
    }

    return (
        <div>
            <Navbar />
            <div className='kwn-fill_out_form-main_container'>
                <div className='kwn-fill_out_form-title_container'>
                    <h1>Fill out the form</h1>
                    <h2>Please fill out the form that we can know you better</h2>
                </div>
                <div className='kwn-fill_out_form-form_container'>
                    <TextInput dropDownValue={professionDropdown} onClickDropDown={() => setProfessionDropdown(!professionDropdown)} type={'dropdown'} title={'What is your Profession?'} placeholder={'Online'} />
                    <TextInput type={'text'} textarea title={'About yourself'} placeholder={'Write Here'} />
                    <TextInput type={'text'} title={'We only accept registered psychologist, What is your registered number?'} placeholder={'PKR564544u45#'} />
                    <TextInput dropDownValue={professionDropdown} onClickDropDown={() => setProfessionDropdown(!professionDropdown)} type={'dropdown'} title={'Where do you hold your sessions?'} placeholder={'Online'} />
                    <TextInput dropDownValue={professionDropdown} onClickDropDown={() => setProfessionDropdown(!professionDropdown)} type={'dropdown'} title={'How many years have you been practicing as a Psychologist?'} placeholder={'5 Years'} />
                    <TextInput dropDownValue={professionDropdown} onClickDropDown={() => setProfessionDropdown(!professionDropdown)} type={'dropdown'} title={'What is your highest Education?'} placeholder={'Phd'} />
                    <TextInput value={specialiezedText} onKeyPress={(e) => e.key === 'Enter' && addSpecialiezed()} onChange={(text) => setSpecialiezedText(text.target.value)} type={'text'} title={'What are you specialized in? Top 5 Disorders'} placeholder={'Search your specialist disease'} />
                    <div className='kwn-fill_out_form-specialiezed_View'>
                        {specialiezedArray.map((item) => {
                            return (
                                <div>
                                    <p>{item.title}</p>
                                    <img onClick={() => subtractSpecialiezed(item.id)} src={cross} />
                                </div>
                            )
                        }).slice(0, 5)}

                    </div>
                    <TextInput dropDownValue={professionDropdown} onClickDropDown={() => setProfessionDropdown(!professionDropdown)} type={'dropdown'} title={'When could you see patients?'} placeholder={'Morning'} />
                    <TextInput dropDownValue={professionDropdown} onClickDropDown={() => setProfessionDropdown(!professionDropdown)} type={'dropdown'} title={'Could you have online Therapies?'} placeholder={'Yes'} />
                    <TextInput dropDownValue={professionDropdown} onClickDropDown={() => setProfessionDropdown(!professionDropdown)} type={'dropdown'} title={'How long does each session last?'} placeholder={'1 Hour'} />
                    <TextInput type={'text'} title={'What is the average price of each session?'} placeholder={'1 Hour'} />
                </div>

                <div className='kwn-fill_out_form-Button_container'>
                    <Button>Create Profile</Button>
                </div>

            </div>
            <Footer />
        </div>
    )
}
