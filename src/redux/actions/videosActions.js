import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  RELATED_VIDEOS_FAIL,
  RELATED_VIDEOS_REQUEST,
  RELATED_VIDEOS_SUCCESS,
  SELECTED_VIDEO_FAIL,
  SELECTED_VIDEO_REQUEST,
  SELECTED_VIDEO_SUCCESS,
  SEARCHED_VIDEOS_REQUEST
  ,
  SEARCHED_VIDEOS_SUCCESS
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

export const getVideosById = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SELECTED_VIDEO_REQUEST,
      });
      const { data } = await request("/videos", {
        params: {
          part: "snippet,statistics",
          id: id,
        },
      });
      dispatch({
        type: SELECTED_VIDEO_SUCCESS,
        payload: data.items[0],
      });
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: SELECTED_VIDEO_FAIL,
        payload: error.message,
      });
    }
  };
};

export const getRelatedVideos = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: RELATED_VIDEOS_REQUEST,
      });
      const { data } = await request("/search", {
        params: {
          part: "snippet",
          relatedToVideoId: id,
          maxResults: 15,
          type: "video",
        },
      });
      dispatch({
        type: RELATED_VIDEOS_SUCCESS,
        payload: data.items,
      });
    } catch (error) {
      console.log(error.response.data.message);
      dispatch({
        type: RELATED_VIDEOS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
};


export const getVideosbySearchInput = (keyword) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SEARCHED_VIDEOS_REQUEST,
      });

      const { data } = await request.get("/search", {
        params: {
          part: "snippet",
          maxResults: 20,
          q: keyword,
          type: "video,channel"
        },
      });

      dispatch({
        type: SEARCHED_VIDEOS_SUCCESS,
        payload: data.items,
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
