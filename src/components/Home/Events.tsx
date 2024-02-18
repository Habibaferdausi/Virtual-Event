"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../app/firebaseConfig";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Events: React.FC = () => {
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

  const visibleEvents = events.slice(0, 5);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl lg:text-4xl font-semibold text-center text-purple-500 mb-6">Upcoming Events</h1>

      <section className="py-12 bg-fixed " style={{
         
        }}>
        <div className="">
          <div className="lg:flex lg:flex-col-reverse lg:items-end lg:mx-3">
            {visibleEvents.map((event, index) => (
              <div key={index} className="grid grid-cols-4  mx-auto w-full ms-1 lg:ms-1 mb-4  ">
                <div className="lg:col-span-1 col-span-3 bg-blue-400 p-3 lg:p-6 flex flex-col items-center">
                  <p className="text-white lg:text-xl text-lg font-bold" style={{ margin: "auto" }}>
                    {event.date}
                  </p>
                  <p className="text-white text-lg">
                    {event.time}
                  </p>
                </div>
                <div className="col-span-3 bg-white shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
                      {event.title}
                    </span>
                  </h3>
                  <p className="text-gray-700 dark:text-gray-100 mt-2">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      <Link href ="/eventspage">
          <button  className="text-white font-semibold text-xl bg-purple-500 p-2 rounded mt-4 block mx-auto">
            View All Events</button>
            </Link>
      </section>
    </div>
  );
};

export default Events;
