const SEARCH_IMAGE = 'imagesearches/SEARCH_IMAGE';

const initialState = [
  {imageName:"first image name", index :0},
  {imageName:"second image name", index :1}
];


export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
  default:
    return state;
  }
}

export function fetchPosts(start = 0, limit = 10) {
  // return async (dispatch) => {
  //   dispatch({
  //     type: [FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE],
  //     meta: {
  //       fetch: [`/post?_start=${start}&_limit=${limit}`, {method: 'get'}]
  //     }
  //   });
  // };
}

