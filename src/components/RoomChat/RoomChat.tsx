"use client";

import React, { useContext, useEffect, useState } from "react";
import { collection, query, where, orderBy, onSnapshot, addDoc } from "firebase/firestore";
import { db } from "../../app/firebaseConfig";
import { useParams } from "next/navigation";
import { AuthContext } from "../Auth/AuthProvider";

interface Params {
  id: string;
}

const RoomChat: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { id } = useParams<Params>();

  useEffect(() => {
    if (!id) return;

    const messagesRef = collection(db, `rooms/${id}/messages`);
    const roomMessagesQuery = query(messagesRef, orderBy("timestamp"));

    const unsubscribe = onSnapshot(roomMessagesQuery, (snapshot) => {
      const messagesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(messagesData);
    });

    return () => unsubscribe();
  }, [id]);

  async function sendMessage() {
    try {
      if (!user) {
        throw new Error("User not authenticated");
      }
      
      await addDoc(collection(db, `rooms/${id}/messages`), {
        content: newMessage,
        username: user.displayName,
        userId: user.uid,
        timestamp: new Date(),
      });
      console.log("Message sent successfully!");
      setNewMessage(""); // Clear the input field after sending the message
    } catch (error) {
      console.error("Error sending message: ", error);
      alert("Error sending message: " + error.message);
    }
  }
  
  return (
    <div className="room-chat max-w-2xl mx-auto">
      <div className="message-list mt-3 lg:mt-7 mb-3">
        <h1 className="my-3 text-lg lg:text-xl font-semibold text-center text-blue-500">Room Messages</h1>
        {messages.map((message) => (
          <div key={message.id} className="message">
            <p><strong>{message.username}:</strong> {message.content}</p>
          </div>
        ))}
      </div>
      <div className="message-input mt-4">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button className="bg-blue-500 text-white rounded p-2" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default RoomChat;
