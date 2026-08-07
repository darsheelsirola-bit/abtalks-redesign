import React from 'react';
import { useParams } from 'react-router-dom';

const Day: React.FC = () => {
  const { day } = useParams<{ day: string }>();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Day {day}</h1>
    </div>
  );
};

export default Day;