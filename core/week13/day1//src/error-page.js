import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>ERROR 404</h1>
      <p>Esta página no existe</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
