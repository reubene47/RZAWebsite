import { getLoggedInUser } from '$lib/server/auth.js';
import { getUserBookings } from '$lib/server/userDb.js';
import { logoutAction } from '$lib/server/auth.js';

export async function load({ cookies }) {
  const user = await getLoggedInUser(cookies);

  if (!user) {
    return { user: null, zooBookings: [], hotelBookings: [] };
  }

  // Use the single function
  const { bookings: zooBookings, hotelBookings } = await getUserBookings(user.user_id);

  return { user, zooBookings, hotelBookings };
}

export const actions = {
  logout: logoutAction
};
