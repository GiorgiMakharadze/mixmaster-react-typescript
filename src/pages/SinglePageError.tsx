import { useRouteError } from "react-router-dom";
import { IRouteError } from "../types";

const SinglePageError = () => {
  const error = useRouteError() as IRouteError;
  console.log("Error object: ", error);

  // Log the error status
  console.log("Error status: ", error.status);

  console.log(error);

  return <div>{error.message}</div>;
};
export default SinglePageError;
