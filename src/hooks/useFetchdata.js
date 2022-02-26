import { useMemo, useState, useEffect } from "react";

export const useFetchdata = (operation = "users", user = "Bret") => {
  const urlApi = useMemo(() => setUrlApi(operation, user));
  const [data, setData] = useState([]);

  function setUrlApi(operation, user) {
    const url = "https://mrgick.github.io/react_js_tutor_2022/api_exmaple/";

    switch (operation) {
      case "todo":
        return url + "todos/" + user + ".json";
      case "users":
        return url + "users.json";
      default:
        return "";
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
