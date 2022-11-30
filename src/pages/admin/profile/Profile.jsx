
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { clockWhite, cross, dummy, dummy2, education, experience, threeDotsWhite } from '../../../assets'
import { SearchBar } from '../../../components'
import './profile.css'

const Profile = () => {
    const [modelShow, setModelShow] = useState(false)
    const navigate = useNavigate()

    const fieldArray = [
        {
            id: 0,
            title: 'Anxity'
        },
        {
            id: 0,
            title: 'Phobia'
        },
        {
            id: 0,
            title: 'Grief'
        },
        {
            id: 0,
            title: 'OCD'
        },
        {
            id: 0,
            title: 'Sexual orientation'
        },
    ]

    return (
        <div className='kavan_admin_main_container'>
            <div className='kwn-search'>
                <SearchBar />
            </div>
            <h1 className='kwn-heading'>Profile</h1>
            <div className='kwn-profile-images_top_view'>
                <div className='kwn-profile_three_dots'>
                    <img onClick={() => setModelShow(!modelShow)} src={threeDotsWhite} />
                    <div className='kwn_three_dot_top_view' style={{ top: -10 }}>
                        {modelShow &&
                            <div className='kwn-three_dot_modal'>
                                <h2 onClick={() => navigate('/dashboard/SettingStack/editProfile')}>Edit profile</h2>
                                <h2 onClick={() => navigate('/dashboard/SettingStack/reviews')}>Reviews</h2>
                            </div>
                        }
                    </div>
                </div>
                <div className='kwn-profile-cover_image'>
                    <img src={dummy} />
                </div>
                <div className='kwn-profile_image'>
                    <img src={dummy2} />
                    <h2>Dr. Atiana</h2>
                    <h3>Clinical psychologist</h3>
                </div>
            </div>
            <div className='kwn-profile-about_me_top_view'>
                <div className='kwn-profile-about_me'>
                    <h2>About Me</h2>
                    <div className='kwn-profile-shadow_box'>
                        <h3>Dr. Atiana practices through kavan.pk. ThePsychologist has treated735 patient and has 666 published reviews on Kavan</h3>
                    </div>
                </div>
                <div className='kwn-profile-about_me'>
                    <h2>Education</h2>
                    <div className='kwn-profile-shadow_box'>
                        <div className='kwn-profile-circle_view'>
                            <img src={education} />
                        </div>
                        <h4>2022 -Phd Psychology</h4>
                    </div>
                </div>
                <div className='kwn-profile-about_me'>
                    <h2>Experince</h2>
                    <div className='kwn-profile-shadow_box'>
                        <div className='kwn-profile-circle_view'>
                            <img src={experience} />
                        </div>
                        <h4>5 Years as Psychologist</h4>
                    </div>
                </div>
                <div className='kwn-profile-about_me'>
                    <h2>Availability</h2>
                    <div className='kwn-profile-shadow_box'>
                        <div className='kwn-profile-circle_view'>
                            <img src={clockWhite} />
                        </div>
                        <div className='kwn-profile-availablity_content'>
                            <h4>Consultation</h4>
                            <h5>Monday - Friday 11:00 AM - 12:30PM</h5>
                        </div>
                    </div>
                </div>
                <div className='kwn-profile-about_me'>
                    <h2>Specialist</h2>
                    <div className='kwn-profile-shadow_box'>
                        <div className='kwn-profile_specialist_view'>
                            <h4>Fields</h4>
                            <div className='kwn-profile_specialist_tag_top_view'>
                                {fieldArray.map((item) => {
                                    return (
                                        <div className='kwn-profile_specialist_tag_view'>
                                            <p>{item.title}</p>
                                            <img src={cross} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
