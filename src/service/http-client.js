export default {
  get(url) {
    return fetch(url)
      .then((result) => result.json())
      .catch((error) => {
        console.log(error);
      });
  },
  post(url, data) {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => result.json())
      .catch((error) => {
        console.log(error);
      });
  },
  delete(url) {
    return fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .catch((error) => {
        console.log(error);
      });
  },
};
