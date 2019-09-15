const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "add_message":
      state.push(action.payload);
      console.log("state", state);
      return state;
    default:
      return state;
  }
}
