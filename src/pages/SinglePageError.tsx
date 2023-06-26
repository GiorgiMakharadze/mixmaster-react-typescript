import { useRouteError } from "react-router-dom";
import { IRouteError } from "../types";

const SinglePageError = () => {
  const error = useRouteError() as IRouteError;

  console.log("Error", error);

  return <div>{error.message}</div>;
};
export default SinglePageError;
