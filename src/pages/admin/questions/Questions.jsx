
import React, { useState } from 'react'
import { arrowRightTheme } from '../../../assets'
import { SearchBar } from '../../../components'
import Testimonial from '../../viewers/homePage/comp/Testimonial'
import './questions.css'

const Questions = () => {
    const [questionArray, setQuestionArray] = useState([
        {
            id: 0,
            question: 'How kavan health works?',
            answers: 'Lorem ipsum dolor sit amet consectetur. Bibendum ultrices odio ac erat vitae fermentum pellentesque. Felis at eu amet non est dui. Aliquam tortor morbi et eget purus enim mauris rhoncus vitae. Posuere enim donec pellentesque consequat amet sapien.',
            answerShow: false
        },
        {
            id: 1,
            question: 'How kavan health works?',
            answers: 'Lorem ipsum dolor sit amet consectetur. Bibendum ultrices odio ac erat vitae fermentum pellentesque. Felis at eu amet non est dui. Aliquam tortor morbi et eget purus enim mauris rhoncus vitae. Posuere enim donec pellentesque consequat amet sapien.',
            answerShow: false
        },
        {
            id: 2,
            question: 'How kavan health works?',
            answers: 'Lorem ipsum dolor sit amet consectetur. Bibendum ultrices odio ac erat vitae fermentum pellentesque. Felis at eu amet non est dui. Aliquam tortor morbi et eget purus enim mauris rhoncus vitae. Posuere enim donec pellentesque consequat amet sapien.',
            answerShow: false
        }, {
            id: 3,
            question: 'How kavan health works?',
            answers: 'Lorem ipsum dolor sit amet consectetur. Bibendum ultrices odio ac erat vitae fermentum pellentesque. Felis at eu amet non est dui. Aliquam tortor morbi et eget purus enim mauris rhoncus vitae. Posuere enim donec pellentesque consequat amet sapien.',
            answerShow: false
        },
        {
            id: 4,
            question: 'How kavan health works?',
            answers: 'Lorem ipsum dolor sit amet consectetur. Bibendum ultrices odio ac erat vitae fermentum pellentesque. Felis at eu amet non est dui. Aliquam tortor morbi et eget purus enim mauris rhoncus vitae. Posuere enim donec pellentesque consequat amet sapien.',
            answerShow: false
        }
    ])
    const showAnswer = (index) => {
        let data = [...questionArray]
        let obj = data[index]
        obj['answerShow'] = !obj.answerShow
        data.splice(index, 1, obj)
        setQuestionArray(data)
    }

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
            <h1 className='kwn-heading'>Questions</h1>
            <div className='kwn-questions_top_view'>
                {questionArray.map((item, index) => {
                    return (
                        <>
                            <div className='kwn-questions_view'>
                                <h2>{item.question}</h2>
                                <img className={item.answerShow ? 'kwn-questions_view_img_open' : 'kwn-questions_view_img'} onClick={() => showAnswer(index)} src={arrowRightTheme} />
                            </div>
                            {item.answerShow &&
                                <div className='kwn-questions_answers_view'>
                                    <h2>{item.answers}</h2>
                                </div>
                            }
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Questions
