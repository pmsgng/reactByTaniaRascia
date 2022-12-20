import React from 'react';

const TableBody = ({ users,removeCharacter}) => {
    const rows = users.map(user => {
        return (
            <div key={user.id} className='user'>
                <div  className='user-name'>{user.name}</div>
                <div className='user-job'>{user.job}</div>
                <button className='user-delete' onClick={()=> removeCharacter(user.id)}> Delete</button>
            </div>
        )
    })
    return (
        <div>
            {rows}
        </div>
    );
};

export default TableBody;