import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div className="arrow flex">
            <div className="backArrow" />
            <h2>2023</h2>
          </div>
          <h1>Crypto Currencies Today</h1>
          <div className="icons-container">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25682.png" alt="mic" />
            <img src="https://cdn-icons-png.flaticon.com/512/3019/3019014.png" alt="settings" />
          </div>
        </nav>
      </header>
      <Home />
    </div>
  );
}

export default App;
