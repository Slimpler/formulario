import logo from './logo.svg';
import './App.css';
import {OldSchoolComponent, HolaMundo}from './OldSchoolComponent';

function App() {
  return (
    
    <div className="App">
    
     {/* Esto es JSX */}
      <header className="App-header">
      <HolaMundo/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <OldSchoolComponent/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to the master class of react.
        </a>
      </header>
    </div>
  );
}

export default App;
