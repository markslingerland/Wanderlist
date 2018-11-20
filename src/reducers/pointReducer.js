export const GET_POINTS = "Wanderlist/points/LOAD";
export const GET_POINTS_SUCCESS = "Wanderlist/points/LOAD_SUCCESS";
export const GET_POINTS_FAIL = "Wanderlist/points/LOAD_FAIL";
export const TOGGLE_FAVORITE_POINT = "Wanderlist/points/TOGGLE_FAVORITE_POINT";
export const SELECT_POINT = "Wanderlist/points/SELECT_POINT";
export const SET_VISIBILITY_FILTER = "Wanderlist/points/SET_VISIBILITY_FILTER";
export const ADD_TAG_TO_POINT = "Wanderlist/points/ADD_TO_TAGS_POINT";




export default function points(state = {filter: [], points: [] }, action) {
  switch (action.type) {
    case GET_POINTS:
      return { ...state, loading: true };
    case GET_POINTS_SUCCESS:
      return { ...state, loading: false, points: action.data };
    case GET_POINTS_FAIL:
      return { ...state, loading: false, error: action.err };
    case SELECT_POINT:
      return { ...state, selectedPoint: action.point };
    case SET_VISIBILITY_FILTER:
      return { ...state, filter: action.filter };
    case ADD_TAG_TO_POINT:
      return {...state, points: state.points.map(point =>
        (point.id == action.id) ?
            (point.tags.indexOf(action.tag) == -1) ?
              {...point, tags: point.tags.concat(action.tag)}
            :
              //Find a way to return an error because item is already in tag list
              point
          : 
            point
      ) }
    case TOGGLE_FAVORITE_POINT:
      return {...state, points: state.points.map(point =>
        (point.id == action.id)
          ? {...point, isFavorite: !point.isFavorite}
          : point
      ) } 
    default:
      return state;
  }
}

export function toggleFavoritePoint(id) {
  return ({ type: TOGGLE_FAVORITE_POINT, id: id })
}

export function selectPoint(point) {
  return ({ type: SELECT_POINT, point: point })
}

export function setVisibilityFilter(filter){ 
  return ({ type: SET_VISIBILITY_FILTER, filter: filter })
}

export function addTagToPoint(id, tag){
  return ({ type: ADD_TAG_TO_POINT, id: id, tag: tag })
}

export function listPoints() {
  response = [
    {"id": 1, "country":"Japan", "title":"Mount Fuji",   "image":"https://lh4.googleusercontent.com/proxy/AVzBFky7FB_-yWgB_SZzS5a2ZiXdExSGeVO50P_a_NUHXtxEun18WiD18RZMKi0MrDaZ1ZsrDn3cFIeymhq7HmcYIVvF54yleUkUIP_3chYmhbXorGkICw659PCvuS2npQ7Zn0XpEeHggrvl5JiPffyyOs4l9w=w408-h272-k-no", "area":"Shizuoka", "isFavorite": false, "latitude":35.360554,"longitude":138.727783, "UNESCO":true, "tags":["Mountain","Art","Volcano"], "category":"Nature","description":"Mount Fuji is the highest mountain in Japan at 3,776.24 m 2nd-highest peak of an island (volcanic) in Asia, and 7th-highest peak of an island in the world. It is a dormant stratovolcano that last erupted in 1707–1708. Mount Fuji lies about 100 kilometers south-west of Tokyo, and can be seen from there on a clear day. Mount Fuji's exceptionally symmetrical cone, which is snow-capped for about 5 months a year, is a well-known symbol of Japan and it is frequently depicted in art and photographs, as well as visited by sightseers and climbers." },
    {"id": 2, "country":"Japan", "title":"Meiji Shrine", "image":"http://www.thetraveltester.com/wp-content/uploads/meiji-shrine-tokyo-japan-770x512.jpg", "area":"Tokyo", "isFavorite": false, "latitude":35.6763976,  "longitude":139.6993259, "UNESCO":false, "tags":["Temple","History"], "category":"Religious","description":"Meiji Shrine, is the Shinto shrine that is dedicated to the deified spirits of Emperor Meiji and his wife, Empress Shōken. The shrine does not contain the emperor's grave, which is located at Fushimi-momoyama, south of Kyoto."},
    {"id": 3, "country":"Japan", "title":"Shirakawa-go Historic Village", "image":"http://www.japanspecialist.nl/wp-content/uploads/sites/19/2015/02/gifu-shirakawago-5.jpg", "area":"Gifu", "isFavorite": false, "latitude":36.257345,  "longitude":136.906832, "UNESCO":true, "tags":["Village","History"], "category":"View","description":"The Historic Villages of Shirakawa-gō and Gokayama are one of Japan's UNESCO World Heritage Sites. The cultural property consists of three historic mountain villages over an area of 68 hectares in the remote Shogawa river valley, stretching across the border of Gifu and Toyama Prefectures in central Japan. Shirakawa-gō is located in the village of Shirakawa in Gifu Prefecture. The Gokayama area is divided between the former villages of Kamitaira and Taira in Nanto, Toyama Prefecture. The valley is in a mountain region with considerable snowfall, and these villages are well known for their clusters of farmhouses, constructed in the architectural style known as gasshō-zukuri, which are designed to easily shed snow from their roofs."},
    {"id": 4, "country":"Japan", "title":"Kawachi Fuji Garden", "image":"http://cdn.tourismontheedge.com/wp-content/uploads/2013/04/Wisteria-Tunnel-Kawachi-Fuji-Garden-8.jpg", "area":"Fukuoka", "isFavorite": false, "latitude":33.8358109,  "longitude":130.7702355, "UNESCO":false, "tags":["Garden",], "category":"Nature","description":"Kawachi Wisteria Garden is a private garden in the wooded hills south of central Kitakyushu, famous for its spectacularly presented, large numbers of wisteria flowers. The garden is opened to the public seasonally during the wisteria season which usually peaks around late April to mid-May and during the maple leaf season in autumn. The garden's most prominent features are two, roughly 100 meter long tunnels made of wisteria trees of differing varieties and colours, ranging from white to dark purple. Furthermore, there is a collection of large wisteria trees that together form an enormous roof of drooping flowers. A viewpoint at the top of the hillside garden allows for nice views over the sea of wisteria flowers and the surrounding valley which is also known for its bamboo groves."},
    {"id": 6, "country":"Japan", "title":"Hitachi Seaside Park", "image":"http://static.boredpanda.com/blog/wp-content/uploads/2015/06/nemophilas-field-hitachi-seaside-park-fb__700.jpg", "area":"Ibaraki", "isFavorite": false, "latitude":36.4017743,  "longitude":140.5898686, "UNESCO":false, "tags":["Park","Flowers"], "category":"View","description":'Covering an area of 190 hectares, the park features blooming flowers around the year. The park has become known for its baby blue-eyes flowers, with the blooming of 4.5 million of the translucent-petaled blue flowers in the spring drawing tourists. In addition to the annual "Nemophila Harmony", the park features a million daffodils, 170 varieties of tulips, and many other flowers. The park includes cycling trails and a small amusement park with a Ferris wheel.'},
    {"id": 7, "country":"Japan", "title":"Hachiko Statue", "image":"http://lh3.googleusercontent.com/-YADcqAUCN3g/Va0Ifp7gpPI/AAAAAAABEWM/G9wQLWQt9sc/hachiko-2%25255B6%25255D.jpg?imgmax=800", "area":"Tokyo", "isFavorite": false, "latitude":35.6590537,  "longitude":139.6983691, "UNESCO":false, "tags":["Statue","Dog","History"], "category":"Entertainment","description":'Hachikō (November 10, 1923 – March 8, 1935) was an Akita dog born on a farm near the city of Ōdate, Akita Prefecture, Japan. He is remembered for his remarkable loyalty to his owner, Hidesaburō Ueno, for whom he continued to wait for over nine years following his death. Hachikō is known in Japanese as chūken Hachikō, "faithful dog Hachikō". Hachi meaning "eight" and the suffix -kō indicating affection. During his lifetime, the dog was held up in Japanese culture as an example of loyalty and fidelity. Well after his death, he continues to be remembered in worldwide popular culture, with statues, movies, books, and appearances in various media'},
    {"id": 8, "country":"Japan", "title":"Zao Fox Village", "image":"http://static.boredpanda.com/blog/wp-content/uploads/2015/02/zao-fox-village-japan-23.jpg", "area":"Miyagi", "isFavorite": false, "latitude":38.0408293,  "longitude":140.5281717, "UNESCO":false,"tags":["Fox","Animal","Unique"], "category":"Entertainment","description":"Located in the mountains near Shiroishi, there is a ‘village’ that is filled with over 100 animals and 6 different types of foxes. This ‘Fox Village’ is one of the best places in Japan to go and see foxes. The foxes freely roam a preserve which visitors can enter. Foxes are popular creatures in Japanese folktales and lore, and many of us may be interested in the history and culture behind these foxes. However, the main reason to visit Fox Village is that they are just so darn cute."},
    {"id": 9, "country":"Japan", "title":"Huis ten Bosch", "image":"https://a2.cdn.japantravel.com/photo/43443-182384/600x400!/nagasaki-huis-ten-bosch-182384.jpg", "area":"Nagasaki", "isFavorite": false, "latitude":33.0863476,  "longitude":129.7850302, "UNESCO":false, "tags":["History","Culture"], "category":"View","description":'Huis Ten Bosch is a theme park in Sasebo, Nagasaki, Japan, which recreates the Netherlands by displaying life-sized copies of old Dutch buildings. The name Huis Ten Bosch translates into English as "House in the Woods/bush". It is named after Huis ten Bosch in The Hague, one of the three official residences of the Dutch Royal Family.'},
    {"id": 10,"country":"Japan", "title":"Universal Studios", "image":"https://farm5.staticflickr.com/4410/36428859705_65f450c529_b.jpg", "area":"Kansai", "isFavorite": false, "latitude":34.6654464,  "longitude":135.4301495, "UNESCO":false, "tags":["Park","Wonder"], "category":"Entertainment","description":"Universal Studios Japan, located in Osaka, is one of four Universal Studios theme parks owned and operated by USJ Co., Ltd., which is wholly owned by NBCUniversal (as of 2017). The park is similar to the Universal Orlando Resort since it also contains selected attractions from Universal Orlando Resort and Universal Studios Hollywood. The park opened on 31 March 2001. Over 11 million guests visited the park in its opening year, making it the world's fastest amusement park to have achieved the 10 million milestone at the time. Since then, Universal Studios Japan has had approximately 8 million visitors every year. Most visitors are Japanese tourists and tourists from other Asian countries such as South Korea. It is also very popular among Western tourists and expatriates."},
    {"id": 11,"country":"Japan", "title":"Maruyama Zoo", "image":"https://ak.jogurucdn.com/media/image/p25/place-2016-02-3-6-Maruyamazoo2b0a6b9a1688c07c647145b1db1d0b09.jpg", "area":"Hokkaido", "isFavorite": false, "latitude":43.0514641,  "longitude":141.3078448, "UNESCO":false, "tags":["Zoo","Animals","Park"], "category":"Entertainment","description":"Sapporo Maruyama Zoo covers an area of 22.5 hectare, and is home to 168 different species and 737 animals. There is also a chimpanzee pavilion with a 15 m high jungle gym, a bear house with six species of bears inside. Other attractions include the Monkey Mountain, a petting zoo with sheep and goats, the Prey Hall, Kangaroo Hall, Deer Hall, Hokkaido Brown bear Museum, Mammal Hall, Hawk and Owl Forest, Reptile Hall, Orangutan House, Waterfowl Hall, Tropical Bird House, Animal Science Museum, and Tropical Animal House."}
    ]
  return ({ type: GET_POINTS_SUCCESS, data : JSON.parse(JSON.stringify(response))
  })
}