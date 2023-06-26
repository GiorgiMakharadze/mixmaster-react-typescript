import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { useQuery, QueryClient } from "@tanstack/react-query";
import { ILoaderData, IRequestDataProps } from "../types";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const searchCocktailsQuery = (searchTerm: string) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data?.drinks;
    },
  };
};

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader =
  (queryClient: QueryClient) =>
  async ({ request }: IRequestDataProps) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "";
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    return { searchTerm };
  };

const Landing = () => {
  const { searchTerm } = useLoaderData() as ILoaderData;
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} searchTerm={searchTerm} />
    </>
  );
};

export default Landing;
