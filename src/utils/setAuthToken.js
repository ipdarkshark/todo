import { headers } from 'api';

export const setAuthToken = token => {
  if (token) {
    // console.log(headers.get())
    headers.append('Authorization', `Bearer ${token}`)
  } else {
    headers.delete('Authorization')
  }
}