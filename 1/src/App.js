import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Тут ничего нет.
        </p>
        <p>
          Чтобы посмотреть "Хлебные крошки" — запустите storybook командой <code>$ yarn storybook</code>
        </p>
      </header>
    </div>
  );
}

export default App;
