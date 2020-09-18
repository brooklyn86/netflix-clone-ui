const API_KEY = '9e2117f03391e15e93d253ad1977f142';

const API_URL = 'https://api.themoviedb.org/3';

const LANGUAGE = 'pt-br';

const basicFetch = async (endpoint) => {
    const response  = await fetch(`${API_URL}${endpoint}`);

    const json = await response.json();

    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug : 'originals',
                title : 'Originais Netflix',
                items : await basicFetch(`/discover/tv?with_network=213&language=${LANGUAGE}&api_key=${API_KEY}`)
            },
            {
                slug : 'trending',
                title : 'Recomendados para você',
                items : await basicFetch(`/trending/all/week?language=${LANGUAGE}&api_key=${API_KEY}`)
            },
            {
                slug : 'toprater',
                title : 'Em Alta',
                items : await basicFetch(`/movie/top_rater?language=${LANGUAGE}&api_key=${API_KEY}`)
            },
            {
                slug : 'action',
                title : 'Ação',
                items : await basicFetch(`/discover/movie?with_genrs=28&language=${LANGUAGE}&api_key=${API_KEY}`)
            },
            {
                slug : 'comedy',
                title : 'Comédia',
                items : await basicFetch(`/discover/movie?with_genrs=35&language=${LANGUAGE}&api_key=${API_KEY}`)
            },
            {
                slug : 'horror',
                title : 'Terror',
                items : await basicFetch(`/discover/movie?with_genrs=27&language=${LANGUAGE}&api_key=${API_KEY}`)
            },
            {
                slug : 'romance',
                title : 'Romance',
                items : await basicFetch(`/discover/movie?with_genrs=10749&language=${LANGUAGE}&api_key=${API_KEY}`)
            },
            {
                slug : 'documentary',
                title : 'Documentários',
                items : await basicFetch(`/discover/movie?with_genrs=99&language=${LANGUAGE}&api_key=${API_KEY}`)
            },
        ];
    },

    getMovieDetals : async (movieId, type) => {
        let info = {};
        if(movieId) {
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=${LANGUAGE}&api_key=${API_KEY}`)
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=${LANGUAGE}&api_key=${API_KEY}`)
                break;
                default:
                    info = null
                break;
                
            }
        }

        return info;
    }

}