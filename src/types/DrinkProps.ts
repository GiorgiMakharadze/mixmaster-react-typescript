export interface IDrinkProps {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strGlass: string;
}

export interface ILoaderData {
  drinks: IDrinkProps[];
  searchTerm: string;
}

export interface ICocktailCardProps {
  drinks: IDrinkProps;
}
