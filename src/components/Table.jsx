import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import AddUser from './AddUser';


const Table = ({users,removeCharacter,userInput,setUserInput,setUsers,userJob,setUserJob}) => {
    return (
        <div>
            <TableHeader />
            <TableBody users={users} removeCharacter={removeCharacter}/>
            <AddUser 
                userInput={userInput}
                setUserInput={setUserInput} 
                users={users}
                setUsers={setUsers}
                userJob={userJob}
                setUserJob={setUserJob}
            />
        </div>
    );
};

export default Table;