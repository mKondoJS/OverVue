
export default function mutate(state, action) {
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
      console.log('in mutate name changed', action.payload, 'state in mutate:', state);
      state.name = action.payload;
      console.log('after mutated state', state);
      return state;
  }
}