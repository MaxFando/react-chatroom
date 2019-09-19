const initialState = { messages: [], isLoading: false };

const actionByTypes = {
  ADD_MESSAGE: (state, payload) => ({
    ...state,
    messages: [...state.messages, payload]
  }),
  MESSAGES_IS_LOADING: (state, isLoading) => ({ ...state, isLoading })
};

export default function messagesReducer(state = initialState, action) {
  if (actionByTypes[action.type]) {
    return actionByTypes[action.type](state, action.payload);
  }

  return state;
}
