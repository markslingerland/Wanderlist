export const GET_CATEGORIES = "Wanderlist/categories/GET_CATEGORIES";
export const GET_CATEGORIES_SUCCESS = "Wanderlist/categories/GET_CATEGORIES_SUCCESS";
export const GET_CATEGORIES_FAIL = "Wanderlist/categories/GET_CATEGORIES_FAIL";
export const GET_CATEGORY_COLOR = "Wanderlist/categories/GET_CATEGORY_COLOR";

export default function categories(state = {categories: []}, action) {
  switch (action.type){
    case GET_CATEGORIES:
      return {...state, loading: true};
    case GET_CATEGORIES_SUCCESS:
      return {...state, loading: false, categories: action.data};
    case GET_CATEGORIES_FAIL:
      return {...state, loading: false, error: action.err };    
    case GET_CATEGORY_COLOR:
      return {...state, color: categories.filter(category => category.name == action.name)[0].color};
    default:
      return state;
  }
}

export function getCategoryColor(name){
  return ({ type: GET_CATEGORY_COLOR, name: name})
}

export function listCategories() {
  response = [
    {'name':'Nature','color':"#91dd77"},
    {'name':'Religious','color':"#ff4500"},
    {'name':'View','color':"#40e0d0"},
    {'name':'Hotel','color':"#800080"},
    {'name':'Entertainment','color':"#ff8da1"},
    {'name':'Relax','color':"#0000cc"},
    {'name':'Food','color':"#8b0000"},
    {'name':'Drinks','color':"#6bbdb7"},
    {'name':'Shopping','color':"#fdfd96"}
  ]
  return ({ type: GET_CATEGORIES_SUCCESS, data: JSON.parse(JSON.stringify(response))
  })
}