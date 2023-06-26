export interface IDrinkProps {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strCategory: string;
  strInstructions: string;
  strGlass: string;
  [key: string]: string;
}

export interface ILoaderData {
  drinks: IDrinkProps[];
  searchTerm: string;
}

export interface ICocktailCardProps {
  drinks: IDrinkProps;
}

export interface IFetchedDataProps {
  image: string;
  name: string;
  id: string;
  data: ICocktailCardProps[];
  drinks: IDrinkProps[];
  info: string;
  glass: string;
}
