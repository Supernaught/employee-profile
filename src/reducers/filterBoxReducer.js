export default function reducer(state={
    query: {}
  }, action) {

    switch (action.type) {
      case "SET_QUERY": {
        return {...state, query: action.payload}
      }
      default: {
        break;
      }
    }

    return state
}