import * as lib from '$lib';
import { db } from '$lib/server/db.js';
import crypto from 'crypto';
import { redirect } from '@sveltejs/kit';

/** Get currently logged-in user from session cookie */
export async function getLoggedInUser(cookies) {
  const token = cookies.get('session');
  console.log("\nCookies:", cookies);
  console.log('SELECT * FROM users WHERE session_token =', token);

  if (!token) return 'Guest';

  const [rows] = await db.execute(
    'SELECT * FROM users WHERE session_token = ?',
    [token]
  );

  let user;
  if (rows.length === 0) {
    user = 'Guest';
  } else {
    return rows[0];
  }

  console.log('getLoggedInUser user', user);
  return user;
}

// Login action
export async function loginAction({ request, cookies }) {
  const formData = await request.formData();
  const email = formData.get('email')?.trim();
  const password = formData.get('password')?.trim();

  const errors = {};
  let hasErrors = false;

  // Basic validation
  if (!email) {
    errors.email = 'Email is required';
    hasErrors = true;
  }
  if (!password) {
    errors.password = 'Password is required';
    hasErrors = true;
  }

  if (hasErrors) {
    return {
      errors,
      values: { email } // keep email so form doesn't go blank
    };
  }

  console.log('Doing auth.js check');
  const user = await lib.identifyUser(email, password);
  console.log('identifyUser result:', user);

  if (!user) {
    return {
      errors: { general: 'Invalid email or password' },
      values: { email }
    };
  }

  // Generate a secure session token
  const token = crypto.randomBytes(32).toString('hex');
  console.log('Generated session token for user:', user.email);

  // Update session token in DB (replace previous session)
  await db.execute(
    'UPDATE users SET session_token = ? WHERE user_id = ?',
    [token, user.user_id] // use primary key id
  );

  // Set secure, HTTP-only cookie
  cookies.set('session', token, {
    httpOnly: true,  // JS can't read the cookie
    secure: true,
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24 // 1 day
  });

  return { email: user.email };
}

/** Logout action */
export async function logoutAction({ cookies }) {
  cookies.delete('session', { path: '/' });
  throw redirect(303, '/');  // Redirect to homepage
}