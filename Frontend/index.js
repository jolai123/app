// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// Add event listener to the button
const button = document.querySelector('.button');
button.addEventListener('click', () => {
  alert('Button clicked!');
});