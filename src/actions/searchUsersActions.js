export function setFilter(filters) {
	return {
		type: "SET_SEARCH_DEPARTMENT",
		payload: filters
	}
}

export function setSearchResult(result) {
	return {
		type: "SET_SEARCH_RESULT",
		payload: new Promise((resolve, reject) => {
			resolve(result);
		})
	}
}

export function fetchFilterResult(list) {
	return {
		type: "FETCH_FILTER_RESULT",
		payload: list
	}
}