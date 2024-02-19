"use client";
import React, { useEffect, useState } from "react";
import { collection, doc, getDoc, Firestore } from "firebase/firestore";
import { db } from "../../app/firebaseConfig";
import { useParams, useRouter } from "next/navigation";

const EventDetails: React.FC = () => {
 const router = useRouter();
  const { id } = useParams();
  const [eventDetails, setEventDetails] = useState<any>(null);
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      if (!id) return;
      const eventDocRef = doc(db, "events", id.toString());
      const eventDocSnap = await getDoc(eventDocRef);
      if (eventDocSnap.exists()) {
        setEventDetails(eventDocSnap.data());
      } else {
        console.log("Event not found");
      }
    };

    fetchEventDetails();
  }, [id]);

  const handleRoomClick = (roomId: string) => {
    setSelectedRoomId(roomId);
    router.push(`/room/${roomId}`);
  };

  if (!eventDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container max-w-[1500px] mx-auto py-8">

<h1 className="lg:text-3xl text-xl text-purple-500 font-bold mb-3 text-center">Events Details</h1>


      <h1 className="lg:text-2xl text-xl font-bold mb-2">Event Name: <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text"> {eventDetails.title} </span></h1>
      <p className="text-gray-600 mb-1 lg:text-lg text-sm">Description: {eventDetails.description}</p>
      <p className="text-gray-600 mb-1">Date: {eventDetails.date}</p>
      <p className="text-gray-600">Time: {eventDetails.time}</p>
      <h2 className="lg:text-xl  text-lg font-semibold lg:mt-8 mt-5 mb-3">Rooms For Messaging</h2>
      <ul>
        {eventDetails.rooms.map((room: { id: string; name: string }) => (
          <li key={room.id} className="text-gray-700 mt-3">
            
            <button className=" bg-blue-400 hover:bg-green-400 text-white lg:text-lg text-sm rounded p-2" onClick={() => handleRoomClick(room.id)}>{room.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventDetails;
