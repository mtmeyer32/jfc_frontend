const cartDefaultState = { items: [], cartOpen: false };

export const cartReducer = (state = cartDefaultState, action) => {
  switch (action.type) {
    case "ADD_CART":
      console.log(state);
      const item = state.items.find((item) => item.id === action.item.id);

      if (item) {
        console.log("item in cart already");
        state.items.map((item) =>
          item.id === action.item.id
            ? {
                ...item,
                qty: item.qty++,
              }
            : item
        );
        return state;
      } else {
        action.item.qty = 1;
        return {
          ...state,
          items: [...state.items, action.item],
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
