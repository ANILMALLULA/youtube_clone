import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actionTypes";

const initialState = {
  accessToken: sessionStorage.getItem("yt-accessToken")
    ? sessionStorage.getItem("yt-accessToken")
    : null,
  user: sessionStorage.getItem("yt-user")
    ? sessionStorage.getItem("yt-user")
    : null,
  loading: false,
  error: "",
};

export const authReducer = (preState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...preState,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...preState,
        accessToken: payload,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...preState,
        loading: false,
        error: payload,
      };
    case LOAD_PROFILE:
      return {
        ...preState,
        user: payload,
        loading: false,
      };
    case LOG_OUT:
      return {
        ...preState,
        accessToken: null,
        user: null,
        loading: false,
      };
    default:
      return preState;
  }
};
