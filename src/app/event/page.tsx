"use client";

import React, { useState } from "react";
import { addDoc, collection, Firestore, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";

interface Room {
  id: string;
  name: string;
}

interface EventData {
  title: string;
  description: string;
  date: string;
  time: string;
  rooms: Room[];
}

async function addData(db: Firestore, eventData: EventData): Promise<boolean> {
  try {
    const docRef = await addDoc(collection(db, "events"), eventData);
    console.log("ID:", docRef.id);
    return true;
  } catch (error) {
    console.error("Error", error);
    return false;
  }
}

const CreateEventPage: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [newRoom, setNewRoom] = useState<string>('');
  const [rooms, setRooms] = useState<Room[]>([]);

  const generateRoomId = (): string => {
    // Generate a unique ID using timestamp and random number
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const handleAddRoom = () => {
    if (newRoom.trim() === '') return;
    const roomId = generateRoomId();
    setRooms([...rooms, { id: roomId, name: newRoom }]);
    setNewRoom('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const eventData: EventData = { title, description, date, time, rooms };
    const added = await addData(db, eventData);
    if (added) {
      setTitle("");
      setDescription('');
      setDate('');
      setTime('');
      setRooms([]);
      setNewRoom('');
      alert("Successfully added");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <h1 className="text-center mt-3 text-black text-xl md:text-2xl font-semibold">Add Event Data</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="my-6">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
          <input type="text" id="title" className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
    
        <div className="my-6">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
          <input type="text" id="description" className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
    
        <div className="my-6">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date:</label>
          <input type="date" id="date" className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
    
        <div className="my-6">
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time:</label>
          <input type="time" id="time" className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" value={time} onChange={(e) => setTime(e.target.value)} />
        </div>
    
        <div className="my-6">
          <label htmlFor="room" className="block text-sm font-medium text-gray-700">Rooms:</label>
          <input type="text" id="room" className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" value={newRoom} onChange={(e) => setNewRoom(e.target.value)} />
          <button type="button" onClick={handleAddRoom} className="mt-2 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Add Room</button>
          <ul className="mt-2">
            {rooms.map((room, index) => (
              <li key={index} className="text-gray-700">{room.name}</li>
            ))}
          </ul>
        </div>
    
        <button type='submit' className="my-8 w-full bg-green-400 text-white px-4 py-2 rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-500">Submit</button>
      </form>
    </main>
  );
};

export default CreateEventPage;
