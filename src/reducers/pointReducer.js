export const GET_POINTS = "Wanderlist/points/LOAD";
export const GET_POINTS_SUCCESS = "Wanderlist/points/LOAD_SUCCESS";
export const GET_POINTS_FAIL = "Wanderlist/points/LOAD_FAIL";
export const TOGGLE_FAVORITE_POINT = "Wanderlist/points/TOGGLE_FAVORITE_POINT";


export default function points(state = { points: [] }, action) {
  switch (action.type) {
    case GET_POINTS:
      return { ...state, loading: true };
    case GET_POINTS_SUCCESS:
      return { ...state, loading: false, points: action.data };
    case GET_POINTS_FAIL:
      return { ...state, loading: false, error: action.err };
    case TOGGLE_FAVORITE_POINT:
      var state = state.points.map(point =>
        (point.id == action.id)
          ? console.log('true')
          : console.log('false')
      )
      return state
    
    default:
      return state;
  }
}

export function toggleFavoritePoint(id) {
  return ({ type: TOGGLE_FAVORITE_POINT, id })
}

export function listPoints() {
  response = [
    {"id": 1, "country":"Japan", "title":"Mount Fuji",   "image":"https://lh4.googleusercontent.com/proxy/AVzBFky7FB_-yWgB_SZzS5a2ZiXdExSGeVO50P_a_NUHXtxEun18WiD18RZMKi0MrDaZ1ZsrDn3cFIeymhq7HmcYIVvF54yleUkUIP_3chYmhbXorGkICw659PCvuS2npQ7Zn0XpEeHggrvl5JiPffyyOs4l9w=w408-h272-k-no", "area":"Shizuoka", "isFavorite": false, "latitude":35.360554,"longitude":138.727783, "UNESCO":false },
    {"id": 2, "country":"Japan", "title":"Meiji Shrine", "image":"http://www.thetraveltester.com/wp-content/uploads/meiji-shrine-tokyo-japan-770x512.jpg", "area":"Tokyo", "isFavorite": true, "latitude":35.6763976,  "longitude":139.6993259, "UNESCO":true},
    {"id": 3, "country":"Japan", "title":"Shirakawa-go Historic Village", "image":"http://www.japanspecialist.nl/wp-content/uploads/sites/19/2015/02/gifu-shirakawago-5.jpg", "area":"Gifu", "isFavorite": true, "latitude":36.257345,  "longitude":136.906832, "UNESCO":true},
    {"id": 4, "country":"Japan", "title":"Kawachi Fuji Garden", "image":"http://cdn.tourismontheedge.com/wp-content/uploads/2013/04/Wisteria-Tunnel-Kawachi-Fuji-Garden-8.jpg", "area":"Fukuoka", "isFavorite": true, "latitude":33.8358109,  "longitude":130.7702355, "UNESCO":true},
    {"id": 6, "country":"Japan", "title":"Hitachi Seaside Park", "image":"http://static.boredpanda.com/blog/wp-content/uploads/2015/06/nemophilas-field-hitachi-seaside-park-fb__700.jpg", "area":"Ibaraki", "isFavorite": true, "latitude":36.4017743,  "longitude":140.5898686, "UNESCO":true},
    {"id": 7, "country":"Japan", "title":"Hachiko Statue", "image":"http://lh3.googleusercontent.com/-YADcqAUCN3g/Va0Ifp7gpPI/AAAAAAABEWM/G9wQLWQt9sc/hachiko-2%25255B6%25255D.jpg?imgmax=800", "area":"Tokyo", "isFavorite": true, "latitude":35.6590537,  "longitude":139.6983691, "UNESCO":true},
    {"id": 8, "country":"Japan", "title":"Zao Fox Village", "image":"http://static.boredpanda.com/blog/wp-content/uploads/2015/02/zao-fox-village-japan-23.jpg", "area":"Miyagi", "isFavorite": true, "latitude":38.0408293,  "longitude":140.5281717, "UNESCO":true},
    {"id": 9, "country":"Japan", "title":"Huis ten Bosch", "image":"https://a2.cdn.japantravel.com/photo/43443-182384/600x400!/nagasaki-huis-ten-bosch-182384.jpg", "area":"Nagasaki", "isFavorite": true, "latitude":33.0863476,  "longitude":129.7850302, "UNESCO":true},
    {"id": 10,"country":"Japan", "title":"Universal Studios", "image":"https://farm5.staticflickr.com/4410/36428859705_65f450c529_b.jpg", "area":"Kansai", "isFavorite": true, "latitude":34.6654464,  "longitude":135.4301495, "UNESCO":true},
    {"id": 11,"country":"Japan", "title":"Maruyama Zoo", "image":"https://ak.jogurucdn.com/media/image/p25/place-2016-02-3-6-Maruyamazoo2b0a6b9a1688c07c647145b1db1d0b09.jpg", "area":"Hokkaido", "isFavorite": true, "latitude":43.0514641,  "longitude":141.3078448, "UNESCO":true}
    ]
  return ({ type: GET_POINTS_SUCCESS, data : JSON.parse(JSON.stringify(response))
  })
}