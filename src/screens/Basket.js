import React from "react";
import styled from "styled-components";
import BasketItem from "../components/BasketItem";
import {
  removeItemAction,
  updateItemAction,
  clearAllItemsAction
} from "../store/actions";
import { connect } from "react-redux";
import { values } from "ramda";
import BasketTotal from "../components/BasketTotal";

const Container = styled.div`
  font-family: Verdana, Verdana, Geneva, sans-serif;
  display: flex;
  max-width: 500px;
  flex-direction: column;
  padding: 30px;
  margin: 250px auto;
  border: 1px solid darkgrey;
`;

export const Basket = ({ basket, removeItem, updateItem, clearAllItems }) => {
  const items = values(basket);
  return (
    <Container>
      {items &&
        items.map(item => (
          <BasketItem
            key={item.id}
            item={item}
            handlers={{ removeItem, updateItem }}
          />
        ))}
      <BasketTotal items={items} clearAllItems={clearAllItems} />
    </Container>
  );
};

const mapStateToProps = state => ({
  basket: state.basket
});

const mapDispatchToProps = {
  removeItem: removeItemAction,
  updateItem: updateItemAction,
  clearAllItems: clearAllItemsAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
