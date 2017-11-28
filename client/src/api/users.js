const CREATE_URL = (path = "") => `http://localhost:9517/api/users/${path}`;

const login = credentials => {
  return fetch(CREATE_URL("login"), {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .catch(err => err);
};

const signup = credentials => {
  return fetch(CREATE_URL(), {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json"
      // Authorization: localStorage.getItem("token")
    }
  })
    .then(response => response.json())
    .catch(error => error);
};

export default {
  login,
  signup
};
