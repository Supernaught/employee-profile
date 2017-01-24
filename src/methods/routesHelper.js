exports.createDepartmentPath = (location, bool, target) => {
	let tempQuery = location;
	tempQuery = (tempQuery === null || tempQuery === undefined) ? [] : tempQuery.split(' ');

	if(bool) {
		tempQuery.push(target);
	} else{
		const i = tempQuery.indexOf(target);
		tempQuery.splice(i, 1);
	}

	tempQuery = tempQuery.join(' ');

	// return (tempQuery.length <= 0) ? tempQuery : '?department='+tempQuery;
	return tempQuery;
}

exports.replaceQueryElement = (location, key, value) => {
	let tempLocation = Object.assign(location);
	const queries = Object.keys(tempLocation);
	let newQuery = [];

	if(tempLocation[key] === undefined) {
		queries.forEach((query) => {
			newQuery.push(query+"="+tempLocation[query].trim());
		});
		newQuery.push(key+"="+value);
	} else {
		queries.forEach((query) => {
			if(key !== query) {
				newQuery.push(query+"="+tempLocation[query].trim());
			} else {
				newQuery.push(query+"="+value.trim());
			}
		});
	}

	newQuery = '?'+newQuery.join('&');
	return newQuery;
}