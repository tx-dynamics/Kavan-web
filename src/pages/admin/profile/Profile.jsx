
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { clockWhite, cross, dummy, dummy2, education, experience, threeDotsWhite } from '../../../assets'
import { SearchBar } from '../../../components'
import { req, authReq } from '../../../requests'
import './profile.css'

const Profile = () => {
    const [modelShow, setModelShow] = useState(false)
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    const [fieldArray, setFieldArray] = useState([
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
    ])

    useEffect(() => {
        authReq('GET', '/user/me')
            .then(({user}) => {
                console.log(user.specializations)
                setUser(user)
                setFieldArray(user.specializations.map((item, index) => { return {id: index, title: item} }))
            })
    }, [])

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
                    <h2>{user?.name}</h2>
                    <h3>{user?.speciality} psychologist</h3>
                </div>
            </div>
            <div className='kwn-profile-about_me_top_view'>
                <div className='kwn-profile-about_me'>
                    <h2>About Me</h2>
                    <div className='kwn-profile-shadow_box'>
                        <h3>{user?.bio}</h3>
                    </div>
                </div>
                <div className='kwn-profile-about_me'>
                    <h2>Education</h2>
                    {
                        user?.degrees?.map(deg => <div className='kwn-profile-shadow_box'>
                            <div className='kwn-profile-circle_view'>
                                <img src={education} />
                            </div>
                            <h4>{deg.year} - {deg.qualification}</h4>
                        </div>)
                    }
                </div>
                <div className='kwn-profile-about_me'>
                    <h2>Experince</h2>
                    {
                        user?.experiences?.map(exp => <div className='kwn-profile-shadow_box'>
                        <div className='kwn-profile-circle_view'>
                            <img src={experience} />
                        </div>
                        <h4>{`${exp.startDate}`.split('-')[0]} - {exp.position} at {exp.hospital}</h4>
                    </div>)
                    }
                </div>
                <div className='kwn-profile-about_me'>
                    <h2>Availability</h2>
                    <div className='kwn-profile-shadow_box'>
                        <div className='kwn-profile-circle_view'>
                            <img src={clockWhite} />
                        </div>
                        <div className='kwn-profile-availablity_content'>
                            <h4>Consultation</h4>
                            <h5>{user?.dayStart} - {user?.dayEnd} {`${new Date(user?.startDate).toLocaleTimeString()}`} - {`${new Date(user?.endDate).toLocaleTimeString()}`}</h5>
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
