const cartDefaultState = { items: [], cartOpen: false };

export const cartReducer = (state = cartDefaultState, action) => {
  switch (action.type) {
    case "ADD_CART":
      if (action.item.id in state.items) {
        return {
          ...state,
          items: {
            ...state.items,
            [action.item.id]: {
              ...state.items[action.item.id],
              cartQty: state.items[action.item.id].cartQty + 1,
            },
          },
        };
      } else {
        action.item["cartQty"] = 1;
        return {
          ...state,
          items: {
            ...state.items,
            [action.item.id]: action.item,
          },
        };
      }
    case "TOGGLE_CART":
      return {
        ...state,
        cartOpen: action.tog,
      };
    default:
      return state;
  }
};
