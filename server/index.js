const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req body

//ROUTES
// Create an event
app.post("/events", async(req, res) => {
  try {
    const { stroke, distance, course, gender, time } = req.body;
    const newEvent = await pool.query(
      "INSERT INTO events (stroke, distance, course, gender, time) VALUES($1, $2, $3, $4, $5)",
     [stroke, distance, course, gender, time]
     )
  } catch (err) {
    console.error(err.message);
  }
});

// Get all events
app.get("/events", async(req, res) => {
  try {
    const allEvents = await pool.query(
      "SELECT * FROM events"
      );
    res.json(allEvents.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Get an event
app.get("/events/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const event = await pool.query(
      "SELECT * FROM events WHERE events_table_id = $1", [id]
      );
    res.json(race.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Update an event

// delete an event


app.listen(5000, () => {
  console.log("Server has started on port 5001");
});