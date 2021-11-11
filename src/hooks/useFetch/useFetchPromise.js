import { useEffect, useState } from "react";

function useFetchPromise(url, initialValue) {
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setData);
  }, [url]);

  return data;
}

export default useFetchPromise;
