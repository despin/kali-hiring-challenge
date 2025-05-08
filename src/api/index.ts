const API_BASE_URL = 'https://api.themoviedb.org/3';
const TOKEN = 'YOUR_JWT_TOKEN_HERE'

export default async function requestMovieDb(url: string) {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    headers: new Headers({
      Authorization:
        `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
      charset: 'utf8',
    }),
    method: 'GET',
  });

  return response.json();
}
