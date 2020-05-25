import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <div>
            <img src='images/ironhack-logo.svg' className='App-logo' alt='logo' />
            <h1>
              <strong>
                {' '}
                Say Hello to <br /> ReactJS{' '}
              </strong>
            </h1>
            <p>
              You will learn a Frontend <br /> framdework from scratch, to <br /> become a Ninja
              Developer
            </p>
            <a
              className='awesome-link'
              href='https://reactjs.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              Awesome!
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
