
import React from 'react'
import { SearchBar } from '../../../components'
import Testimonial from '../../viewers/homePage/comp/Testimonial'
import './reviews.css'

const Reviews = () => {
    const testimonialArray = [
        {
            id: 1,
            text: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
            id: 2,
            text: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
            id: 3,
            text: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
            id: 4,
            text: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
            id: 5,
            text: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
    ];

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
