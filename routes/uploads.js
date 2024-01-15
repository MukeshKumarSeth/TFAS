import { Router } from "express";
import { upload } from "../middlewares/multer.js";
import { uploadFile, analysisTask, getAnalysisTask } from "../controllers/uploadController.js";
import { messages } from "../utils/util.js";
const router = Router();

// Defining Home Page Route
router.all('/', function (req, res) {
    res.send(messages('routes', 'blank'));
})

router.post('/upload', upload, uploadFile);
router.post('/analysisTask', analysisTask);
router.get('/analysisTask/:taskId', getAnalysisTask);

// Defining any arbitary route
router.all('/*', function (req, res) {
    res.send(messages('routes', 'blank'));
})
export default router