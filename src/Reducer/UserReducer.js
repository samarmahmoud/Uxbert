import {
  DATALOADED_FAIL,
  DATALOADED_SUCCESS,
  DATALOADING
} from "../Action/types";
const INITIAL_STATE = {
  AllPosts: [],
  loading: true,
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATALOADING: {
      return { ...state, loading: true };
    }
    case DATALOADED_SUCCESS: {
      return { ...state, AllPosts: action.payload,loading:false };
    }
    case DATALOADED_FAIL: {
      return { ...state, error: action.payload ,loading:false};
    }
    default: {
      return state;
    }
  }
};
