import React from 'react';

const Header = () => {

    const getTheYear = () => {
        const newDate = new Date();
        return newDate.getFullYear();
    }

    return(
        <div>
            The dat is {5+5}
        </div>
    )
}

export default Header;
