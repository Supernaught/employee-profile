export default(state = [], payload) => {
	switch(payload.type){
		case 'GET_USER':
			return [...state, payload.id];
		default:
			return state;
	}
};