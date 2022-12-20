import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import AddUser from './AddUser';
import FilterUsers from './FilterUsers';


const Table = ({users,removeCharacter,userInput,setUserInput,setUsers,userJob,setUserJob,filterInput,setFilterInput}) => {
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
            <FilterUsers 
                users={users}
                setUsers={setUsers}
                filterInput={filterInput}
                setFilterInput={setFilterInput}
             />
        </div>
    );
};

export default Table;