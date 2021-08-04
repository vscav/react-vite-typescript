import React from 'react';
import Counter from './components/Counter';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-container">
        <h1>Hello Vite + React + Redux + Jest + TypeScript!</h1>
        <Counter />
      </header>
    </div>
  );
};

export default App;
