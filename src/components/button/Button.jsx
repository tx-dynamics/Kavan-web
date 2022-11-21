import React from 'react'
import './button.css'

export default function Button(props) {
    return (
        <div className='button_container' style={{ backgroundColor: props.border ? '#fff' : '#006039', marginTop: props.marginTop }}>
            <p style={{ color: props.border ? '#006039' : '#fff' }}>{props.children}</p>
        </div>
    )
}

