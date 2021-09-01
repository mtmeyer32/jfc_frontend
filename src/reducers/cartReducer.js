const cartDefaultState = [];

export const cartReducer = (state = cartDefaultState, action) => {
    console.log("cartReducer ran");
    switch (action.type) {
        case 'ADD_CART':
            return [
                ...state,
                action.item
            ];
        default:
            return state;
    }
};