import React from 'react';

const FilterUsers = ({users,setUsers,filterInput,setFilterInput}) => {
    const onChangeFilter = (e) => {
        setFilterInput(e.currentTarget.value)
    }

    const filterUsers = (e) => {
        e.preventDefault();
        if(filterInput === '') {
            return setUsers(users);
        }
       return setUsers(users.filter(user => {
        return user['name'].includes(filterInput)
      }))

    }

    return (
        <div className='filter'>
            <input onChange={onChangeFilter} className='filter-input' value={filterInput} type="text" />
            <button onClick={filterUsers}>Поиск</button>
        </div>
    );
};

export default FilterUsers;