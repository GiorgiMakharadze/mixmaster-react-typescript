import Wrapper from "../assets/wrappers/ErrorPaget";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";
import { IRouteError } from "../types/RouterErrorProps";

const Error = () => {
  const error = useRouteError() as IRouteError;
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Ohh!</h3>
          <p>We can't seem to find page your looking for</p>
          <Link to="/">Home Page</Link>
        </div>
      </Wrapper>
    );
  }
  return <Wrapper>Error</Wrapper>;
};

export default Error;
