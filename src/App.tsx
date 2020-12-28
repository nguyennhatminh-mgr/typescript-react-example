import React from 'react';
import './App.css';
import { TextField } from './TextField';

const App: React.FC = () => {
  return (
    <div>
      <TextField text="Hello" person={{firstName: 'nguyen nhat', lastName: 'minh'}}/>
    </div>
  );
}

export default App;
