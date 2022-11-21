import React from 'react'
import './homePage.css'
import { Navbar, Button, Footer } from '../../components'
import { home_headerImg, dummy2, dummy3, dummy1, therapyIcon, star } from '../../assets'

export default function HomePage() {
    const psychologistArray = [
        {
            id: 1,
            title: 'Kavan Helps the psychologist coordinate easily with thier patients.'
        },
        {
            id: 2,
            title: 'Easy Time Managment with the Online sessions.'
        },
        {
            id: 3,
            title: 'Effectively streamline communication with patients.'
        }
    ]

    const availablePatientsArray = [
        {
            id: 1,
            name: 'Dr. Atiana',
            img: dummy3,
            profession: 'General Psychologist specialist',
            reviews: '540 Reviews (4.5 +)'
        },
        {
            id: 2,
            name: 'Dr. Atiana',
            img: dummy2,
            profession: 'General Psychologist specialist',
            reviews: '540 Reviews (4.5 +)'
        },
        {
            id: 3,
            name: 'Dr. Atiana',
            img: dummy3,
            profession: 'General Psychologist specialist',
            reviews: '540 Reviews (4.5 +)'
        },
    ]

    return (
        <div >
            <Navbar />
            <div className='header_main_view section__padding'>
                <div className='header_content'>
                    <h1>Find Mental health in
                        your life with the help of Kavan Health.
                    </h1>
                    <p>The hospital is an integral part of a social and health organization with the function of providing services.</p>
                    <div className='button_view'>
                        <Button border>Psychologist</Button>
                        <Button>About us</Button>
                    </div>
                </div>
                <div className='header_image'>
                    <img src={home_headerImg} alt={'Illustration'} />
                </div>
            </div>

            <div className='body_view'>
                <div className='body_image'>
                    <img src={dummy1} alt={''} />
                </div>
                <div className='body_content'>
                    <h1 className='body_text_one'>What we do</h1>
                    <h1 className='body_text_two'>The best therapy for
                        your mental satisfactions</h1>
                    <p className='body_text_three'>
                        The hospital is an integral part of a social
                        and health organization with the function of providing services.
                    </p>
                    <div className='body_therapy_icon_view'>
                        <img src={therapyIcon} alt={''} />
                        <p>
                            Therapy Session
                        </p>
                    </div>
                </div>
            </div>

            <div className='body_view' style={{ paddingTop: 0, }}>
                <div className='body_content2'>
                    <h1 className='body_text_one' >Benefits of Online</h1>
                    <h1 className='body_text_two' style={{ paddingTop: 15, }}>You Can Do Online Therapy
                        On Your Terms.</h1>
                    <p className='body_text_three' style={{ paddingTop: 15 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit lobortis porttitor commodo mi in dolor facilisis amet, sed. Massa et id augue nisl nisi egestas. Diam diam tellus rutrum enim. Semper nisi pellentesque morbi eget aliquet sem eu. Neque amet neque enim Lorem ipsum dolor sit amet.
                    </p>
                    <Button>Read more</Button>
                </div>
                <div className='body_image2'>
                    <div className='body_image2_1_view'>
                        <img className='body_image2_1' alt={''} src={dummy3} />
                    </div>
                    <div className='body_image2_2_view'>
                        <img className='body_image2_1' alt={''} src={dummy2} />
                    </div>
                </div>
            </div>

            <div className='helpView'>
                <h1 className='body_text_one' >How can we Help</h1>
                <h1 className='body_text_two' style={{ paddingTop: 10 }} >Psychologist & Patients</h1>

            </div>

            <div className='optionsView'>
                <div>
                    <h1 className='body_text_two' style={{ paddingTop: 15, paddingBottom: 15 }}>Psychologist</h1>
                    {psychologistArray.map((item) => {
                        return (
                            <div className='dotTopView'>
                                <div className='dotStyle' />
                                <p className='body_text_three' style={{ paddingTop: 0, }} >
                                    {item.title}
                                </p>
                            </div>
                        )
                    })}

                </div>
                <div className='verticalDivider' />
                <div className='optionsContent'>
                    <h1 className='body_text_two' style={{ paddingTop: 15, paddingBottom: 15 }}>Patients</h1>
                    {psychologistArray.map((item) => {
                        return (
                            <div className='dotTopView'>
                                <div className='dotStyle' />
                                <p className='body_text_three' style={{ paddingTop: 0 }} >
                                    {item.title}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='availalbeTopView'>
                <h1 className='body_text_one' >Psychologists</h1>
                <h1 className='body_text_two' style={{ paddingTop: 10 }} >Psychologist available 27/7 for patients</h1>
                <div className='patientsTopView'>
                    {availablePatientsArray.map((item) => {
                        return (
                            <div className='patientView'>
                                <img src={item.img} alt='' />
                                <p className='patientView_title'>{item.name}</p>
                                <p className='patientView_profession'>{item.profession}</p>
                                <div className='patientView_star'>
                                    <img src={star} alt='' />
                                    <p className='patientView_reviews'>{item.reviews}</p>
                                </div>
                                <Button>Contact</Button>
                            </div>
                        )
                    })}
                </div>
                {/* <h1 className='body_text_one' style={{ paddingTop: 0 }}>Users Testimonials</h1>
                <h1 className='body_text_two' style={{ paddingTop: 10, textAlign: 'center', marginLeft: 100, marginRight: 100 }} >The hospital is an integral part of a social and health organization providing services.</h1> */}


            </div>

            <div className='reviewsTopView'>
                {/* <div className='reviewsView'></div>
                <div className='reviewsView'></div>
                <div className='reviewsView'></div> */}

                {/* <a href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="#support">Support</a>
                <a href="#blog">Blog</a>
                <a href="#tools">Tools</a>
                <a href="#base">Base</a>
                <a href="#custom">Custom</a>
                <a href="#more">More</a>
                <a href="#logo">Logo</a>
                <a href="#friends">Friends</a>
                <a href="#partners">Partners</a>
                <a href="#people">People</a>
                <a href="#work">Work</a>
                <a href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="#support">Support</a>
                <a href="#blog">Blog</a>
                <a href="#tools">Tools</a>
                <a href="#base">Base</a>
                <a href="#custom">Custom</a>
                <a href="#more">More</a>
                <a href="#logo">Logo</a>
                <a href="#friends">Friends</a>
                <a href="#partners">Partners</a>
                <a href="#people">People</a>
                <a href="#work">Work</a>
                <a href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="#support">Support</a>
                <a href="#blog">Blog</a>
                <a href="#tools">Tools</a>
                <a href="#base">Base</a>
                <a href="#custom">Custom</a>
                <a href="#more">More</a>
                <a href="#logo">Logo</a>
                <a href="#friends">Friends</a>
                <a href="#partners">Partners</a>
                <a href="#people">People</a>
                <a href="#work">Work</a>
                <a href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="#support">Support</a>
                <a href="#blog">Blog</a>
                <a href="#tools">Tools</a>
                <a href="#base">Base</a>
                <a href="#custom">Custom</a>
                <a href="#more">More</a>
                <a href="#logo">Logo</a>
                <a href="#friends">Friends</a>
                <a href="#partners">Partners</a>
                <a href="#people">People</a>
                <a href="#work">Work</a> */}







            </div>
            <Footer />


        </div >
    )
}
