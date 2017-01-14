export default(state = [], payload) => {
	switch(payload.type){
		case 'SEARCH_NAMES':
			return [...state, payload.name];
		default:
			return state;
	}
};