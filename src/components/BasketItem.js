import React from "react";
import styled from "styled-components";
import { RemoveButton } from "./Styled";

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed darkgrey;
  padding: 16px 0;
  margin-top: 12px;
`;

const Title = styled.div`
  width: 200px;
  padding-top: 6px;
`;

const Total = styled.div`
  text-align: right;
  padding-top: 6px;
  margin-left: auto;
  margin-right: 4px;
  color: darkorange;
  font-weight: bold;
`;

const BasketItem = ({ item, handlers }) => {
  const { id, name, quantity, price } = item;
  const { updateItem, removeItem } = handlers;

  const handleUpdate = event => {
    const quantity = event.target.value;
    updateItem({ id, quantity: Number(quantity) });
  };

  const handleRemove = event => {
    removeItem(id);
  };

  const total = `$${(price * quantity).toFixed(2)}`;

  return (
    <ItemContainer>
      <Title>{name}</Title>
      <input
        alt="item-quantity"
        type="text"
        maxLength="2"
        value={quantity}
        onChange={handleUpdate}
      />
      <Total>{total}</Total>
      <RemoveButton onClick={handleRemove}>X</RemoveButton>
    </ItemContainer>
  );
};

export default BasketItem;
