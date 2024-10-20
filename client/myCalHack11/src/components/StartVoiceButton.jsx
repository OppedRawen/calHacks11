import React, { useState, useEffect } from 'react';
import { useVoice } from '@humeai/voice-react';
import axios from 'axios';

const StartVoiceButton = ({ userId }) => {
  const { connect, disconnect, isPlaying, messages } = useVoice();
  const [transcript, setTranscript] = useState('');
  const [isRecording, setIsRecording] = useState(false); // Track recording state

  useEffect(() => {
    if (messages) {
      messages.forEach((message) => {
        if (message.type === 'assistant_message') {
          setTranscript((prev) => `${prev}\n${message.message.content}`); // Append message to transcript
        }
      });
    }
  }, [messages]);

  const handleToggleRecording = async () => {
    if (isRecording) {
      // Stop recording
      disconnect();
      setIsRecording(false);
      console.log('Transcripasdast:', transcript);
      console.log('User IDrqw:', userId);
      // Save transcript after stopping
      if (transcript && userId) {
        try { 
          await axios.post('http://localhost:3000/api/transcript/save',
            {
              userId,
              transcript,
            }
          );
          setTranscript(''); // Clear transcript after saving
        } catch (error) {
          console.error('Error saving transcript:', error);
           }
      }
    } else {
      // Start recording
      await connect();
      setIsRecording(true);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <button 
        onClick={handleToggleRecording} 
        className={`px-4 py-2 text-white rounded ${isRecording ? 'bg-red-500 hover:bg-red-700' : 'bg-green-500 hover:bg-green-700'}`}
      >
        {isRecording ? 'Stop Recording' : 'Start Recording'}
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
