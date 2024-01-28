const GOOGLE_API_KEY = "AIzaSyAvAzSz--r4s6eMWOjsaJgij8i2EprxDKY";
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&&maxResults=50&key=" +
  GOOGLE_API_KEY;
export const YOUTUBE_COMMENTS_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=" +
  GOOGLE_API_KEY;
// export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query";

export const BUTTONLIST_MOCK_DATA = [
  "All",
  "Music",
  "Lo-fi",
  "Sitcoms",
  "Live",
  "Computer Programming",
  "Mixes",
  "Rain",
  "Claassical Music",
  "News",
  "Jazz",
  "Recently Uploaded",
  "Watched",
  "New to you",
  "New to you",
  "New to you",
  "New to you",
  "New to you",
];
