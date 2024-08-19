import logo from './logo.svg';
import './App.css';

function App() {
  const test = () => {
    fetch("http://127.0.0.1:8000/", {mode: "no-cors"})
    .then(response => console.log ("200"))
    .catch(error => console.error(error));
  }

  return (
    <div className="App">
      <button onClick={test}> click! </button>
    </div>
  );
}

export default App;
