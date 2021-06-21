import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
} from "../actionTypes";
import request from "../../api";

export const getPopularVideos = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: HOME_VIDEOS_REQUEST,
      });

      const { data } = await request.get("/videos", {
        params: {
          part: "snippet,contentDetails,statistics",
          chart: "mostPopular",
          regionCode: "IN",
          maxResults: 20,
          pageToken: getState().homeVideos.nextPageToken,
        },
      });

      dispatch({
        type: HOME_VIDEOS_SUCCESS,
        payload: {
          videos: data.items,
          nextPageToken: data.nextPageToken,
        },
      });
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: HOME_VIDEOS_FAIL,
        payload: error.message,
      });
    }
  };
};

//categories bar
export const getVideosbyCategories = (keyword) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: HOME_VIDEOS_REQUEST,
      });

      const { data } = await request.get("/search", {
        params: {
          part: "snippet",
          maxResults: 24,
          pageToken: getState().homeVideos.nextPageToken,
          q: keyword,
          type: "video",
        },
      });

      dispatch({
        type: HOME_VIDEOS_SUCCESS,
        payload: {
          videos: data.items,
          nextPageToken: data.nextPageToken,
          category: keyword,
        },
      });
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: HOME_VIDEOS_FAIL,
        payload: error.message,
      });
    }
  };
};
