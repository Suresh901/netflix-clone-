const key ='fa27acbcba86f9e3c66afcab45dd4fe9'

const requests ={
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`,
    requestUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`
}

export default requests