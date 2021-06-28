import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import { channelDetailsReducer } from "./reducers/channelReducer";
import { commentsListReducer } from "./reducers/commentsReducer";
import {
  homeVideosReducer,
  relatedVideosReducer,
  searchVideosReducer,
  subscriptionsChannelReducer,
} from "./reducers/videosReducer";
import { selectedVideoReducer } from "./reducers/videosReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
  channelDetails: channelDetailsReducer,
  commentList: commentsListReducer,
  relatedVideos: relatedVideosReducer,
  searchVideos: searchVideosReducer,
  subscriptionsChannel: subscriptionsChannelReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
