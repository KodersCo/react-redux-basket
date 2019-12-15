import {
  basketReducer,
  UPDATE_ITEM,
  REMOVE_ITEM,
  CLEAR_ALL_ITEMS
} from "./store";

describe("store tests", () => {
  const state = {
    101: { id: 101, name: "Mountain Dew", quantity: 2, price: 3.6 },
    102: { id: 102, name: "Desperados", quantity: 6, price: 15.5 },
    103: { id: 103, name: "Jack Daniels", quantity: 4, price: 13.4 }
  };

  describe("updates items", () => {
    test.each([
      [101, 9],
      [102, 13],
      [103, 21]
    ])("updates quantity of item %s as %s", (id, quantity) => {
      const basket = basketReducer(state, {
        type: UPDATE_ITEM,
        payload: { id, quantity }
      });
      const item = basket[id];
      expect(item.id).toEqual(id);
      expect(item.quantity).toEqual(quantity);
    });
  });

  describe("removes items", () => {
    test.each([[101], [102], [103]])(
      "removes item with id %s from basket",
      id => {
        const basket = basketReducer(state, {
          type: REMOVE_ITEM,
          payload: id
        });
        const item = basket[id];
        expect(item).not.toBeDefined();
      }
    );
  });

  describe("clear all items", () => {
    it("sets all item quantities to zero but keeps them in the basket", () => {
      const basket = basketReducer(state, {
        type: CLEAR_ALL_ITEMS
      });
      [(101, 102, 103)].forEach(id => {
        const item = basket[id];
        expect(item).toBeDefined();
        expect(item.quantity).toBe(0);
      });
    });
  });
});
