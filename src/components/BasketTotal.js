import React from "react";
import styled from "styled-components";
import { CheckoutButton, ClearButton, Warning } from "./Styled";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0 0 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
`;

const GrandTotal = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
`;

const BasketTotal = ({ items = [], clearAllItems }) => {
  const handleCheckout = () => {
    alert("Enjoy your shopping!");
  };
  const grandTotal = items
    .reduce((total, item) => (total += item.quantity * item.price), 0)
    .toFixed(2);
  const itemsExist = items.length > 0;
  return itemsExist ? (
    <Container>
      <GrandTotal>${grandTotal}</GrandTotal>
      <ButtonContainer>
        <ClearButton onClick={clearAllItems}>Clear</ClearButton>
        <CheckoutButton onClick={handleCheckout}>Check Out ></CheckoutButton>
      </ButtonContainer>
    </Container>
  ) : (
    <Warning>There are no items in the basket</Warning>
  );
};

export default BasketTotal;
