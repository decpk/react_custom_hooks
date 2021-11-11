import useFetchPromise from "./useFetchPromise";
import useFetchAsyncAwait from "./useFetchAsyncAwait.js";

export default function UseFetchHooks() {
  const usersFetchPromise = useFetchPromise(
    "https://jsonplaceholder.typicode.com/users",
    []
  );
  const usersAsyncAwait = useFetchAsyncAwait(
    "https://jsonplaceholder.typicode.com/users",
    []
  );
  return (
    <>
      <ul>
        {usersFetchPromise.map((o) => {
          return <li key={o.id}>{o.name}</li>;
        })}
      </ul>
      <h1> ------- </h1>
      <ul>
        {usersAsyncAwait.map((o) => {
          return <li key={o.id}>{o.name}</li>;
        })}
      </ul>
    </>
  );
}
