import { headers } from 'api';

export const setAuthToken = (token) => {
  if (token) {
    headers.append('Authorization', `Bearer ${token}`);
  } else {
    headers.delete('Authorization');
  }
};
