export const getUser = () => {
  return JSON.parse(window.localStorage.getItem('user'));
};
export const isLoggedIn = () => {
  return !!window.localStorage.getItem('token');
};

export const isAdmin = () => {
  return getUser()?.email === 'admin@portal.com';
};
