// TODO: this file :)
import { Router } from 'express';
import { getNoteById, addNote, getNotes } from '../db/notes.js';
 
const router = Router();
 
router.get('/', (req, res) => {
  res.send(getNotes());
});
 
router.post('/', (req, res) => {
  if (!req.body) {
    return res.status(400).send('Request must have a body.');
  }
  const { text } = req.body;
  if (!text) {
    return res.status(400).send('New note must have text.');
  }
  const newNote = addNote(text);
  res.status(201).send(newNote);
});

router.get('/:id', (req, res) => {
  const note = getNoteById(Number(req.params.id));
  if (!note) {
    return res.status(404).send('Note not found.');
  }
  res.send(note);
});
 
export default router;
 