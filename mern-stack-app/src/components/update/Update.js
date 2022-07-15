import React, { useState, useRef } from "react";
import "../create/Create.css";
import axios from "../../axios";
import { useLocation } from "react-router-dom";

function Update(props) {
  const event = useLocation().state.event;

  const [title, setTitle] = useState(event.title);
  //   const titleRef = useRef(event.title);
  const [description, setDescription] = useState(event.description);
  const [date, setDate] = useState(event.date);
  const [startTime, setStartTime] = useState(event.startTime);
  const [endTime, setEndTime] = useState(event.endTime);

  console.log(event);
  //   console.log(date);
  //   console.log(timeStart);
  //   console.log(timeEnd);

  async function handleUpdateEvent() {
    const res = await axios.post("/siqa/updateEvent", {
      _id: event._id,
      title: title,
      description: description,
      date: date,
      startTime: startTime,
      endTime: endTime,
    });

    if (res.status === 200) {
      alert("Record Updated Successfully...");
    }
  }
  return (
    <div className="create_main_container">
      <div className="event">Update</div>
      <div className="title">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="description">
        <textarea
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="date">
        <label>Date </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="start_time">
        <label>Start Time</label>
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>
      <div className="end_time">
        <label>End Time</label>
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>

      <button type="submit" onClick={handleUpdateEvent}>
        Update
      </button>
    </div>
  );
}

export default Update;
