import React from 'react'
import ToDo from './ToDo.css'

export default function ToDo(props) {
    console.log(props);
    
    return (
        <p className='Sports'>{props.task}</p>
    )
}