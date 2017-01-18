export function fetchUser() {
	return {
		type: "FETCH_USER_FULFILLED",
		payload: {
			name: "Will", 
			age: 35
		}
	};
}

export function setFilter(name) {
	return {
		type: "SET_USER_FILTER",
		payload: name
	}
}

export function fetchFilterResult(list) {
	return {
		type: "FETCH_FILTER_RESULT",
		payload: list
	}
}