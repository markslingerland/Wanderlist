export const GET_POINTS = "Wanderlist/points/LOAD";
export const GET_POINTS_SUCCESS = "Wanderlist/points/LOAD_SUCCESS";
export const GET_POINTS_FAIL = "Wanderlist/points/LOAD_FAIL";

export default function points(state = { points: [] }, action) {
  switch (action.type) {
    case GET_POINTS:
      return { ...state, loading: true };
    case GET_POINTS_SUCCESS:
      return { ...state, loading: false, points: action.data };
    case GET_POINTS_FAIL:
      return { ...state, loading: false, error: action.err };
    default:
      return state;
  }
}

export function listPoints() {
  response = [
    {"id": 1, "country":"Japan", "title":"Mount Fuji",   "image":"https://lh4.googleusercontent.com/proxy/AVzBFky7FB_-yWgB_SZzS5a2ZiXdExSGeVO50P_a_NUHXtxEun18WiD18RZMKi0MrDaZ1ZsrDn3cFIeymhq7HmcYIVvF54yleUkUIP_3chYmhbXorGkICw659PCvuS2npQ7Zn0XpEeHggrvl5JiPffyyOs4l9w=w408-h272-k-no", "area":"Shizuoka", "isFavorite": true, "latitude":35.360554,"longitude":138.727783, "UNESCO":false },
    {"id": 2, "country":"Japan", "title":"Meiji Shrine", "image":"http://www.wendemuseum.org/sites/default/files/Noir.jpg", "area":"Berlin", "isFavorite": true, "latitude":30.123456789,  "longitude":60.123456, "UNESCO":true},
    {"id": 3, "country":"Japan", "title":"Meiji Shrine", "image":"http://www.wendemuseum.org/sites/default/files/Noir.jpg", "area":"Berlin", "isFavorite": true, "latitude":35.6763976,  "longitude":139.6993259, "UNESCO":true},
    {"id": 4, "country":"Japan", "title":"Meiji Shrine", "image":"http://www.wendemuseum.org/sites/default/files/Noir.jpg", "area":"Berlin", "isFavorite": true, "latitude":35.6763976,  "longitude":139.6993259, "UNESCO":true},
    {"id": 5, "country":"Japan", "title":"Meiji Shrine", "image":"http://www.wendemuseum.org/sites/default/files/Noir.jpg", "area":"Berlin", "isFavorite": true, "latitude":35.6763976,  "longitude":139.6993259, "UNESCO":true},
    {"id": 6, "country":"Japan", "title":"Meiji Shrine", "image":"http://www.wendemuseum.org/sites/default/files/Noir.jpg", "area":"Berlin", "isFavorite": true, "latitude":35.6763976,  "longitude":139.6993259, "UNESCO":true},
    {"id": 7, "country":"Japan", "title":"Meiji Shrine", "image":"http://www.wendemuseum.org/sites/default/files/Noir.jpg", "area":"Berlin", "isFavorite": true, "latitude":35.6763976,  "longitude":139.6993259, "UNESCO":true},
    {"id": 8, "country":"Japan", "title":"Meiji Shrine", "image":"http://www.wendemuseum.org/sites/default/files/Noir.jpg", "area":"Berlin", "isFavorite": true, "latitude":35.6763976,  "longitude":139.6993259, "UNESCO":true},
    {"id": 9, "country":"Japan", "title":"Meiji Shrine", "image":"http://www.wendemuseum.org/sites/default/files/Noir.jpg", "area":"Berlin", "isFavorite": true, "latitude":35.6763976,  "longitude":139.6993259, "UNESCO":true},
    {"id": 10,"country":"Japan", "title":"Meiji Shrine", "image":"http://www.wendemuseum.org/sites/default/files/Noir.jpg", "area":"Berlin", "isFavorite": true, "latitude":35.6763976,  "longitude":139.6993259, "UNESCO":true},
    {"id": 11,"country":"Japan", "title":"Meiji Shrine", "image":"http://www.wendemuseum.org/sites/default/files/Noir.jpg", "area":"Berlin", "isFavorite": true, "latitude":35.6763976,  "longitude":139.6993259, "UNESCO":true}
    ]
  return ({ type: GET_POINTS_SUCCESS, data : JSON.parse(JSON.stringify(response))
  })
}