import { db } from '$lib/server/db.js'; // database connction required

// async means wait for one query to finish before running another
export async function validateEmailExists(email) {

    try {
        const [existing] = await db.query('SELECT * FROM users WHERE user_email= ?', [email]);
        if (existing.length > 0) {
            console.log('Failed, email already exists');
            return 'An account with this email already exists';
        }
    } catch (error) {
        console.error('Error checking user existence:', error);
        return 'Database error during user existence check';
    }
}


// this function could be used on any field
// to check for invalid characters
export function validateChars(inputText) {
    if (/[^a-zA-Z0-9]/.test(inputText)) {
        console.log('Failed, invalid characters used');
        return 'Fields can only contain letters and numbers';
    }
}

// specific email length validation for register
export function validateEmailLength(email) {
    if (!email || email.length < 3) {
        console.log('Failed, email too short');
        return 'Email must be at least 3 characters long';
    }
}

// specific forename length validation for register
export function validateForenameLength(forename) {
    if (!forename || forename.length < 3) {
        console.log('Failed, forename too short');
        return 'Forename must be at least 3 characters long';
    }
}

// specific surname length validation for register
export function validateSurnameLength(surname) {
    if (!surname || surname.length < 3) {
        console.log('Failed, surname too short');
        return 'Surname must be at least 3 characters long';
    }
}

// password validation for register
export function validatePassword(password) {
    if (!password || password.length < 6) {
        console.log('Failed, password too short');
        return 'Password must be at least 6 characters long';
    }
    if (!/[A-Za-z0-9]/.test(password) || !/[0-9]/.test(password)) {
        console.log('Failed, password not num and letter');
        return 'Password must include at least one letter and one number';
    }
}

// password check validation
export function validatePasswordCheck(passwordCheck, password) {
    if (passwordCheck != password) {
        console.log('Failed, password doesnt match password check');
        return 'Password and Re-type Password must match';
    }
}