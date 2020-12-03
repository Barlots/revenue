import React from 'react';

const Header = ({amount}) => {
    return (
        <div>
            <h1>Items left: {amount | 0}</h1>
        </div>
    )
}

export default Header;