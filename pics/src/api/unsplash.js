import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9931ad5e6497d25993fab88250d8fc82ad2dfbf0bebf8d04cb83a8d0db16cb3c'
    }
});
