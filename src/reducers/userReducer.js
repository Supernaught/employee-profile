export default function reducer(state={
  user: {
    id: 1,
    profilePicture: "http://i.imgur.com/4clqUdj.jpg",
    name: "Davy Jones Bolivar",
    role: "developer",
    email: "davy.bolivar@gmail.com",
    contact: "09177700058",
    age: 24,
    birthday: "October 21, 1992",
    startWork: "July 2, 2012",
    location: "Cebu City, Philippines",
  },
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case "FETCH_USER": {
      return {...state, fetching: true}
    }
    case "FETCH_USER_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_USER_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload,
      }
    }
    case "SET_USER_NAME": {
      return {
        ...state,
        user: {...state.user, name: action.payload},
      }
    }
    case "SET_USER_AGE": {
      return {
        ...state,
        user: {...state.user, age: action.payload},
      }
    }
    case "SET_USER_BIRTHDAY": {
      return {
        ...state,
        user: {...state.user, birthday: action.payload},
      }
    }
    case "SET_USER_START_WORK": {
      return {
        ...state,
        user: {...state.user, startWork: action.payload},
      }
    }
    case "SET_USER_LOCATION": {
      return {
        ...state,
        user: {...state.user, location: action.payload},
      }
    }
    default: {
      break;
    }
  }

  return state
}