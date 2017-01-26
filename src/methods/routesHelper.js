exports.addQueryElement = (query_element, target) => {
	return query_element.trim() +' '+ target.trim().replace('  ',' ');
}

exports.removeQueryElement = (query_element, target) => {
	return query_element.replace(target, '').replace('  ',' ').trim();
}

exports.replaceQueryElement = (route_query, dictionary) => {
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