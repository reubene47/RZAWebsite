import * as lib from '$lib';
import { db } from '$lib/server/db.js';
import bcrypt from 'bcrypt';

// Add a user (register/create account)
export async function addUser(email, forename, surname, password) {
  try {
    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert into users table
    await db.execute(
      "INSERT INTO users (user_email, user_forename, user_surname, user_password) VALUES (?, ?, ?, ?)",
      [email, forename, surname, hashedPassword]
    );
  } catch (error) {
    console.error('[addUser] Insert failed:', error);
    throw error;
  }
}

// Identify user with password check for login
export async function identifyUser(email, password) {
  try {
    const [rows] = await db.query('SELECT * FROM users WHERE user_email = ?', [email]);

    if (rows.length === 0) return null;

    const user = rows[0];

    // Compare the bcrypt hashed password
    const match = await bcrypt.compare(password, user.user_password);

    if (!match) return null;

    return user;
  } catch (error) {
    console.error('[identifyUser] Login failed:', error);
    return null;
  }
}

// Fetch bookings for a user
export async function getUserBookings(userId) {
  const [hotelBookings] = await db.query(
    'SELECT * FROM hotel_bookings WHERE user_id = ?',
    [userId]
  );
  const [bookings] = await db.query(
    'SELECT * FROM bookings WHERE user_id = ?',
    [userId]
  );

  return { bookings, hotelBookings };
}