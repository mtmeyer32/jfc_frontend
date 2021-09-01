import { applyMiddleware, combineReducers } from "@reduxjs/toolkit";
import { createStore } from "redux";
import thunk from "redux-thunk";
import { myLogger } from "../middleware/logger";
import { cartReducer } from "../reducers/cartReducer";
import { inventoryReducer } from "../reducers/inventoryReducer";

let rootReducer = combineReducers({inventory: inventoryReducer, cart: cartReducer});

export const store = createStore(rootReducer, applyMiddleware(myLogger, thunk));