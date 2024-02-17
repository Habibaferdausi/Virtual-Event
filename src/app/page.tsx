"use client";
import React, { useState } from "react";
import { collection, addDoc, Firestore } from "firebase/firestore";
import db from "./firebaseConfig";
 // Import your Firebase configuration

interface EventData {
  title: string;
  description: string;
  date: string;
  time: string;
}

async function addData(db: Firestore, eventData: EventData): Promise<boolean> {
  try {
    const docRef = await addDoc(collection(db, "event"), eventData);
    console.log("ID:", docRef.id);
    return true;
  } catch (error) {
    console.error("Error", error);
    return false;
  }
}

export default function Home() {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const eventData: EventData = { title, description, date, time };
    const added = await addData(db, eventData);
    if (added) {
      setTitle("");
      setDescription('');
      setDate('');
      setTime('');
      alert("Successfully added");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-center">Add Event Data </h1>
      <form onSubmit={handleSubmit}>
        <div className="my-6 text-center">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" className="text-center" value={title} onChange={(e) => setTitle(e.target.value)} />

          <label htmlFor="description">Description:</label>
          <input type="text" id="description" className="text-center" value={description} onChange={(e) => setDescription(e.target.value)} />

          <label htmlFor="date">Date:</label>
          <input type="date" id="date" className="text-center" value={date} onChange={(e) => setDate(e.target.value)} />

          <label htmlFor="time">Time:</label>
          <input type="time" id="time" className="text-center" value={time} onChange={(e) => setTime(e.target.value)} />

          <button type='submit' className="my-8 bg-green-400">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
