
/*
    Upload Controllers
    Created : 13 jan 2024 by Mukesh Kumar Soni
*/


// Some needed modules --------- trying removing one
import { uploadRequestHandler } from '../utils/util.js'
// Module for fetching horoscope of single user
export async function uploadFile(req, res) {
    return await uploadRequestHandler(req, res, async () => {
        console.log(req.body)
        console.log(req.file)
        res.send('file uploaded');
    })
}