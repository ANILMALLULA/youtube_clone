import axios from "axios";

console.log(process.env.REACT_APP_YT_API_KEY);

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyAbTbtsC7Bn10WDC6YXe0krIfFfI-1yzlY",
  },
});

export default request;
