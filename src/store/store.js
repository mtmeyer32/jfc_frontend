import { applyMiddleware, combineReducers } from "@reduxjs/toolkit";
import { createStore } from "redux";
import thunk from "redux-thunk";
import { myLogger } from "../middleware/logger";
import { cartReducer } from "../reducers/cartReducer";
import { inventoryReducer } from "../reducers/inventoryReducer";
import { save, load } from "redux-localstorage-simple";

let rootReducer = combineReducers({inventory: inventoryReducer, cart: cartReducer});

const createStoreWithMiddleware = applyMiddleware(myLogger, thunk, save())(createStore);

export const store = createStoreWithMiddleware(rootReducer, load());