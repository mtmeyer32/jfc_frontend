const itemsReducerDefaultState = [];

export const inventoryReducer = (state = itemsReducerDefaultState, action) => {
    console.log("reducer ran");
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                action.item
            ];
        case 'GET_ITEMs':
            return action.items;
        default:
            return state;
    }
};