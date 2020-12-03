import React, { useEffect, useState } from 'react';

const Item = ({id, name, state, onRemove, onEdit, onChangeState }) => {
    const [editable, setEditable] = useState(false);

    const handleSubmit = (name) => {
        setEditable(false);
        onEdit(id, name);
    }
    
    return (
        <div className="item">
            { !editable ? name : <ItemEdit name={name} onSubmit={handleSubmit}/>}
            <button onClick={() => onChangeState(id)}>State: {state}</button>
            <button onClick={() => setEditable(!editable)}>Edit</button>
            <button onClick={() => onRemove(id)}>Remove</button>
        </div>
    )
}

const ItemEdit = ({name, onSubmit}) => {
    const [current, setCurrent] = useState(name);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(current)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={current} onChange={(e) => setCurrent(e.target.value)} />
            <button type="submit">Ok</button>
        </form>
    )
}

export default Item;