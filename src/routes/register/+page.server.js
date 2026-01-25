import * as lib from '$lib';
import * as validators from '$lib/validators.js';
import crypto from 'crypto'; // SHA255 encryption module
import bcrypt from 'bcrypt';

export const actions = {
  // these actions will be returned inside the form object not the data object!
  
  add: async ({ request }) => {

    // trim() removes spaces (and other whitespace like tabs or newlines) from the start and end of a string, but not from the middle.

    const form = await request.formData(); // built in formData object again using the request object

    // take all the values from the form on the front end
    const values = {
      email: form.get('email').trim(),
      forename: form.get('forename').trim(),
      surname: form.get('surname').trim(),
      password: form.get('password').trim(),
      passwordCheck: form.get('passwordCheck').trim()
    };
    console.log('Values: ', values)
    const errors = {}; // set up object to hold all the errors
    let formErrors = false;

    // Run validations and collect any error messages

    const emailError = validators.validateEmailLength(values.email);
    if (emailError) {
      errors.emailLength = emailError;
      formErrors = true;
    }

    const existsError = await validators.validateEmailExists(values.email);
    if (existsError) {
      errors.emailExists = existsError;
      formErrors = true;
    }

    const forenameError = validators.validateForenameLength(values.forename);
    if (forenameError) {
      errors.forenameLength = forenameError;
      formErrors = true;
    }

    const surnameError = validators.validateSurnameLength(values.surname);
    if (surnameError) {
      errors.surnameLength = surnameError;
      formErrors = true;
    }

    const passwordError = validators.validatePassword(values.password);
    if (passwordError) {
      errors.password = passwordError;
      formErrors = true;
    }

    const passwordCheckError = validators.validatePasswordCheck(values.passwordCheck, values.password);
    if (passwordCheckError) {
      errors.passwordCheck = passwordCheckError;
      formErrors = true;
    }

    if (formErrors) {
      return { errors, values }; //
    }
 
    try {
      await lib.addUser(values.email, values.forename, values.surname, values.password);
    } catch (error) {
      return { errors: { db: 'Failed to add user' } };
    }

    console.log('User registered successfully');
    return { success: true };
  },

  delete: async ({ request }) => {
    const form = await request.formData();
    const email = form.get('email');

    if (!email) {
      return { errors: { email: 'Missing email for deletion' } };
      //return lib.fail(400, { errors: { email: 'Missing email for deletion' } });
    }

    try {
      await lib.deleteUser(email);
    } catch (error) {
      return { errors: { db: 'Failed to delete user' } };
      //return lib.fail(500, { errors: { db: 'Failed to delete user' } });
    }

    return { delete_success: true };
  },

  // and for the Login component
  login: lib.loginAction,
  logout: lib.logoutAction
};