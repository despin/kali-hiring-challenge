const API_BASE_URL = 'https://api.themoviedb.org/3';

export default async function requestMovieDb(url: string) {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    headers: new Headers({
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTBhYmFhZWMyMDA0ZGUwZmFhOTA0YTdhYWVmMDI0MyIsInN1YiI6IjY0MGI4ZDI1NzI0ZGUxMDBjMTAyZWViMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yiqfAHGnrs1yEwKWCn7HJmwnXwxcZzA1KPfdu1J3k68',
      'Content-Type': 'application/json',
      charset: 'utf8',
    }),
    method: 'GET',
  });

  return response.json();
}
