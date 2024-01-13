/*
    Language Resource EN-US
    Created : 13 jan 2024 by Mukesh Kumar Soni
*/

 const errorResources = {

    /* Error Messages */
    errors: {

        dbConnection: 'Snap! our database server got lost!',
        dbInsert: 'I think you did not paid attention to details!',
        dbUpdate: 'You need to keep check on what you want!',
        dbDelete: 'Do you really know what you were trying to do?',
        dbSelect: 'May be you are looking for right thing but in wrong space!',
        alreadyExist: 'I am already have similar record, guess you are duplicating!',
        notFound: 'Are you sure you are looking for right information?',
        validationError: 'You forgot to provide me correct details!',
        extError:'Only Text file is allowed',
    },

    /* Route Messages */
    routes: {

        accessDenied: 'You are not authorized to view this space!',
        tokenExpired: 'Sorry! but as per my records you need to login again!',
        blank: 'The space you were trying to access is in nebula!'
    },

    /* Success Messages */
    success: {

        /*USER*/
        userCreate: 'User added',
        userUpdate: 'User details has been updated!',
        userDelete: 'User has been permanently removed from my memory',
        userLoggedIn:'Logged in successfully.',

    }
}

// Exports ------------- Needed utmost as without these nothing will work
export default errorResources