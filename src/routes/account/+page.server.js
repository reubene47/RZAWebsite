import { getLoggedInUser } from '$lib/server/auth.js';
import { getUserBookings } from '$lib/server/userDb.js';
import { logoutAction } from '$lib/server/auth.js';

export async function load({ cookies }) {
  const user = await getLoggedInUser(cookies);

  if (!user) {
    return { user: null, zoo_bookings: [], hotel_bookings: [] };
  }

  // Use the single function
  const { zoo_bookings, hotel_bookings } = await getUserBookings(user.user_id);
  return { user, zoo_bookings, hotel_bookings };
}

export const actions = {
  logout: logoutAction
};
