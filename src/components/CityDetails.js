import React from 'react';

const CityDetails = (props) => {
    console.log("you are in city Details props", props.props.name);

    return (
        <>
        {props.props.name}
        <ul>
            <li>
                Curent Temparature:
                {props.props.main.temp}
            </li>
            <li>
                Feels like: 
                {props.props.main.feels_like}
            </li>
            <li>
                Lows: 
                {props.props.main.temp_min}
            </li>
            <li>
                Highs: 
                {props.props.main.temp_max}
            </li>
            
        </ul>
        
        
        </>
        
    )
}

export default CityDetails;