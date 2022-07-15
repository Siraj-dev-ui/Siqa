import express from "express";
import mongoose from "mongoose";
import Cors from "cors";

import Events from "./dbEvents.js";

// App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://admin:admin@cluster0.aygqh.mongodb.net/eventdb?retryWrites=true&w=majority";

// Middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connection_url);
// API Endpoints
app.get("/", (req, res) => res.status(200).send("server side"));

// create
app.post("/siqa/addEvent", (req, res) => {
  const dbEvent = req.body;
  console.log(dbEvent);

  Events.create(dbEvent, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// display
app.get("/siqa/events", (req, res) => {
  Events.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// update
app.post("/siqa/updateEvent", (req, res) => {
  try {
    const dbEvent = req.body;
    console.log(dbEvent);

    Events.updateOne(
      { _id: dbEvent._id },
      {
        $set: {
          title: dbEvent.title,
          description: dbEvent.description,
          date: dbEvent.date,
          startTime: dbEvent.startTime,
          endTime: dbEvent.endTime,
        },
      },
      (err, data) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(data);
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
});

// delete
app.post("/siqa/deleteEvent", (req, res) => {
  try {
    const dbEvent = req.body;
    console.log("deletion: ", dbEvent);

    Events.deleteOne({ _id: dbEvent }, (err, data) => {
      if (err) {
        console.log("error in deletion");
        res.status(201).send(err);
      } else {
        console.log("no error in deletion...");
        res.status(200).send(data);
      }
    });
  } catch (err) {
    console.log("exception in deletion", err);
  }
});

// Listener
app.listen(port, () => console.log(`listening to localhost at port: ${port}`));
