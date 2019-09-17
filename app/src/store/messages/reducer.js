const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "add_message":
      return [...state, action.payload];
    case "MESSAGES_IS_LOADING":
      return action.isLoading;
    case "MESSAGES_FETCH_DATA_SUCCESS":
      return action.items;
    default:
      return state;
  }
}

export function addItems(state = [], action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return [...state, action.payload];
    default:
      return state;
  }
}

export function itemsIsLoading(state = false, action) {
  switch (action.type) {
    case "MESSAGES_IS_LOADING":
      return action.isLoading;

    default:
      return state;
  }
}

export function items(state = [], action) {
  switch (action.type) {
    case "MESSAGES_FETCH_DATA_SUCCESS":
      return action.items;

    default:
      return state;
  }
}
