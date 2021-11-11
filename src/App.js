import useFetchPromise from "./useFetchPromise";
import useFetchAsyncAwait from "./useFetchAsyncAwait";

export default function App() {
  const usersFetchPromise = useFetchPromise(
    "https://jsonplaceholder.typicode.com/users",
    []
  );
  const usersAsyncAwait = useFetchAsyncAwait(
    "https://jsonplaceholder.typicode.com/users",
    []
  );
  console.log(useFetchPromise);
  console.log(usersAsyncAwait);
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
