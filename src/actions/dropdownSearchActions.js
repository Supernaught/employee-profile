export function setFilter(name) {
	return {
		type: "SET_DROPDOWN_FILTER",
		payload: name
	}
}

export function fetchFilterResult(list) {
	return {
		type: "FETCH_FILTER_RESULT",
		payload: new Promise((resolve, reject) => {
			resolve(list);
		})
	}
}