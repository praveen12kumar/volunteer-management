import express from "express";
import {addEvent, getAllEvents, updateEvent, deleteEvent} from "../controller/eventController.js"


const eventRoutes = express.Router();

eventRoutes.post('/new', addEvent);
eventRoutes.get('/all', getAllEvents);
eventRoutes.post('/:id', updateEvent)
eventRoutes.delete('/:id', deleteEvent);

export default eventRoutes;
