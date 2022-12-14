import express from "express";
import checkAuth from "../middleware/authMiddleware.js";
import { createVeterinary, findVeterinary, editVeterinary, deleteVeterinary } from "../controllers/VeterinaryController.js";
const router = express.Router();

router.post('/veterinary/create', checkAuth, createVeterinary);
router.get('/veterinary/edit/:id', checkAuth, findVeterinary);
router.put('/veterinary/edit/:id', checkAuth, editVeterinary);
router.delete('/veterinary/:id', checkAuth, deleteVeterinary);

export default router;