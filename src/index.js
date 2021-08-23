import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* const element = document.createElement("div");
element.classList.add("my-class");
element.style = "color: red";
element.innerText = "Ola k ase";
otherElement.appendChild(element); */

/* const element = React.createElement(
  'div',
  {
    className: 'my-class',
    style: { color: 'red', backgroundColor: 'black' },
  },
  'Ola k ase'
); */

const user = {
  name: 'Pepe',
  lastName: 'Pérez',
};

const element = (
  <div className='home'>
    <h1>Hello {user.name}, welcome to React!</h1>
    <p>Let me be your guide</p>
    <img
      src='https://i.imgur.com/x17K5U4.gif'
      alt='A kid using a keyboard as a surf board'
    />
    <button className='btn btn-primary'>Click me</button>
  </div>
);

ReactDOM.render(element, document.getElementById('root'));
