import React from 'react';

function Item({ person, deletePerson, updatePerson }) {
  return (
    <div>
      <p>{person.first_name} {person.last_name}</p>
      <p>Email: {person.email}</p>
      <p>Gender: {person.gender}</p>
      <p>Fee Balance: {person.fee_balance}</p>
      <button onClick={() => deletePerson(person.id)}>Delete</button>
      <button onClick={() => updatePerson(person.id, { fee_balance: person.fee_balance + 300 })}>Increase Fee</button>
    </div>
  );
}

export default Item;
