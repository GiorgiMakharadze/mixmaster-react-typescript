import { useLoaderData, Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useQuery, QueryClient } from "@tanstack/react-query";
import Wrapper from "../assets/wrappers/CocktailPage";
import { IFetchedDataProps, IDrinkProps } from "../types";

const SingleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const singleCocktailQuery = (id: string | number) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const { data } = await axios.get(`${SingleCocktailUrl}${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: { params: Record<any, any> }) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleCocktailQuery(id));
    return { id };
  };

const Cocktail = () => {
  const { id } = useLoaderData() as {
    id: string;
    data: IFetchedDataProps;
  };
  const { data } = useQuery(singleCocktailQuery(id));
  if (!data || !data.drinks) return <Navigate to="/" />;

  const singleDrink: IDrinkProps = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith("strIngredient") && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key]);
  console.log(validIngredients);

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          Back Home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name: </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category: </span>
            {category}
          </p>
          <p>
            <span className="drink-data">info: </span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass: </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">ingredients: </span>
            {validIngredients.map((item, index) => {
              return (
                <span className="ing" key={item}>
                  {item}
                  {index < validIngredients.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">instructions: </span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
