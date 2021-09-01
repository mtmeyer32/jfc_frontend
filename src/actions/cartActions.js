const _addToCart = (item) => ({
    type: "ADD_CART",
    item,
});

export const addToCart = (item) => {
    return (dispatch) => {
        dispatch(_addToCart(item));
    }
}

const _toggleCart = (tog) => ({
    type: "TOGGLE_CART",
    tog,
})

export const toggleCart = (tog) => {
    return (dispatch) => {
        dispatch(_toggleCart(tog));
    }
}