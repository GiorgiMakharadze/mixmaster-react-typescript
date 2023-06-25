import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { ILoaderData } from "../types";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  const searchTerm = "margarita";
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);

  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData() as ILoaderData;
  console.log(drinks);

  return <div>Landing</div>;
};

export default Landing;
