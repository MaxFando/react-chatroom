import uuid from "uuid";

const initialState = [{ id: uuid.v4(), name: "Chatroom 1" }];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "add_chatroom":
      return [...state, action.payload];
    default:
      return state;
  }
}
