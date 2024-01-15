import errorResources from '../utils/erroMessageResource.js';
// Message Locating Function
export function messages(process, point) {
    var response = errorResources[process][point];
    return response;
}

// Controller Request Handler
export async function uploadRequestHandler(req, res, callback) {
    try {
        const file = req.file; // We get the file in req.file
        if (!file) { // in case we do not get a file we return
            return res.status(400).json({ status: 400, message: messages('errors', 'validationError') });
        }
        var data = await callback();
        return res.status(200).json(data);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

// Controller Request Handler
//to check if user enterd wronk analysis task for file
export async function analysisTaskRequestHandler(req, res, callback) {
    try {
        const { analysisOperation } = req.body; // We get the file in req.file
        if (analysisOperation === 'countWords' || analysisOperation === 'countUniqueWords' || analysisOperation === 'findTopKWords') { // in case we do not get a file we return
            var data = await callback();
            return res.status(200).json(data);

        } else {
            return res.status(400).json({ status: 400, message: messages('errors', 'validationError') });
        }

    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}