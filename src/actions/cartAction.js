export const addToCart = (item) => {
	console.log("Add item ", item);
	return {
		type: 'add',
		item
	};
}