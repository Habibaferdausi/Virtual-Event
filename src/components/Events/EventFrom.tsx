import React, { useState } from 'react';

interface EventFormProps {
  onSubmit: (formData: any) => void;
}

const EventForm: React.FC<EventFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = () => {
    const formData = {
      title,
      description,
      date,
      time,
    };
    onSubmit(formData);
  };

  return (
    <div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default EventForm;
