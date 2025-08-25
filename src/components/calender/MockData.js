import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function MockData({ onAddEvent }) {
  const [eventData, setEventData] = useState({ title: '', start: '', end: '' });

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (eventData.title && eventData.start && eventData.end) {
      onAddEvent({
        ...eventData,
        start: new Date(eventData.start),
        end: new Date(eventData.end),
        id: Date.now(),
      });
      setEventData({ title: '', start: '', end: '' });
    }
  };

  return (
    <>
      <TextField
        id="title"
        label="ชื่อกิจกรรม"
        variant="outlined"
        name="title"
        fullWidth
        value={eventData.title}
        onChange={handleChange}
      />
      <TextField
        id="start-date"
        label="วันเริ่มต้น"
        type="date"
        name="start"
        fullWidth
        InputLabelProps={{ shrink: true }}
        value={eventData.start}
        onChange={handleChange}
      />
      <TextField
        id="end-date"
        label="วันสิ้นสุด"
        type="date"
        name="end"
        fullWidth
        InputLabelProps={{ shrink: true }}
        value={eventData.end}
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        บันทึก
      </Button>
    </>
  );
}

export default MockData;