
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { clockWhite, cross, dummy, dummy2, education, experience, threeDotsWhite } from '../../../assets'
import { Button, SearchBar, TextInput } from '../../../components'
import './editProfile.css'

const EditProfile = () => {
    const [coverImage, setCoverImage] = useState('')
    const [image, setImage] = useState('')
    const [modelShow, setModelShow] = useState(false)
    const [professionDropdown, setProfessionDropdown] = useState(false)
    const [sessionDropdown, setSessionDropdown] = useState(false)
    const [yearsDropdown, setYearsDropdown] = useState(false)
    const [educationDropdown, setEducationDropdown] = useState(false)
    const [timeDropdown, setTimeDropdown] = useState(false)
    const [therapistDropdown, setTherapistDropdown] = useState(false)
    const [sessionStartDropdown, setSessionStartDropdown] = useState(false)
    const [sessionEndDropdown, setSessionEndDropdown] = useState(false)
    const [specialiezedText, setSpecialiezedText] = useState('')
    const [fieldArray, setFieldArray] = useState(
        [
            {
                id: 0,
                title: 'Anxity'
            },
            {
                id: 1,
                title: 'Phobia'
            },
            {
                id: 2,
                title: 'Grief'
            },
            {
                id: 3,
                title: 'OCD'
            },
            {
                id: 4,
                title: 'Sexual orientation'
            },
        ]
    )

    const navigate = useNavigate()



    const addSpecialiezed = () => {
        var data = [...fieldArray];
        data.push({ id: data.length + 1, title: specialiezedText });
        setFieldArray(data)
        setSpecialiezedText('')
    }

    const subtractSpecialiezed = (value) => {
        var data = [...fieldArray];
        var final = data.filter(element => element.id !== value);
        setFieldArray(final)
    }
    const onChangeCover = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setCoverImage(reader.result);
        };
    };
    const onChangeimage = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImage(reader.result);
        };
    };

    return (
        <div className='kavan_admin_main_container'>
            <div className='kwn-search'>
                <SearchBar />
            </div>
            <h1 className='kwn-heading'>Edit Profile</h1>
            <div className='kwn-profile-images_top_view'>
                <div className='kwn-profile_three_dots'>
                    <img onClick={() => setModelShow(!modelShow)} src={threeDotsWhite} />
                    <div className='kwn_three_dot_top_view' style={{ top: -10 }}>
                        {modelShow &&
                            <div className='kwn-three_dot_modal'>
                                <input
                                    onChange={(e) => onChangeCover(e.target.files[0])}
                                    id="selectCover"
                                    type={"file"}
                                    style={{ display: "none" }}
                                />
                                <h2 onClick={() => document.getElementById("selectCover").click()}>Edit cover photo</h2>
                                <h2 onClick={() => document.getElementById("selectImage").click()}>Edit profile photo</h2>
                                <input
                                    onChange={(e) => onChangeimage(e.target.files[0])}
                                    id="selectImage"
                                    type={"file"}
                                    style={{ display: "none" }}
                                />
                            </div>
                        }
                    </div>
                </div>
                <div className='kwn-profile-cover_image'>
                    <img src={coverImage === '' ? dummy : coverImage} />
                </div>
                <div className='kwn-profile_image'>
                    <img src={image === '' ? dummy2 : image} />
                    <h2>Dr. Atiana</h2>
                    <h3>Clinical psychologist</h3>
                </div>
            </div>
            <div className='kwn-profile-text_inputs_top_view'>
                <TextInput style={{ width: '100%' }} title={'Full Name'} placeholder={'DR.ATIANA'} />
                <TextInput style={{ width: '100%' }} title={'Email'} placeholder={'Atiana1980@gmail.com'} />
                <TextInput style={{ width: '100%' }} dropDownValue={professionDropdown} onClickDropDown={() => setProfessionDropdown(!professionDropdown)} type={'dropdown'} title={'What is your Profession?'} placeholder={'Online'} />
                <TextInput textarea style={{ width: '100%' }} title={'About Me'} placeholder={'Dr. Atiana practices through kavan.pk. ThePsychologist has treated735 patients and has 666 published reviews on Kavan. Dr. Atiana practices through kavan.com. ThePsychologist has treated735patients and has 666 published reviews on Kavan.'} />
                <TextInput style={{ width: '100%' }} dropDownValue={sessionDropdown} onClickDropDown={() => setSessionDropdown(!sessionDropdown)} type={'dropdown'} title={'Where do you hold your sessions?'} placeholder={'Online'} />
                <TextInput style={{ width: '100%' }} dropDownValue={yearsDropdown} onClickDropDown={() => setYearsDropdown(!yearsDropdown)} type={'dropdown'} title={'How many years have you been practicing as a Psychologist?'} placeholder={'5 Years'} />
                <TextInput style={{ width: '100%' }} dropDownValue={educationDropdown} onClickDropDown={() => setEducationDropdown(!educationDropdown)} type={'dropdown'} title={'What is your highest Education?'} placeholder={'PHD'} />
                <TextInput style={{ width: '100%' }} value={specialiezedText} onKeyPress={(e) => e.key === 'Enter' && addSpecialiezed()} onChange={(text) => setSpecialiezedText(text.target.value)} type={'text'} title={'What are you specialized in? Top 5 Disorders'} placeholder={'Search your specialist disease'} />
                <div className='kwn-fill_out_form-specialiezed_View' style={{ width: '100%' }}>
                    {fieldArray.map((item) => {
                        return (
                            <div>
                                <p>{item.title}</p>
                                <img alt='' onClick={() => subtractSpecialiezed(item.id)} src={cross} />
                            </div>
                        )
                    }).slice(0, 5)}
                </div>
                <TextInput style={{ width: '100%' }} dropDownValue={timeDropdown} onClickDropDown={() => setTimeDropdown(!timeDropdown)} type={'dropdown'} title={'When could you see patients?'} placeholder={'Morning'} />
                <TextInput style={{ width: '100%' }} dropDownValue={therapistDropdown} onClickDropDown={() => setTherapistDropdown(!therapistDropdown)} type={'dropdown'} title={'Could you have online Therapies?'} placeholder={'Yes'} />
                <TextInput style={{ width: '100%' }} dropDownValue={sessionStartDropdown} onClickDropDown={() => setSessionStartDropdown(!sessionStartDropdown)} type={'dropdown'} title={'How long does each session start?'} placeholder={'1 Hour'} />
                <TextInput style={{ width: '100%' }} dropDownValue={sessionEndDropdown} onClickDropDown={() => setSessionEndDropdown(!sessionEndDropdown)} type={'dropdown'} title={'What is the average price of each sesion?'} placeholder={'$200'} />
            </div>
            <div className='kwn_edit_profile_button_view'>
                <Button onClick={() => navigate(-1)}>Save</Button>
            </div>

        </div>
    )
}

export default EditProfile
