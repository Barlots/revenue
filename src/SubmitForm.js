import React, { useState } from 'react';

const SubmitForm = ({onSubmit}) => {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(name);
        setName('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <input type="text" placeholder='Task name' value={name} onChange={handleChange} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default SubmitForm;