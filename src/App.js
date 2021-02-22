import React, { useEffect, useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';

import './App.css';
import { Message } from './Message';

function App() {

  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([
    {username: 'roberto', text: 'Hello world'},
    {username: 'jadelrio', text: 'Nice to see you!'},
  ]);
  const [username, setUsername] = useState('')

  useEffect(() => {

    setUsername(prompt('Please enter your nick'));

  }, [])

  const sendMessage = (e) => {
    // La logica de enviar mensaje aqui
    e.preventDefault()
    setMessages([...messages, {
      username,
      text: inputText
    }])
    setInputText('')
  }

  return (
    <div className="App">
      <h1>Commienzo de la App</h1>
      <h2>Welcome {username}</h2>

      <form>
        <FormControl>
          <InputLabel>Enter a message</InputLabel>
          <Input
            id="my-input"
            type="text"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
            disabled={!inputText}
          >
            Send Messange
        </Button>
        </FormControl>
      </form>

      {
        messages.map((message) => (
          <Message 
            username={username}
            message={message}
          />
        ))
      }

    </div>
  );
}

export default App;
