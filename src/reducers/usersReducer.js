export default (state = [], action) => {
    switch (action.type) {
      case 'FETCH_USERS':
        action.payload;
        break;
      default:
        return state; 
    }
  }; 
  