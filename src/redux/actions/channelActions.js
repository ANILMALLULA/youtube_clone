import {
  CHANNEL_DETAILS_SUCCESS,
  CHANNEL_DETAILS_REQUEST,
  CHANNEL_DETAILS_FAIL,
  SET_SUBSCRIPTION_STATUS,
} from "../actionTypes";
import request from "../../api";

export const getChannelDetailsById = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: CHANNEL_DETAILS_REQUEST,
      });
      const { data } = await request("/channels", {
        params: {
          part: "snippet,statistics,contentDetails",
          id: id,
        },
      });
      dispatch({
        type: CHANNEL_DETAILS_SUCCESS,
        payload: data.items[0],
      });
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: CHANNEL_DETAILS_FAIL,
        payload: error.response.data,
      });
    }
  };
};

export const getSubscriptionStatus = (id) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await request("/subscriptions", {
        params: {
          part: "snippet",
          forChannelId: id,
          mine: true,
        },
        headers: {
          Authorization: `Bearer ${getState().auth.accessToken}`,
        },
      });
      console.log(data.items.length !== 0);
      dispatch({
        type: SET_SUBSCRIPTION_STATUS,
        payload: data.items.length !== 0,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };
};
