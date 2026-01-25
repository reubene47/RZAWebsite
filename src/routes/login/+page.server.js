import { loginAction, logoutAction, getLoggedInUser } from '$lib/server/auth.js';

/** Load function to get the currently logged-in user */
export async function load({ cookies }) {
  const user = await getLoggedInUser(cookies);
  console.log('Load function user:', user);

  return { user };
}

/** Actions for login and logout */
export const actions = {
  login: loginAction,
  logout: logoutAction
};