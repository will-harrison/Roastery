import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import api from '../api';

const closeOrder = (id, itemId, qty, inventoryType, complete) => {
  console.log(id);
  api.order.close(id).then(() => {
    api.inventory.update(itemId, { qty, inventoryType, orderStatus: "onHand" })
    qty = -qty;
    api.inventory.update(itemId, { qty, inventoryType, orderStatus: "onOrder" })
    complete();
  });
};

const Order = ({ orders, complete, orderType }) => {
  return (
    <div>
      {orders.map(order => {
        console.log(order)
        return (
          <Container key={order.id}>
            <Name>{order.item.name}</Name>
            <Qty>{order.orderQty} lbs on order</Qty>
            <SDate>Due {format(order.dueDate, "MM/DD/YY")}</SDate>
            <Button onClick={() => closeOrder(order.id, order.item.id, order.orderQty, order.inventoryType, complete)}>{orderType}</Button>
          </Container>
        )
      })}
    </div>
  );
};

export const Container = styled.div`
margin: 25px 50px;
line-height: 1.5rem;
padding-bottom: 15px;
border-bottom: 1px solid rgba(0,0,0,.1)
`;

export const Name = styled.div`
font-size: 22px;
margin-bottom: 5px;
`;

export const Qty = styled.div`
font-size: 18px;
`;

export const SDate = styled.div``;

export const Button = styled.button`
  padding; 5px 25px;
  background-color: #fff;
  border: 1px solid #888;
  border-radius: 0;
  transition: all .3s;

  &:hover {
    background-color: #888;
    color: #fff;
    font-weight: 100;
  }
`;

export default Order;