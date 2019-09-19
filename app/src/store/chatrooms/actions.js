export const addChatroom = payload => ({ type: "ADD_CHATROOM", payload });

export const chatroomsIsLoading = bool => {
  return {
    type: "CHATROOMS_IS_LOADING",
    isLoading: bool
  };
};

export const chatroomsFetchDataSuccess = items => ({
  type: "CHATROOMS_FETCH_DATA_SUCCESS",
  items
});

export const getChatrooms = url => async dispatch => {
  dispatch(chatroomsIsLoading(true));

  const response = await fetch(url);
  if (!response.ok) {
    console.error(response.statusText);
  }

  dispatch(chatroomsIsLoading(false));

  const items = await response.json();
  dispatch(addChatroom(items));
};
