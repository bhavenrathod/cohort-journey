import { useEffect, useState } from "react";

export function useFetch(url, retryTimeout) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  console.log(url);

  async function getData() {
    setLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, [url]);

  useEffect(() => {
    setInterval(getData, retryTimeout * 1000);
  }, []);
  return { data, loading };
}
