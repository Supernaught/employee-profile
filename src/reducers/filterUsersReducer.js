export default function reducer(state={
    filter: null,
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_USER": {
        return {...state, fetching: true}
      }
      case "FETCH_USER_REJECTED": {
        return {
          ...state, 
          fetching: false, 
          error: action.payload}
      }
      case "FETCH_USER_FULFILLED": {
        return {
          ...state,
          filter: action.payload,
          fetching: false,
          fetched: true,
        }
      }
      case "SET_USER_FILTER": {
        return {...state, filter: action.payload}
      }
      default: {
        break;
      }
    }

    return state
}