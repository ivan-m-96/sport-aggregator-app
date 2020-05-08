const teamReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TEAM": {
      console.log("payload");
      console.log(action.payload);
      return action.payload;
    }
  }

  return state;
};
export default teamReducer;
