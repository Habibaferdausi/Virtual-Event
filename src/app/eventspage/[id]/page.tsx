"use client";
import React, { useEffect, useState } from "react";
import { collection, doc, getDoc, Firestore } from "firebase/firestore";
import { db } from "../../firebaseConfig";
 // Importing useRouter for client-side routing
import RoomChat from "../../room/[id]/page";
import { useParams, useRouter } from "next/navigation";


const EventDetailsPage: React.FC = () => {
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
    // Use client-side routing to navigate to the room page
    router.push(`/room/${roomId}`);
  };

  if (!eventDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">{eventDetails.title}</h1>
      <p className="text-gray-600">{eventDetails.description}</p>
      <p className="text-gray-600">Date: {eventDetails.date}</p>
      <p className="text-gray-600">Time: {eventDetails.time}</p>
      <h2 className="text-xl font-semibold mt-8">Rooms:</h2>
      <ul>
        {eventDetails.rooms.map((room: { id: string; name: string }) => (
          <li key={room.id} className="text-gray-700">
            {/* Call handleRoomClick when a room is clicked */}
            <button onClick={() => handleRoomClick(room.id)}>{room.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventDetailsPage;
