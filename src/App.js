import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data')
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // const deletePerson = (id) => {
  //   setData(data.filter(person => person.id !== id));
  // };

  // const addPerson = (newPerson) => {
  //   setData([...data, { ...newPerson, id: data.length + 1 }]);
  // };

  // const updatePerson = (id, updatedInfo) => {
  //   setData(data.map(person => person.id === id ? { ...person, ...updatedInfo } : person));
  // };

  // return (
  //   <div className="App">
  //     <h1>Users</h1>
  //     {data.map((person) => (
  //       <div key={person.id}>
  //         <p>{person.first_name} {person.last_name}</p>
  //         <p>Email: {person.email}</p>
  //         <p>Gender: {person.gender}</p>
  //         <p>Fee Balance: {person.fee_balance}</p>
  //         <button onClick={() => deletePerson(person.id)}>Delete</button>
  //         <button onClick={() => updatePerson(person.id, { fee_balance: person.fee_balance + 100 })}>Increase Fee</button>
  //       </div>
  //     ))}
  //     <button onClick={() => addPerson({ first_name: "New", last_name: "User", email: "newuser@example.com", gender: "Non-binary", fee_balance: 500 })}>
  //       Add New User
  //     </button>
    </div>
  );
}

export default App;
