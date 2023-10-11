import './App.css';

function App() {
  const title = "Hi! Welcome to Magda's blog!"

  return (
    <div className="App">
      <div className="component">
        <h1>{title}</h1>
        <nav>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Topics</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
