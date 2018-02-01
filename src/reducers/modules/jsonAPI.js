import _ from 'lodash';
import {
  POSTS,
  GET_POSTS
} from '../../helpers/manifests';
import {
  put,
  post,
  get,
  del
} from '../../helpers/http';
import {
  updateStore,
  buildGenericInitialState,
  handleError
} from '../../helpers/store';

export let GetPosts = () => async (dispatch) => {
  // console.log('hai hai reducer');
  try {
    const response = get(dispatch, GET_POSTS, `${POSTS}`, true, true);
    // console.log();
    return Promise.resolve(response);
  } catch (err) {
    console.log(err);
    await handleError(dispatch, err, GET_POSTS);
  }
};

// Store
const INITIAL_STATE = {
  ...buildGenericInitialState([GET_POSTS])
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POSTS:
      return updateStore(state, action, {
        data: _.get(action, 'payload')
      });
    default:
      return state;
  }
};
