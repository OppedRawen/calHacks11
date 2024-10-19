import React from 'react';
import { useVoice } from '@humeai/voice-react';

const StartVoiceButton = () => {
  const { connect, disconnect, isPlaying } = useVoice();

  return (
    <div>
      <button onClick={() => connect()}>Start Voice Interaction</button>
      <button onClick={() => disconnect()} disabled={!isPlaying}>
        Stop Voice Interaction
      </button>
    </div>
  );
};

export default StartVoiceButton;
