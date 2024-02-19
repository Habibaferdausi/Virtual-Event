"use client";
import React, { useContext } from "react";
import RoomChat from "@/components/RoomChat/RoomChat"; 
import { AuthContext } from "@/components/Auth/AuthProvider";
import { useRouter } from "next/navigation";

const RoomPage: React.FC = () => {
  const { user } = useContext(AuthContext);
  const navigate = useRouter();


  if (!user) {
    navigate('/login');
    return null; 
  }

  return (
    <div>
      <RoomChat />
    </div>
  );
};

export default RoomPage;
