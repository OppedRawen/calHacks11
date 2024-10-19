// src/components/Chatbot.js
import React, { useEffect, useState } from 'react';

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [botResponse, setBotResponse] = useState('');

  // WebSocket connection state
  const [ws, setWs] = useState(null);

  // Initialize WebSocket connection when component mounts
  useEffect(() => {
    const socket = new WebSocket(`wss://api.hume.ai/v0/evi/chat?auth=${process.env.REACT_APP_HUME_API_KEY}`);
    setWs(socket);

    // Set up WebSocket event handlers
    socket.onopen = () => {
      console.log('WebSocket connection opened.');
    };

    socket.onmessage = (event) => {
      const messageData = JSON.parse(event.data);
      if (messageData.audio) {
        const audio = new Audio(messageData.audio.url);
        audio.play();
      }

      if (messageData.text) {
        setBotResponse(messageData.text);
      }
    };

    socket.onerror = (error) => {
      console.error('WebSocket error: ', error);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed.');
    };

    return () => {
      socket.close();
    };
  }, []);

  // Function to handle sending user input to WebSocket server
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput && ws) {
      ws.send(JSON.stringify({ text: userInput }));
      setUserInput('');
    }
  };

  return (
    <div>
      <h1>Hume TTS Chatbot</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
      <div>
        <p>Bot Response:</p>
        <p>{botResponse}</p> {/* Real-time TTS data will be displayed here */}
      </div>
    </div>
  );
};

export default Chatbot;
