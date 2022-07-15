import React, { useRef } from "react";
import "./Create.css";
import axios from "../../axios";

function Create() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dateref = useRef(null);
  const timeStartRef = useRef(null);
  const timeEndRef = useRef(null);

  async function handleCreateEvent() {
    const res = await axios.post("/siqa/addEvent", {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      date: dateref.current.value,
      startTime: timeStartRef.current.value,
      endTime: timeEndRef.current.value,
    });
    if (res.status === 200) {
      alert("Event Created Successfully...");
    } else {
      alert("Error in Event Creation...");
    }
  }
  return (
    <div className="create_main_container">
      <div className="event">Event</div>
      <div className="title">
        <input type="text" placeholder="Title" ref={titleRef} />
      </div>
      <div className="description">
        <textarea type="text" placeholder="Description" ref={descriptionRef} />
      </div>
      <div className="date">
        <label>Date </label>
        <input type="date" ref={dateref} />
      </div>
      <div className="start_time">
        <label>Start Time</label>
        <input type="time" ref={timeStartRef} />
      </div>
      <div className="end_time">
        <label>End Time</label>
        <input type="time" ref={timeEndRef} />
      </div>

      <button type="submit" onClick={handleCreateEvent}>
        Create
      </button>
    </div>
  );
}

export default Create;
