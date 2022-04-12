import axios from 'axios';

const KEY = 'AIzaSyDU0S7COi9iQ_sbDp_tKHTLtwog64i9k30';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
