export const addMessage = payload => dispatch =>
  dispatch({ type: "ADD_MESSAGE", payload });

export const messagesIsLoading = bool => {
  return {
    type: "MESSAGES_IS_LOADING",
    isLoading: bool
  };
};

export const messagesFetchDataSuccess = items => ({
  type: "MESSAGES_FETCH_DATA_SUCCESS",
  items
});

export const messagesFetchData = url => async dispatch => {
  dispatch(messagesIsLoading(true));

  const response = await fetch(url);
  if (!response.ok) {
    console.error(response.statusText);
  }

  dispatch(messagesIsLoading(false));

  const items = await response.json();
  console.log("items", items);
  dispatch(messagesFetchDataSuccess(items));
};
