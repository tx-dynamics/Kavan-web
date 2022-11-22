import React from 'react'
import { arrowDown, hide, show } from '../../assets'
import './textInput.css'

const TextInput = (props) => {
    return (
        <div className='kwn-input_container'>

            <p>{props.title}</p>
            {props.textarea ?
                <textarea placeholder={props.placeholder} />
                :
                <div className='kwn-input_container_input'>
                    <input onKeyPress={props.onKeyPress} onChange={props.onChange} value={props.value} type={props.type} placeholder={props.placeholder} />
                    {props.type === 'password' &&
                        <img onClick={props.onClickEye} src={props.eyeValue ? show : hide} />
                    }
                    {props.type === 'dropdown' &&
                        <img onClick={props.onClickDropDown} src={arrowDown} />
                    }
                    {props.dropDownValue &&
                        <div className='kwn-dropdown_container'>
                            <p>Online</p>
                            <p>Offline</p>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default TextInput
