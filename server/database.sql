CREATE DATABASE swim_selector;

CREATE TABLE events (
  events_table_id SERIAL PRIMARY KEY,
  stroke text,
  distance smallint,
  course boolean,
  gender boolean,
  result time,
);