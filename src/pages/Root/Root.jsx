import { Outlet } from "react-router-dom";

export function Root() {
  return (
    <>
      <h1>This is the root page</h1>
      <Outlet />
    </>
  );
}
