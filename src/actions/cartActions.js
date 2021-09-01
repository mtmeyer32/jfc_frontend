const _addToCart = (item) => ({
    type: "ADD_CART",
    item,
});

export const addToCart = (item) => {
    return (dispatch) => {
        dispatch(_addToCart(item));
    }
}