import { getLoggedInUser } from '$lib/server/auth.js';
import { db } from '$lib/server/db.js';

export async function load({ cookies }) {
  const user = await getLoggedInUser(cookies);
  if (!user || user === 'Guest') return { user: null };
  return { user };
}

export const actions = {
  add_booking: async ({ request, cookies }) => {
    const user = await getLoggedInUser(cookies);
    if (!user || user === 'Guest') {
      return { error: 'You must be logged in to make a booking.' };
    }

    const formData = await request.formData();
    const visit_date = formData.get('visit-date');
    const num_adults = parseInt(formData.get('num-adults'), 10);
    const num_children = parseInt(formData.get('num-children'), 10);

    // Basic validation
    const errors = {};
    if (!visit_date) errors.visit_date = 'Visit date is required';
    if (isNaN(num_adults) || num_adults < 1) errors.num_adults = 'At least one adult required';
    if (isNaN(num_children) || num_children < 0) errors.num_children = 'Number of children cannot be negative';

    if (Object.keys(errors).length > 0) {
      return { errors, values: { visit_date, num_adults, num_children } };
    }

    try {
      await db.execute(
        'INSERT INTO zoo_bookings (user_id, visit_date, num_adults, num_children) VALUES (?, ?, ?, ?)',
        [user.user_id, visit_date, num_adults, num_children]
      );
    } catch (error) {
      console.error('[add_booking] Failed:', error);
      return { errors: { db: 'Failed to add booking' }, values: { visit_date, num_adults, num_children } };
    }

    return { success: true };
  }
};