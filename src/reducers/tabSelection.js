var initialState = {
  "selectedTab": 0
}
const tabSelection = (state = initialState, action) => {
    switch (action.type) {
      case 'SELECT_TAB':
        return {
            "selectedTab": action.value
        };
      default:
        return state;
    }
  }
  
  export default tabSelection;