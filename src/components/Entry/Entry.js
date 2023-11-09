import React, { useState } from 'react';
import Greeting from './Greeting'; // Ruta de tu componente Greeting

const Entry = () => {
    const [person, setPerson] = useState({ name: '', age: '', city: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPerson({ ...person, [name]: value });
    };

    return (
        <div>
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={person.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="age"
                    placeholder="Enter age"
                    value={person.age}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="city"
                    placeholder="Enter city"
                    value={person.city}
                    onChange={handleChange}
                />
            </form>
            <Greeting person={person} />
        </div>
    );
};

export default Entry;
