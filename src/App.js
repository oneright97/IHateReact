import React from 'react';
import Todo from './components/Todo';
import './index.css';

function App() {
  return (
    <div className="bg-gradient-to-r from-indigo-400 to-cyan-400 ">
      <div className="h-16 flex items-center justify-center w-full">
        <h1 className="text-3xl font-bold text-white font-sans">IHateReact!!!</h1>
      </div>
      <Todo />
    </div>
  );
}

export default App;
