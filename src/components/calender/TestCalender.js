import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import {
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MockData from "./MockData";

const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales });

function TestCalendar() {
  const [events, setEvents] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectSlot = ({ start }) => {
    setSelectedEvent({ id: null, title: "", start, end: start });
    setOpenDialog(true);
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedEvent(null);
  };

  const handleSaveEvent = () => {
    if (selectedEvent.id) {
      setEvents(events.map(evt => (evt.id === selectedEvent.id ? selectedEvent : evt)));
    } else {
      setEvents([...events, { ...selectedEvent, id: Date.now(), icon: <GroupAddIcon /> }]);
    }
    setOpenDialog(false);
  };

  const handleDeleteEvent = () => {
    setEvents(events.filter(event => event.id !== selectedEvent.id));
    setOpenDialog(false);
  };

  const handleAddEventFromMockData = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <>
      <div style={{ height: 500 }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          style={{ height: 500 }}
        />

        <Dialog open={openDialog} onClose={handleDialogClose}>
          <DialogContent>
            <TextField
              label="ชื่อกิจกรรม"
              fullWidth
              value={selectedEvent?.title || ""}
              onChange={(e) => setSelectedEvent({ ...selectedEvent, title: e.target.value })}
            />
            <TextField
              label="วันเริ่มต้น"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={selectedEvent ? format(selectedEvent.start, "yyyy-MM-dd") : ""}
              onChange={(e) => setSelectedEvent({ ...selectedEvent, start: new Date(e.target.value) })}
            />
            <TextField
              label="วันสิ้นสุด"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={selectedEvent ? format(selectedEvent.end, "yyyy-MM-dd") : ""}
              onChange={(e) => setSelectedEvent({ ...selectedEvent, end: new Date(e.target.value) })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} color="secondary">ยกเลิก</Button>
            {selectedEvent?.id && <Button onClick={handleDeleteEvent} color="error">ลบ</Button>}
            <Button onClick={handleSaveEvent} color="primary">บันทึก</Button>
          </DialogActions>
        </Dialog>
      </div>
      <MockData onAddEvent={handleAddEventFromMockData} />
    </>
  );
}

export default TestCalendar;