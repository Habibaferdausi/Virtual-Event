"use client";

import React, { useContext, useEffect } from "react";
import RoomChat from "@/components/RoomChat/RoomChat"; 
import { AuthContext } from "@/components/Auth/AuthProvider";
import { useRouter } from "next/navigation"; 

const RoomPage: React.FC = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter(); 

  useEffect(() => {
    if (!user) {
      router.push('/login'); 
    }
  }, [user, router]);

  if (!user) {
    return null; 
  }

  return (
    <div>
      <RoomChat />
    </div>
  );
};

export default RoomPage;
