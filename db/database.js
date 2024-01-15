/*
    Database Connection Configuration
    Created : 13 jan 2024 by Mukesh Kumar Soni
*/

// Some needed modules --------- trying removing one
import { createConnection } from 'mysql';
import dotenv from "dotenv";
dotenv.config({
    path: './.env'
});

let connection = createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});





export const processQuery = async (query, data) => {
    // connect to the MySQL database
    // connection.connect((error) => {
    //     console.log('$$$$$$$$$$$$',error);
    //     if (error) {
    //         console.error('Error connecting to MySQL database:', error);
    //     } else {
    //         console.log('Connected to MySQL database!');
    //     }
    // });

    return new Promise((resolve, reject) => {
        connection.query(query, data, (error, results) => {
            if (error) {
                reject(error);
                // connection.end();
                return error;
            };
            resolve(results);
            // connection.end();
            return results;
        });
    })
} 