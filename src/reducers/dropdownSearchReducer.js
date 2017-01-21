export default function reducer(state={
    dropdownFilter: null,
    dropdownResult: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "SET_DROPDOWN_FILTER": {
        return {...state, dropdownFilter: action.payload}
      }
      case "SET_DROPDOWN_RESULT": {
        return {
          ...state, 
          fetched: false,
          fetching: true
        }
      }
      case "FETCH_FILTER_RESULT_FULFILLED": {
        return {
          ...state, 
          dropdownResult: action.payload,
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