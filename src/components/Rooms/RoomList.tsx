import React from 'react';

interface RoomListProps {
  rooms: string[];
  onRoomSelect: (roomId: string) => void;
}

const RoomList: React.FC<RoomListProps> = ({ rooms, onRoomSelect }) => {
  return (
    <div>
      <h3>Rooms</h3>
      <ul>
        {rooms.map((room, index) => (
          <li key={index} onClick={() => onRoomSelect(room)}>
            {room}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomList;
