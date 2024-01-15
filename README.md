# TFAS
Text File Analysis System


# Environment vars
The environment variables use in this project are added in .env file alos it uses "*" for CORS :



# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 8.0.0


# Getting started
- Clone the repository
```
git clone  <git lab template url> <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Build and run the project
```
npm start
```
  Navigate to
  - `http://localhost:5000/upload`
  - `http://localhost:5000/analysisTask`
  - `http://localhost:5000/analysisTask/taskId`

- API endpoints type and payloads
 # upload
 - Type:- Post
 - Payload:- Any txt file from file input

  # analysisTask
 - Type:- Post
 - Payload:- 
 1:- {
    "analysisOperation": "countWords",
    "fileId": "ddy3"
}
 2:- {
    "analysisOperation": "countUniqueWords",
    "fileId": "ddy3"
}
 1:- {
    "analysisOperation": "findTopKWords",
    "fileId": "ddy3",
    "kwords":"amicitia"
}

  # analysisTask/taskId
 - Type:- Get
 - Payload:- Genrated task id inparams

# Note :-
- This project does not use any module for error validations. It is handled manually.


## Project Structure
The folder structure of this Projecxt is follows MVC pattern like model,controller,service etc.


