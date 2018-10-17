export const GET_REPOS = 'Wanderlist/repos/LOAD';
export const GET_REPOS_SUCCESS = 'Wanderlist/repos/LOAD_SUCCESS';
export const GET_REPOS_FAIL = 'Wanderlist/repos/LOAD_FAIL';

export default function reducer(state = { repos: [] }, action) {
  switch (action.type) {
    case GET_REPOS:
      return { ...state, loading: true };
    case GET_REPOS_SUCCESS:
      return { ...state, loading: false, repos: action.data };
    case GET_REPOS_FAIL:
      return { ...state, loading: false, error: action.err };
    default:
      return state;
  }
}

export function listRepos(user) {
  return dispatch => fetch(`http://api.github.com/users/${user}/repos`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },    
  })
  .then((response) => response.json())
  .then(
    data => dispatch({ type: GET_REPOS_SUCCESS, data}),
    err => dispatch({ type: GET_REPOS_FAIL, err})
  )
}