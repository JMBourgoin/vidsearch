import axios from 'axios';

const KEY = 'AIzaSyBRD9TvTp-THe_nOdAwxef57X9VzpBLhyY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 20,
        key: KEY
    },
});