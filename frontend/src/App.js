import { useState } from "react";
import "./App.css";

function App() {
  const [response, setResponse] = useState("");
  const [serverName, setServerName] = useState("");

  const callAPI = async (url, name) => {
    const res = await fetch(url);
    const data = await res.json();
    setResponse(data.message);
    setServerName(name);
  };

  return (
    <div className="app-container">
      <h1 className="heading">🌐 Multi-language Backend App</h1>

      <div className="button-container">
        <button
          className="flash-button python"
          onClick={() => callAPI("http://localhost:5001/python-api", "Python")}
        >
          🐍 Python Server
        </button>
        <button
          className="flash-button java"
          onClick={() => callAPI("http://localhost:5002/java-api", "Java")}
        >
          ☕ Java Server
        </button>
        <button
          className="flash-button js"
          onClick={() => callAPI("http://localhost:5003/js-api", "JavaScript")}
        >
          ⚡ JavaScript Server
        </button>
      </div>

      {response && (
        <div className={`response-card ${serverName.toLowerCase()}-bg`}>
          <h2>📬 {serverName} Server Response</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default App;
