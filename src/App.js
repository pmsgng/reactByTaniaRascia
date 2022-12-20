import './App.css';
import Table from './components/Table';
import { useState } from 'react';



function App() {
  const [users,setUsers] = useState([
    {
      id: 1,
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      id: 2,
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      id: 3,
      name: 'Dee',
      job: 'Aspring actress',
    },
    {
      id: 4,
      name: 'Dennis',
      job: 'Bartender',
    },
  ]);

  const [userInput, setUserInput] = useState('')
  const [userJob, setUserJob] = useState('')
  const [filterInput,setFilterInput] = useState('')

   const removeCharacter = (id) => {
      setUsers([...users.filter((item) => {
        return item.id !== id
      })])
  }

  return (
    <div className="App">
      <Table 
        userInput={userInput} 
        setUserInput={setUserInput} 
        userJob={userJob}
        setUserJob={setUserJob}
        users={users} 
        setUsers={setUsers}
        removeCharacter={removeCharacter} 
        filterInput={filterInput}
        setFilterInput={setFilterInput}
      />
    </div>
  );
}

export default App;
