const CREATE_URL = (path = "") => `http://localhost:9517/api/orders/${path}`;

const createOrder = data => {
  return fetch(CREATE_URL("create"), {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .catch(err => err);
};

const getOrderById = id => {
  return fetch(CREATE_URL(id), {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .catch(err => err);
};

const getOrdersByInventoryType = invTypes => {
  let ordersbyInvType = invTypes.map(inventoryType => {
    return fetch(CREATE_URL(), {
      method: "POST",
      body: JSON.stringify(inventoryType),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .catch(err => err);
  });

  return Promise.all(ordersbyInvType).then(orders => {
    orders = orders.reduce(
      (allOrders, ordersOfType) => [...allOrders, ...ordersOfType],
      []
    );

    return orders;
  });
};

const getOrders = () => {
  return fetch(CREATE_URL(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .catch(err => err);
};

const close = id => {
  return fetch(CREATE_URL(`${id}/close`), {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .catch(err => {
      console.log(err);
    });
};

export default {
  createOrder,
  getOrderById,
  getOrders,
  getOrdersByInventoryType,
  close
};
