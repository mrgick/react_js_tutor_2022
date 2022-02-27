import { useState, useEffect } from "react";

export const useFetchdata = (operation = "users") => {
  const urlApi = setUrlApi(operation);
  const [data, setData] = useState([]);

  function setUrlApi(operation) {
    const url = "https://jsonplaceholder.typicode.com/";

    switch (operation) {
      case "todo":
        return url + "todos";
      case "users":
        return url + "users";
      default:
        return null;
    }
  }

  useEffect(() => {
    if (!urlApi) return;
    const fetchData = async () => {
      const response = await fetch(urlApi);
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, [urlApi]);

  return data;
};
