import React from 'react'
import './button.css'

export default function Button(props) {
    return (
        <div onClick={props.onClick} className='button_container' style={{ backgroundColor: props.border ? '#fff' : '#006039', marginTop: props.marginTop, ...props.style }}>
            <p style={{ color: props.border ? '#006039' : '#fff', }}>{props.children}</p>
        </div>
    )
}

