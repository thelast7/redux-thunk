import jsonPlace from '../apis/jsonPlace';

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlace.get('/posts');

  dispatch({
    type: 'FETCH_POSTS',
    payload: response
  })
}
