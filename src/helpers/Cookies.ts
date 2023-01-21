import Cookie from 'js-cookie';

const userCookieKey = 'auth';
const oneMonth = 31;

interface ICookies {
  saveUser: (user: User) => void;
  getUser: () => User | null;
  removeUser: () => void;
}

export const Cookies: ICookies = {
  saveUser(user) {
    Cookie.set(userCookieKey, JSON.stringify(user), { expires: oneMonth });
  },
  getUser() {
    const fromCookie = Cookie.get(userCookieKey);
    if (!fromCookie) return null;
    return JSON.parse(fromCookie);
  },
  removeUser() {
    Cookie.remove(userCookieKey);
  },
};
