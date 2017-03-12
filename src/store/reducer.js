
export default function reducer(state, action) {
  switch (action.type) {
    // case 'GITHUB_FOLLOWERS_LOADING':
    //   return {
    //     ...state,
    //     isLoading: true
    //   };
    // case 'GITHUB_FOLLOWERS_LOADED':
    //   return {
    //     ...state,
    //     isLoading: false,
    //     users: action.payload,
    //   };
    case 'NAME_CHANGED':
      console.log('in reducer name changed', action.payload, 'state in reducer:', state);
      state.name = action.payload;
      console.log('after reducer state', state);
      return state;
  }
}