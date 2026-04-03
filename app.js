import express from "express";
import notesRouter from './api/notes.js';
const express = require('express')
const app = express();
export default app;

app.use(express.json());

const notesRouter = require('./api/notes');
app.use('/notes', notesRouter);

// Simple logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

// Catch-all error-handling middleware
app.use((err, req, res, next) => {
  res.status(500).send("Sorry! Something went wrong :(");
});

export default app;