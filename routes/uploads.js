import { Router } from "express";
import { upload } from "../middlewares/multer.js";
import { uploadFile } from "../controllers/uploadController.js";
const router = Router()
router.post('/upload', upload, uploadFile);


export default router