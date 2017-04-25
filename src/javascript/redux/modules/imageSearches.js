const SEARCH_IMAGE = 'imagesearches/SEARCH_IMAGE';
const SEARCH_IMAGE_SUCCESS = 'imagesearches/SEARCH_IMAGE_SUCCESS';
const SEARCH_IMAGE_FAILURE = 'imagesearches/SEARCH_IMAGE_FAILURE';

const initialState = [
  {imageName:"first image name", index :0},
  {imageName:"second image name", index :1}
];


export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
  case SEARCH_IMAGE_SUCCESS:
    debugger;
    return [...payload];

  default:
    return state;
  }
}


export function fetchImages(start = 0, limit = 10) {
  return async (dispatch) => {
    debugger;
    dispatch({
      type: [SEARCH_IMAGE, SEARCH_IMAGE_SUCCESS, SEARCH_IMAGE_FAILURE],
      meta: {
        fetch: [`/post?_start=${start}&_limit=${limit}`, {method: 'get'}]
      }
    });
  };
}
