export default function reducer(state={
    dropdownFilter: null,
    dropdownResult: [],
    fetching: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "SET_DROPDOWN_FILTER": {
        return {...state, dropdownFilter: action.payload}
      }
      case "SET_DROPDOWN_RESULT": { 
        return {
          ...state, 
          fetching: true
        }
      }
      case "FETCH_FILTER_RESULT": {
        return {
          ...state,
          fetching: false,
        }
      }
      case "FETCH_FILTER_RESULT_PENDING": {
        return {
          ...state, 
          fetching: true
        }
        break;
      }
      case "FETCH_FILTER_RESULT_FULFILLED": {
        return {
          ...state, 
          fetching: false,
          dropdownResult: action.payload
        }
        break;
      }
      default: {
        break;
      }
    }

    return state
}