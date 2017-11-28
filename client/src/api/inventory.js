const CREATE_URL = (path = "") => `http://localhost:9517/api/inventory/${path}`;

const getAll = () => {
  return fetch(CREATE_URL())
    .then(response => response.json())
    .catch(err => console.log(err));
};

const getAllOrders = () => {
  return fetch(CREATE_URL("orders"))
    .then(response => response.json())
    .catch(err => console.log(err));
};

const getById = id => {
  return fetch(CREATE_URL(id))
    .then(response => response.json())
    .catch(err => console.log(err));
};

const create = data => {
  return fetch(CREATE_URL(), {
    method: "POST",
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};

const update = (id, data) => {
  return fetch(CREATE_URL(`${id}/update`), {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};

export default {
  getAll,
  getById,
  create,
  update,
  getAllOrders
};
