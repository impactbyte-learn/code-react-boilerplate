import Cookies from 'universal-cookie';
import { getEnvironment } from './environment';

const cookies = new Cookies();
export const setCookie = (name, value, options = {}) =>
  cookies.set(name, value, Object.assign({
    path: '/',
    maxAge: 604800,
    secure: getEnvironment() === 'production',
  }, options));
export const getCookie = name => cookies.get(name);
export const deleteCookie = name => cookies.remove(name);
