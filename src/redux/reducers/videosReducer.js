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
  SEARCHED_VIDEOS_FAIL,
  SEARCHED_VIDEOS_SUCCESS,
  SEARCHED_VIDEOS_REQUEST,
  SUBSCRIPTION_CHANNEL_REQUEST,
  SUBSCRIPTION_CHANNEL_FAIL,
  SUBSCRIPTION_CHANNEL_SUCCESS,
} from "../actionTypes";

const initialState = {
  videos: [],
  loading: false,
  nextPageToken: null,
  activeCategory: "All",
  error: "",
};

export const homeVideosReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case HOME_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case HOME_VIDEOS_SUCCESS:
      return {
        ...state,
        videos:
          state.activeCategory === payload.category
            ? [...state.videos, ...payload.videos]
            : payload.videos,
        loading: false,
        nextPageToken: payload.nextPageToken,
        activeCategory: payload.category,
      };
    case HOME_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

const initialVideoState = {
  loading: true,
  video: null,
  error: "",
};

export const selectedVideoReducer = (state = initialVideoState, action) => {
  const { payload, type } = action;

  switch (type) {
    case SELECTED_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SELECTED_VIDEO_SUCCESS:
      return {
        ...state,
        video: payload,
        loading: false,
      };
    case SELECTED_VIDEO_FAIL:
      return {
        ...state,

        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

const initialRelatedVideosState = {
  loading: true,
  videos: [],
  error: "",
};

export const relatedVideosReducer = (
  state = initialRelatedVideosState,
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case RELATED_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RELATED_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: payload,
        loading: false,
      };
    case RELATED_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

const searchVideosState = {
  loading: true,
  videos: [],
  error: "",
};

export const searchVideosReducer = (state = searchVideosState, action) => {
  const { payload, type } = action;

  switch (type) {
    case SEARCHED_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCHED_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: payload,
        loading: false,
      };
    case SEARCHED_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

const subscriptionsChannelState = {
  loading: true,
  videos: [],
  error: "",
};

export const subscriptionsChannelReducer = (
  state = subscriptionsChannelState,
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case SUBSCRIPTION_CHANNEL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SUBSCRIPTION_CHANNEL_SUCCESS:
      return {
        ...state,
        videos: payload,
        loading: false,
      };
    case SUBSCRIPTION_CHANNEL_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
