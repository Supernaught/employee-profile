export function setSearch(name) {
	return {
		type: "SET_SEARCH",
		payload: name
	}
}

export function setFilter(filters) {
	return {
		type: "SET_SEARCH_DEPARTMENT",
		payload: filters
	}
}

export function setSearchResult(result) {
	return {
		type: "SET_SEARCH_RESULT",
		payload: result
	}
}

export function fetchFilterResult(list) {
	return {
		type: "FETCH_FILTER_RESULT",
		payload: list
	}
}