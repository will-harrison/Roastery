const CREATE_URL = (path = "") => `http://localhost:9517/api/items/${path}`;

const createItem = item => {
  return fetch(CREATE_URL(), {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .catch(err => err);
};

const getItemById = id => {
  return fetch(CREATE_URL(id), {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .catch(err => err);
};

const getItems = () => {
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
  createItem,
  getItemById,
  getItems
};
