CREATE DATABASE swim_selector;

CREATE TABLE events (
  events_table_id SERIAL PRIMARY KEY,
  stroke text,
  course text,
  gender text,
  distance smallint,
  result time
);