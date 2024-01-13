import multer from "multer";
import path from "path";
import { messages } from "../utils/util.js";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads")
  },
  filename: function (req, file, cb) {

    cb(null, file.originalname)
  }
})

export const uploadFile = multer({
  storage,
  fileFilter: function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if (ext !== '.txt') {
      return callback(new Error('Only Text file is allowed'))
    }
    callback(null, true)
  },
}).single('file');

export const upload = async (req, res, next) => {
  uploadFile(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log('multer error', err);
      return res.status(400).json({ status: 400, message: messages('errors', 'extError') });
    } else if (err) {
    console.log('normal error',err);
      return res.status(400).json({ status: 400, message: messages('errors', 'extError') });
    }

    // Everything went fine.
    next()
  })
}