import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './components/header/header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
