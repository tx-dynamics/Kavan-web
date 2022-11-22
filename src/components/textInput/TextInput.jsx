import React from 'react'
import { hide, show } from '../../assets'
import './textInput.css'

const TextInput = (props) => {
    return (
        <div className='kwn-input_container'>
            <p>{props.title}</p>
            {props.textarea ?
                <textarea placeholder={props.placeholder} />
                :
                <div>
                    <input type={props.type} placeholder={props.placeholder} />
                    {props.type === 'password' &&
                        <img onClick={props.onClick} src={props.eyeValue ? show : hide} />
                    }
                </div>
            }
        </div>
    )
}

export default TextInput
