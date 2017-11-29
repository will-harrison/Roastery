import React from 'react';

const OnOrder = ({ orders, invTypes }) => {
  return (
    <div>
      {orders.map(order => (
        <div key={order.id}>
          <div>{order.item.name}</div>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>On Order</th>
              </tr>
            </thead>
            <tbody>
              {invTypes.map(type => {
                if (order.inventory[type].onOrder < 1) {
                  return null
                }
                return (
                  <tr key={type}>
                    <td>{order.inventory[type].type}</td>
                    <td>{order.inventory[type].onHand}</td>
                    <td>{order.inventory[type].onHand * order.inventory[type].minValue} {order.inventory[type].unitOfMeasure}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};





export default OnOrder;