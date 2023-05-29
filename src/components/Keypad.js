import React from 'react';

function Keypad() {
  function inputPassword() {
    console.log('Entering password...');
  }

  return (
    <div>
      <input type="password" onChange={inputPassword} />
    </div>
  );
}

export default Keypad;
