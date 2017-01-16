export default(state =	[], payload) => {
	switch(payload.type){
		case 'GET_CART':
			return [...state, payload.item];
		default:
			return state;
	}
};

// export default(state={
// 		item:[]
// 	}, payload) => {

// 	switch(payload.type){
// 		case 'GET_CART':
// 			return {...state, item : payload.item};
// 		default:
// 			return state;
// 	}
// };