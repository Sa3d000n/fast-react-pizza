import { useNavigate, useRouteError } from "react-router";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();

  const navigate = useNavigate();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>Error: {error.message || error.error.message}</p>

      <LinkButton to={-1}>&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
