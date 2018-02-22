export default (state = null, action) => {
  console.log('This is SelectionReducer payload=' + action.payload + ' type=' + action.type);
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};
