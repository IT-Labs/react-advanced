
export interface User {
  id: number;
  name: string;
  username: string;
  image: string;
  email: string;
}

export const getUsers = (): Promise<User[]> => {
  const url = 'http://localhost:5000/users'
  return new Promise((resolve, reject) => fetch(url, {
    method: 'GET'
  }).then(response => {
    if (!response.ok) {
      return reject('Error');
    }
    return setTimeout(() => resolve(response.json()), 1500);
  })
  .catch(error => error));
} 