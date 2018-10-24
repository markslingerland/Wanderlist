export const GET_POINTS = 'Wanderlist/POINTS/LOAD';
export const GET_POINTS_SUCCESS = 'Wanderlist/POINTS/LOAD_SUCCESS';
export const GET_POINTS_FAIL = 'Wanderlist/POINTS/LOAD_FAIL';

export default function points(state = { points: [] }, action) {
  switch (action.type) {
    case GET_POINTS:
      return { ...state, loading: true };
    case GET_POINTS_SUCCESS:
      console.log(action.name)
      return { ...state, loading: false, points: action.data };
    case GET_POINTS_FAIL:
      return { ...state, loading: false, error: action.err };
    default:
      return state;
  }
}

export function listPoints() {
  return { type: GET_POINTS_SUCCESS, data: { name : "point1" }  }
}