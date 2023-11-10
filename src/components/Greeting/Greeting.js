import React from 'react';
import "./Greeting.scss"

const Greeting = (props) => {
    return (
        <div>
            <h1 className='hello'>Hi {props.person.name}!</h1>
        </div>
    );
};

export default Greeting;