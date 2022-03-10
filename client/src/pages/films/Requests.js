const API_KEY = '2750142d8e261787e7239ae8d1758d35';


const requests = {
    fetchTrendingMovies: `/trending/movie/day?api_key=${API_KEY}&language=en-US`,
    fetchTrendingShows: `/trending/tv/day?api_key=${API_KEY}&language=en-US`,
    fetchTrendingCelebs: `/trending/person/day?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
};

export default requests;