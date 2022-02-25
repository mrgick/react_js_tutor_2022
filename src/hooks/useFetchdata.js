import { useMemo } from "react";

export const useFetchdata = (operation = "users", user = "Bret") => {
  const urlApi = useMemo(() => setUrlApi(operation, user));

  function setUrlApi(operation, user) {
    const url = "https://mrgick.github.io/react_js_tutor_2022/api_exmaple/";

    switch (operation) {
      case "todo":
        return url + "todos/" + user + ".json";
      case "users":
        return url + "users.json";
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
