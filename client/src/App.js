import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'request';

function App() {
  const [resposta, setResposta] = useState({});
  useEffect(() => {
    request( process.env.REACT_APP_API_URL +'/api/mensagem', function(err, res, body){
      console.log('resposta: ', JSON.parse(body));
      setResposta(JSON.parse(body));
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          {resposta.message}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
