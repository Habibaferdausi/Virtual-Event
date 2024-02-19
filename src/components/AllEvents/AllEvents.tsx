"use client";
import React, { useEffect, useState } from "react";

import { collection, getDocs, Firestore } from "firebase/firestore";
import { db } from "../../app/firebaseConfig";
import Link from "next/link";

const AllEvents: React.FC = () => {
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
    <div className="container mx-auto max-w-[1500px] py-8">
      <h1 className="lg:text-3xl text-xl text-purple-500 font-bold mb-3 text-center">All Events</h1>
      <div className="lg:flex lg:flex-col-reverse lg:items-end lg:mx-3">
        {events.map((event) => (
          <div key={event.id} className="grid grid-cols-4  mx-auto w-full ms-1 lg:ms-1 mb-4  " >
          

<div className="lg:col-span-1 col-span-3 bg-blue-400 p-3 lg:p-6 flex flex-col items-center">
                  <p className="text-white lg:text-xl text-lg font-bold" style={{ margin: "auto" }}>
                    {event.date}
                  </p>
                  <p className="text-white text-lg">
                    {event.time}
                  </p>
                </div>
                <div className="col-span-3 bg-white shadow-md p-6">
                  <h3 className="lg:text-2xl text-xl font-semibold text-gray-800 mb-2">
                    <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
                      {event.title}
                    </span>
                  </h3>
                  <p className="text-gray-700 dark:text-gray-100 lg:text-lg text-sm mt-2">
                  <span className="font-semibold"> Description: </span>  {event.description}
                  </p>

                  <ul className="mt-2">
                {event.rooms.map((room: { name: string }, index: number) => (
                  <li key={index} className="text-gray-700">
                   Room Name: {room.name}
                  </li>
                ))}
              </ul>
              <Link href={`/eventspage/${event.id}`}>
              <button className="bg-purple-500 text-white p-2 rounded lg:mt-4 mt-2  text-sm">View Details</button>
              </Link>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
