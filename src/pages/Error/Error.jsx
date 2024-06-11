import { useRouteError } from "react-router-dom";

export function Error() {
  const err = useRouteError();
  console.log(err);
  return <h1>Error: {err.data}</h1>;
}
