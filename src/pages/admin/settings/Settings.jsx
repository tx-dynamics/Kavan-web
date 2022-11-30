
import React, { useState } from 'react'
import { arrowRightCircle, faqs, language, notification, privacy, profile, reviews, share, terms } from '../../../assets'
import { SearchBar } from '../../../components'
import './settings.css'
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
    const navigate = useNavigate()
    const settingArray = [
        {
            id: 0,
            title: 'Notifications',
            logo: notification,
            route: ''
        },
        {
            id: 1,
            title: 'Profile',
            logo: profile,
            route: 'profile'
        },
        {
            id: 2,
            title: 'Languages',
            logo: language,
            route: ''

        },
        {
            id: 3,
            title: 'FAQ',
            logo: faqs,
            route: 'questions'

        },
        {
            id: 4,
            title: 'Review',
            logo: reviews,
            route: 'reviews'

        },
        {
            id: 5,
            title: 'Share',
            logo: share,
            route: ''

        },
        {
            id: 6,
            title: 'privacy policy',
            logo: privacy,
            route: ''

        },
        {
            id: 7,
            title: 'Terms & conditions',
            logo: terms,
            route: ''

        },
    ]

    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#006039',
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color:
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
        },
    }));

    return (
        <div className='kavan_admin_main_container'>
            <div className='kwn-search'>
                <SearchBar />
            </div>
            <h1 className='kwn-heading'>Settings</h1>
            <div className='kwn-settings_item_top_view'>
                {settingArray.map((item) => {
                    return (
                        <>
                            <div onClick={() => navigate(item.route)} className='kwn-settings_item_view'>
                                <div className='kwn_settings_item_title_view'>
                                    <img src={item.logo} />
                                    <h2>{item.title}</h2>
                                </div>
                                {item.title === 'Notifications' ?
                                    <IOSSwitch />
                                    :
                                    <img src={arrowRightCircle} />
                                }
                            </div>
                            <div className='kwn-settings_item_divider' />
                        </>
                    )
                })}
            </div>

        </div>
    )
}

export default Settings
