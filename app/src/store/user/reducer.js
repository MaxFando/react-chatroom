const initialState = {
  id: undefined,
  name: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "create_user":
      return (state = action.payload);
    default:
      return state;
  }
}
