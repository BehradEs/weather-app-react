import React from 'react';



export const Weather =(props)=>(
    <div className='heading'>
        <h3><span>City: </span>{props.city}</h3>
        <h3><span>Country: </span>{props.country}</h3>
        <h3><span>Temprature: </span>{props.temperature}</h3>
        <h3><span>Description: </span>{props.description}</h3>
    </div>
)