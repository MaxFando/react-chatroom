const initialState = {
  id: undefined,
  name: ""
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "create_user":
      return (state = action.payload);
    default:
      return state;
  }
}
