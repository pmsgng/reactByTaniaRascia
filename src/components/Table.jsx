import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import AddUser from './AddUser';


const Table = ({users,removeCharacter}) => {
    return (
        <div>
            <TableHeader />
            <TableBody users={users} removeCharacter={removeCharacter}/>
            <AddUser />
        </div>
    );
};

export default Table;