import React, { useState, useEffect } from 'react'
import { SearchBar } from '../../../components'
import { authReq } from '../../../requests'
import Testimonial from '../../viewers/homePage/comp/Testimonial'
import './reviews.css'

const Reviews = () => {
    const [testimonialArray, setTestimonialArray] = useState([
        {
            id: 1,
            image: "",
            text: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
            id: 2,
            image: "",
            text: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
            id: 3,
            image: "",
            text: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
            id: 4,
            image: "",
            text: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
            id: 5,
            image: "",
            text: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
    ]);

    useEffect(() => {
        authReq('GET', '/user/me')
            .then(async userData => {
                const data = await authReq('GET', `/review/${userData.data._id}`)
                console.log(userData.data, data)
                setTestimonialArray(data.reviews.map(review => {
                    return {
                        text: review.text,
                        name: review.patient.name,
                        id: review._id, 
                        image: review.patient.image, 
                        rating: review.rating
                    }
                }))
            })
    }, [])

    return (
        <div className='kavan_admin_main_container'>
            <div className='kwn-search'>
                <SearchBar />
            </div>
            <h1 className='kwn-heading'>REVIEWS</h1>
            <div className='kwn-reviews-item-view'>
                {testimonialArray.map((item) => {
                    return <Testimonial item={item} props={{ marginLeft: 0, marginRight: 58, marginBottom: 30 }} />;
                })}
            </div>
        </div>
    )
}

export default Reviews
