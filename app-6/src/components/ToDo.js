import React from 'react'
import TDCss from './ToDo.css'

export default function ToDo(props) {
    console.log(props);
    
    return (
        <p className='Sports'>{props.task}</p>
    )
}