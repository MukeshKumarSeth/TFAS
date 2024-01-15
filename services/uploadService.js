
import { messages } from "../utils/util.js";
import { createUpload, getUpload, createAnalysisTask, getAnalysisTask, getAnalysisTaskById } from "../models/upload.js";
import fs from 'fs';
// Create a new upload
export const fileUpload = async (fileData) => {
    const { filename, size } = fileData;
    const fileId = Math.random().toString(36).substr(2, 4) // We can change the `4` to change the length or uuid can be used.
    var response = await createUpload(fileId, filename, size);
    if (response && response.insertId >= 0) {
        response = {
            status: 200,
            fileId: fileId,
            message: messages('success', 'uploadCreate')
        }
    } else {
        response = {
            status: 401,
            message: messages('errors', 'dbInsert'),
        }
    }
    return response;
}

export const getUploadByFileId = async (reqData) => {
    const { analysisOperation, fileId, kwords = '' } = reqData;
    let response;
    try {
        response = await getUpload(fileId);
        const taskId = Math.random().toString(36).substr(2, 5) // We can change the `5` to change the length or uuid can be used.
        let analysisTaskResult = await getAnalysisTask(fileId, '', analysisOperation, kwords);
        if (response.uploadData && response.uploadData.length > 0) {
            if (analysisTaskResult.analysisData.length == 0) {
                const processResult = await processFileAnalysis(analysisOperation, response.uploadData[0].fileName, kwords);
                await createAnalysisTask(fileId, taskId, analysisOperation, kwords, processResult);
                response = {
                    status: 200,
                    taskId: taskId,
                    message: messages('success', 'fileAnalysisCreate')
                }
            } else {
                response = {
                    status: 200,
                    taskId: analysisTaskResult.analysisData[0].taskId,
                    message: messages('success', 'fileAnalysisCreate')
                }
            }


        } else {
            response = {
                status: 401,
                message: messages('errors', 'notFound'),
            }
        }

    } catch (err) {
        console.log('DB Error', err.message);
        response = {
            status: 500,
            message: messages('errors', 'dbInsert'),
        }
    }
    return response;
}

export const getFileAnalysisById = async (reqData) => {
    const { taskId } = reqData;
    let response;
    try {
        let analysisTaskResult = await getAnalysisTaskById(taskId);
        if (analysisTaskResult.analysisData.length > 0) {
            response = {
                status: 200,
                analysisTaskData: analysisTaskResult,
            }
        } else {
            response = {
                status: 401,
                message: messages('errors', 'notFound'),
            }
        }


    } catch (err) {
        console.log('DB Error', err.message);
        response = {
            status: 500,
            message: messages('errors', 'dbInsert'),
        }
    }
    return response;
}

//to process file analysis as per key word
const processFileAnalysis = async (analysisOperation, fileName, kwords) => {
    const readData = fs.readFileSync(`public/uploads/${fileName}`, 'utf8');
    const words = readData.split(/\s+/);
    let wordCount;
    switch (analysisOperation) {
        case 'countWords':
            wordCount = words.length;
            break
        case 'countUniqueWords':
            let set = new Set(words);
            wordCount = set.size;
            break
        case 'findTopKWords':
            wordCount = words.filter(word => word == kwords).length;
            break
    }
    return wordCount;

}