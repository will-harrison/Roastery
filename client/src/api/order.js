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

const getOrdersByInventoryType = (filters) => {
  return fetch(CREATE_URL(), {
    method: "POST",
    body: JSON.stringify(filters),
    headers: { "Content-Type": "application/json" }
  })
    .then(response => response.json())
    .catch(err => err)
}

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

export default {
  createOrder,
  getOrderById,
  getOrders,
  getOrdersByInventoryType
};
