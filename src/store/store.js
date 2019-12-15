import { omit, keys } from "ramda";
import { combineReducers } from "redux";

export const UPDATE_ITEM = "UPDATE_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CLEAR_ALL_ITEMS = "CLEAR_ALL_ITEMS";

export const basketReducer = (basket = {}, action) => {
  switch (action.type) {
    case UPDATE_ITEM:
      const { id, quantity } = action.payload;
      const item = basket[id];
      return item ? { ...basket, [item.id]: { ...item, quantity } } : basket;

    case REMOVE_ITEM:
      const _result = omit([action.payload], basket);
      return _result;

    case CLEAR_ALL_ITEMS:
      return keys(basket).reduce(
        (items, k) => ({
          ...items,
          [k]: { ...basket[k], quantity: 0 }
        }),
        {}
      );

    default:
      return basket;
  }
};

export const reducers = combineReducers({
  basket: basketReducer
});
