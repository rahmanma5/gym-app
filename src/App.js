import React from 'react';
import logo from './logo.svg';
import './App.css';
import BigButton from './BigButton';

function App() {
  return (
    <div className="parent">
        <div className="child">
            <BigButton></BigButton>
        </div>
        <div className="child">
            <BigButton></BigButton>
        </div>
    </div>
  );
}

export default App;
