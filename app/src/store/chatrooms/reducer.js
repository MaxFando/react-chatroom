const initialState = { chatrooms: [], isLoading: false };

const actionByTypes = {
  ADD_CHATROOM: (state, payload) => ({
    ...state,
    chatrooms: [...state.chatrooms, payload]
  }),
  CHATROOMS_IS_LOADING: (state, isLoading) => ({ ...state, isLoading })
};

export default function chatroomsReducer(state = initialState, action) {
  if (actionByTypes[action.type]) {
    return actionByTypes[action.type](state, action.payload);
  }

  return state;
}
