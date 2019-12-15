import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Basket } from "./Basket";

describe("Basket screen", () => {
  test("renders no items text when store is empty", () => {
    const { getByText } = render(<Basket />);
    const linkElement = getByText(/There are no items in the basket/i);
    expect(linkElement).toBeInTheDocument();
  });

  describe("renders all items properly", () => {
    const basket = {
      101: { id: 101, name: "Mountain Dew", quantity: 2, price: 3.6 },
      102: { id: 102, name: "Desperados", quantity: 6, price: 2.4 },
      103: { id: 103, name: "Jack Daniels", quantity: 4, price: 7.5 }
    };

    test.each([
      ["Mountain Dew", 2, 3.6],
      ["Desperados", 6, 2.4],
      ["Jack Daniels", 4, 7.5]
    ])("renders %s and (%s*%s) as total", (name, quantity, price) => {
      const { getByText } = render(<Basket basket={basket} />);
      const total = (quantity * price).toFixed(2);
      expect(getByText(name)).toBeInTheDocument();
      expect(getByText(`$${total}`)).toBeInTheDocument();
    });
  });

  it("quantity updates are propogated", () => {
    const basket = {
      101: { id: 101, name: "Mountain Dew", quantity: 2, price: 3.6 }
    };
    const updateItem = jest.fn();
    const { getByAltText } = render(
      <Basket basket={basket} updateItem={updateItem} />
    );
    const quantity = getByAltText("item-quantity");
    fireEvent.change(quantity, { target: { value: 10 } });

    expect(updateItem).toBeCalledWith({ id: 101, quantity: 10 });
  });
});
