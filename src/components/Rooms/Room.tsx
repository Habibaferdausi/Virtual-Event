import React, { useState } from 'react';

interface RoomProps {
  roomName: string;
}

const Room: React.FC<RoomProps> = ({ roomName }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    // Send new message to Firebase Realtime Database or Firestore
    setMessages([...messages, newMessage]);
    setNewMessage('');
  };

  return (
    <div>
      <h2>{roomName}</h2>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Room;
