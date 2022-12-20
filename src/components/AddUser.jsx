import React from 'react';

const AddUser = ({userInput,setUserInput,users,setUsers,userJob,setUserJob}) => {
    const userInputChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const userJobInputChange = (e) => {
        setUserJob(e.currentTarget.value)
    }
    const addUser = (e) => {
        e.preventDefault()

        if(userInput && userJob ) {
            const newUser = {
                id: `${userInput}`,
                name: userInput,
                job: userJob
            }
            setUsers([...users,newUser]);
        }
        setUserInput('');
        setUserJob('');
    }

    return (
        <form className='user-form' onSubmit={addUser}>
            <input value={userInput} onChange={userInputChange} className='user-input' type="text" />
            <input value={userJob} onChange={userJobInputChange} className='user-input-job' />
            <button className='add-user-btn'>Add user</button>
        </form>
    );
};

export default AddUser;