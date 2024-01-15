import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: '*',
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
// app.use(cookieParser())
dotenv.config({
    path: './.env'
})

//routes import
import uploadRouter from './routes/uploads.js';

app.use('/', uploadRouter)

app.listen(process.env.PORT || 8000, () => {
    console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
})

// export { app }