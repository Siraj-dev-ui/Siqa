import React, { useEffect, useState } from "react";
import "./Events.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "../../axios";
import { Link, useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

function Events() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  async function fetchdata() {
    const req = await axios.get("/siqa/events");
    console.log(req.data);
    setEvents(req.data);
  }
  useEffect(() => {
    fetchdata();
  }, []);
  // const history = useHistory();
  function updateEvent(event) {
    console.log("updation");
    navigate("/update", { state: { event: event } });
  }

  async function deleteEvent(id) {
    console.log("deleting", id);
    const res = await axios.post("/siqa/deleteEvent", {
      _id: id,
    });
    if (res.status === 200) {
      fetchdata();
    } else {
      alert("error in deletion");
    }
  }

  return (
    <div className="table_main_container">
      <table className="table_event_list">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event._id}>
              <td>{event.title}</td>
              <td>{event.description}</td>
              <td>{event.date}</td>
              <td>{event.startTime}</td>
              <td>{event.endTime}</td>
              <td>
                {/* <Link
                  to={{
                    pathname: "/update",
                    state: { id: 1, name: "sabaoon", shirt: "green" },
                  }}
                >
                  <button>Update</button>
                </Link> */}

                <button onClick={() => updateEvent(event)}>Update</button>

                <button onClick={() => deleteEvent(event._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Events;
