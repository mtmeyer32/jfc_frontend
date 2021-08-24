import { applyMiddleware } from "@reduxjs/toolkit";
import { createStore } from "redux";
import thunk from "redux-thunk";
import { myLogger } from "../middleware/logger";
import { inventoryReducer } from "../reducers/inventoryReducer";

export const store = createStore(inventoryReducer, applyMiddleware(myLogger, thunk));