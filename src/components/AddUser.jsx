import React from 'react';

const AddUser = () => {
    return (
        <form className='user-form'>
            <input className='user-input' type="text" />
            <button className='add-user-btn'>Add user</button>
        </form>
    );
};

export default AddUser;