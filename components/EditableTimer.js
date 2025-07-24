import React, { useState } from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

export default function EditableTimer({ id, title, project, elapsed, isRunning, onTimerRemove ,onFormSubmit }) {
  const [editFormOpen, setEditFormOpen] = useState(false);
  const handleFormSubmit = (timer) => {
    onFormSubmit(timer);
    setEditFormOpen(false);
  };

  if (editFormOpen) {
    return <TimerForm id={id}
     title={title} 
     project={project}
     onFormSubmit={handleFormSubmit} />;
  }
  
  return (

    <Timer
      id={id}
      title={title}
      project={project}
      elapsed={elapsed}
      isRunning={isRunning}
      onTimerRemove={onTimerRemove}
      editPress={() => setEditFormOpen(true)}
    />
  );
}
