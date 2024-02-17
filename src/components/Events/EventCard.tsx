import React from 'react';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, description, date, time }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
    </div>
  );
};

export default EventCard;
