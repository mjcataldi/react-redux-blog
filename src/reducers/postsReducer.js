export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      action.payload;
      break;
    default:
      return state; 
  }
}; 
