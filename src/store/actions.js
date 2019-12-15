import { UPDATE_ITEM, REMOVE_ITEM, CLEAR_ALL_ITEMS } from "./store";

export const updateItemAction = item => ({
  type: UPDATE_ITEM,
  payload: item
});

export const removeItemAction = id => ({
  type: REMOVE_ITEM,
  payload: id
});

export const clearAllItemsAction = () => ({
  type: CLEAR_ALL_ITEMS
});
