import axios from 'axios';

const KEY = 'AIzaSyCVbzVH8nCzlhh6aGsMR4v0L5BBrIFmKbA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
