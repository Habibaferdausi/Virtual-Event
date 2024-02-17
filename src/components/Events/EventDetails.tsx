import React from 'react';

interface EventDetailProps {
  title: string;
  description: string;
  date: string;
  time: string;
}

const EventDetail: React.FC<EventDetailProps> = ({ title, description, date, time }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
    </div>
  );
};

export default EventDetail;
