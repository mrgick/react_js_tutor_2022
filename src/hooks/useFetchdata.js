import { useMemo } from "react";

export const useFetchdata = (operation = "users", user = "") => {
  const urlApi = useMemo(() => setUrlApi(operation, user));

  function setUrlApi(operation, user) {
    const url = "https://jsonplaceholder.typicode.com/";
    switch (operation) {
      case "todo":
        return url + "todos";
      case "users":
        return url + "users";
      default:
        throw new Error();
    }
  }

  return fetch(urlApi).then((res) =>
    res.json().then((res) => {
      return res;
    })
  );
};
