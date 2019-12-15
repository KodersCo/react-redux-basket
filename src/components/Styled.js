import styled from "styled-components";

export const ClearButton = styled.button`
  &:hover {
    color: #717b81;
  }
  font-size: 18px;
  font-weight: bold;
  border: none;
  color: #7d7b7b;
  margin-top: 10px;
  width: 40px;
  height: 30px;
`;

export const CheckoutButton = styled.button`
  font-size: 18px;
  color: white;
  font-weight: bold;
  background-color: #5b9bd8;
  padding: 6px;
  width: 140px;
  height: 50px;
  margin-bottom: 8px;
`;

export const RemoveButton = styled.button`
  &:hover {
    color: #717b81;
  }
  font-weight: bold;
  font-size: 14px;
  border: none;
  color: #b7bbbf;
  padding-top: 4px;
  width: 30px;
  height: 30px;
`;

export const Warning = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: darkorange;
`;
