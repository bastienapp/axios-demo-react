import React from 'react';

function Character(props) {
  const { name, house, yearOfBirth } = props;

  return (
    <div>
      <p>Name: {name}</p>
      <p>House: {house}</p>
      <p>Year of birth: {yearOfBirth} </p>
    </div>
  );
}

export default Character;
