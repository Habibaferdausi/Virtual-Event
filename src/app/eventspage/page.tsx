"use client";
import React, { useEffect, useState } from "react";

import { collection, getDocs, Firestore } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Link from "next/link";

const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsCollection = collection(db, "events");
      const snapshot = await getDocs(eventsCollection);
      const eventsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setEvents(eventsData);
    };

    fetchEvents();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">All Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <Link key={event.id} href={`/eventspage/${event.id}`}>
            <div className="border border-gray-200 rounded-md p-4 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100">
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p className="text-gray-600">{event.description}</p>
              <p className="text-gray-600">Date: {event.date}</p>
              <p className="text-gray-600">Time: {event.time}</p>
              <ul className="mt-2">
                {event.rooms.map((room: { name: string }, index: number) => (
                  <li key={index} className="text-gray-700">
                    {room.name}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
