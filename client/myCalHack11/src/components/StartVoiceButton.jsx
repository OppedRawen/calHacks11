import React, { useState, useEffect } from 'react';
import { useVoice } from '@humeai/voice-react';
import axios from 'axios';

const StartVoiceButton = ({ userId }) => {
  const { connect, disconnect, isPlaying, messages } = useVoice();
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    if (messages) {
      messages.forEach((message) => {
        if (message.type === 'assistant_message') {
          setTranscript((prev) => `${prev}\n${message.message.content}`);
        }
      });
    }
  }, [messages]);

  const handleConnect = async () => {
    await connect();
  };

  const handleDisconnect = async () => {
    await disconnect();
    console.log('Transcript:', transcript);
    console.log('User ID:', userId);
    // Save transcript when recording stops
    if (transcript && userId) {
      try {
        await axios.post('http://localhost:3000/api/transcript/save', { transcript, userId });
        setTranscript(''); // Reset transcript after saving
      } catch (error) {
        console.error('Error saving transcript:', error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <button 
        onClick={handleConnect} 
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
      >
        {isPlaying ? 'Recording...' : 'Start Voice Interaction'}
      </button>
      <button 
        onClick={handleDisconnect} 
        disabled={!isPlaying} 
        className={`px-4 py-2 bg-red-500 text-white rounded ${!isPlaying ? 'opacity-50' : 'hover:bg-red-700'}`}
      >
        Stop Voice Interaction
      </button>

      {transcript && (
        <div className="mt-4 p-2 border bg-gray-50 w-full">
          <p className="text-gray-700 whitespace-pre-line">{transcript}</p>
        </div>
      )}
    </div>
  );
};

export default StartVoiceButton;
