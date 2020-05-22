import React, {useState} from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState("")
  async function getHandler() {
    const response = await fetch('/api/hello');
    const body = await response.json();
    console.log(body);
  }

  async function postHandler() {
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: inputText }),
    });
    const body = await response.text();
    console.log(body);
  }

  return (
    <div className="App">
      <button onClick={getHandler}>GET</button>
      <input type="text" value={inputText} onChange={e => setInputText(e.target.value)}/>
      <button onClick={postHandler}>POST</button>
    </div>
  );
}

export default App;
