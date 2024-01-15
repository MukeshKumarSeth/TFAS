
/*
    Upload Controllers
    Created : 13 jan 2024 by Mukesh Kumar Soni
*/


// Some needed modules --------- trying removing one
import { uploadRequestHandler, analysisTaskRequestHandler } from '../utils/util.js';
import { fileUpload, getUploadByFileId, getFileAnalysisById } from '../services/uploadService.js';

// Module for Uploading single text file
export async function uploadFile(req, res) {
    return await uploadRequestHandler(req, res, async () => {
        return await fileUpload(req.file);
    })
}

// Module for analysis single text file
export async function analysisTask(req, res) {
    return await analysisTaskRequestHandler(req, res, async () => {
        return await getUploadByFileId(req.body);
    })
}

// Module for get single analysis
export async function getAnalysisTask(req, res) {
    const result = await getFileAnalysisById(req.params);
    return res.json(result);
}