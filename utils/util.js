import  errorResources   from '../utils/erroMessageResource.js';
// Message Locating Function
export function messages (process, point) {
    var response = errorResources[process][point];
    return response
}

// Controller Request Handler
export async function uploadRequestHandler (req, res, callback) {
    try {

        const file = req.file; // We get the file in req.file
        if (!file) { // in case we do not get a file we return
          return res.status(400).json({ status: 400, message: messages('errors', 'validationError') });
        }
        var data = await callback();
        return res.status(200).json(data);

    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message })
    }
}