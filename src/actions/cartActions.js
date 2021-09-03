const _addToCart = (item) => ({
    type: "ADD_CART",
    item,
});

const _toggleCart = (tog) => ({
    type: "TOGGLE_CART",
    tog,
});

const _updateQty = (itemID, qty) => ({
    type: "UPDATE_QTY",
    itemID,
    qty,
});

export const addToCart = (item) => {
    return (dispatch) => {
        dispatch(_addToCart(item));
    }
}

export const toggleCart = (tog) => {
    return (dispatch) => {
        dispatch(_toggleCart(tog));
    }
}

export const updateQty = (itemID, qty) => {
    return (dispatch) => {
        dispatch(_updateQty(itemID, qty));
    }
}