import { messages } from "../utils/util.js";
import { processQuery } from "../db/database.js";
// Essential Variables
const table_name = 'uploads'

export const createUpload = async (fileId, fileName, fileSize) => {
    try {
        var query = `INSERT INTO ${table_name} (fileId, fileName, fileSize) VALUES (?,?,?)`;
        const response = await processQuery(query, [fileId, fileName, fileSize]);
        return response;
    } catch (e) {
        console.log('Error', e);
        return messages('errors', 'dbInsert');
    }
}

export const getUpload = async (fileId) => {
    var query = `SELECT * from ${table_name} where fileId = ?`;
    const uploadData = await processQuery(query, [fileId]);
    return {
        uploadData
    };
}

/* This section is dedicated for task_analysis table */
const table_nameTwo = 'task_analysis';
export const createAnalysisTask = async (fileId, taskId, analysisOperation, kwords, kwordsFrequency) => {
    var query = `INSERT INTO ${table_nameTwo} (fileId, taskId, analysis_operation,kwords,kwords_frequency) VALUES (?,?,?,?,?)`;
    const response = await processQuery(query, [fileId, taskId, analysisOperation, kwords, kwordsFrequency]);
    return response;
}

export const getAnalysisTask = async (fileId, taskId, analysisOperation, kwords) => {
    const searchValue = taskId? taskId:fileId;
    const searchCol = taskId? 'taskId':'fileId';
    var query = `SELECT * from ${table_nameTwo} where ${searchCol} = ? AND analysis_operation = ? AND kwords = ?`;
    let analysisData = await processQuery(query, [searchValue, analysisOperation, kwords]);
    return {
        analysisData
    };
} 

export const getAnalysisTaskById = async (taskId) => {
    var query = `SELECT * from ${table_nameTwo} where taskId= ?`;
    let analysisData = await processQuery(query, [taskId]);
    return {
        analysisData
    };
} 