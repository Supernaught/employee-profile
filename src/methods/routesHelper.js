
// Add the target into the query. Returns a STRING query
exports.addQueryElement = (query_element, target) => {
	return query_element.trim() +' '+ target.trim().replace('  ',' ');
}

// Remove the target into the query. Returns a STRING query
exports.removeQueryElement = (query_element, target) => {
	return query_element.replace(target, '').replace('  ',' ').trim();
}

// Gets all the params and update the route_query with the new query which is the dictionary
exports.updateQueryElement = (route_query, dictionary) => {
	var newQuery = Object.assign(route_query, dictionary);
	let newPath = [];

	Object.keys(newQuery).forEach((key) => {
		if(newQuery[key].trim().length > 0){
			newPath.push(key+'='+newQuery[key].trim());
		}
	});

	newPath = (newPath.length <= 0) ? '' : '?'+newPath.join('&');
	return newPath;
}