import React, { useEffect, useState } from 'react';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

import { Message } from './Message';
import './App.css';

function App() {

  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('')

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })
        ))
      })
  }, [])

  useEffect(() => {

    setUsername(prompt('Please enter your nick'));

  }, [])

  const sendMessage = (e) => {
    // La logica de enviar mensaje aqui
    e.preventDefault()

    db.collection('messages').add({
      message: inputText,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInputText('')
  }

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt=""/>
      <h1>Commienzo de la App</h1>
      <h2>Welcome {username}</h2>

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            placeholder="Enter a message..."
            id="my-input"
            type="text"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            className="app__input"
          />

          <IconButton
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
            disabled={!inputText}
            className="app__iconButton"
          >
            <SendIcon/>
        </IconButton>
        </FormControl>
      </form>

      <FlipMove>

        {
          messages.map(({id, message}) => (
            <Message
              key={id}
              username={username}
              message={message}
            />
          ))
        }

      </FlipMove>


    </div>
  );
}

export default App;
