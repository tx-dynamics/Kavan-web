import React from 'react'
import { navbarLogo, facebook, instagram, linkedIn, googleStore, appleStore } from '../../assets'
import './footer.css'

export default function Footer() {
    return (
        <div className='footerTopView'>
            <div className='footerContainer' >
                <div className='footerItemTopView'>
                    <h1>About us</h1>
                    <img src={navbarLogo} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio fusce ut dictumst sollicitudin lorem ac nisi. At feugiat erat massa vitae. Elit donec ut elit quis in nunc mauris. Facilisis leo aenean magna nisl sed elementum. Odio fusce ut dictumst sollicitudin lorem ac nisi.</p>
                    <div className='footerSocialView'>
                        <img src={facebook} />
                        <img src={linkedIn} />
                        <img src={instagram} />

                    </div>
                </div>
                <div className='footerItemTopView'>
                    <h1>Website</h1>
                    <h2>Psychologists</h2>
                    <h2>About us</h2>
                    <h2>Contact us</h2>
                    <h2>Privacy Policy</h2>
                    <h2>Terms and Conditions</h2>

                </div>
                <div className='footerItemTopView'>
                    <h1 style={{ marginBottom: 5 }}>Download our App</h1>
                    <div >
                        <img className='socialapp' style={{ marginBottom: 5 }} src={appleStore} />
                    </div>
                    <img className='socialapp' style={{ marginBottom: 5 }} src={googleStore} />
                    <h1 style={{ marginBottom: 5 }}>Support</h1>
                    <h2>Chat with us</h2>
                    <h2>Find Psychologists</h2>
                </div>
            </div>
            <h3>Copyrights © Kavan Health 2022 | Powered by Tx Dynamics</h3>
        </div>
    )
}
