import { useEffect, useState } from "react";

function useFetchPromise(url, initialValue) {
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    (async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    })();
  }, [url]);

  return data;
}

export default useFetchPromise;
