export default function reducer(state={
    filter: null,
    result: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "SET_USER_FILTER": {
        return {...state, filter: action.payload}
      }
      case "SET_FILTER_RESULT": {
        return {
          ...state, 
          fetched: false,
          fetching: true
        }
      }
      case "FETCH_FILTER_RESULT_FULFILLED": {
        return {
          ...state, 
          result: action.payload,
          fetched: true,
          fetching: false,
        }
      }
      default: {
        break;
      }
    }

    return state
}