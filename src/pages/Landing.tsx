import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { ILoaderData, IRequestDataProps } from "../types";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async ({ request }: IRequestDataProps) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "";
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);

  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData() as ILoaderData;

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} searchTerm={searchTerm} />
    </>
  );
};

export default Landing;
