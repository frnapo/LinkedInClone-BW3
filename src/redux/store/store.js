import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import profileReducer from "../reducers/profileReducer";
import networkReducer from "../reducers/networkReducer";
import friendListReducer from "../reducers/friendListReducer";
import postReducers from "../reducers/postReducer";
import currentUserReducer from "../reducers/currentUserReducer";
import newsReducer from "../reducers/newsReducer";
import experienceReducer from "../reducers/experienceReducer";
import imageReducer from "../reducers/imageReducer";
import jobReducer from "../reducers/jobReducers";
import bookmarksReducer from "../reducers/bookmarksReducer";
import otherUserProfileReducer from "../reducers/otherUserProfileReducer";

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  profile: profileReducer,
  network: networkReducer,
  friendList: friendListReducer,
  post: postReducers,
  news: newsReducer,
  experience: experienceReducer,
  images: imageReducer,
  jobs: jobReducer,
  bookmarks: bookmarksReducer,
  otherUserProfile: otherUserProfileReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
