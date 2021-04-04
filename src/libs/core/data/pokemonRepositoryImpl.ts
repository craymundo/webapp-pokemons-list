import { injectable } from "inversify";
import { Pokemon } from "../domain/entity";

@injectable()
export default class PokemonRepositoryImpl {
   _pokemons: Pokemon[] = [];
   _pokemon: Pokemon;

  constructor() {
    this._pokemon = {
      id: 0,
      name: '',
      weight: 0,
      height: 0,
      types: '',
      isfavorite: false,
    }
    this._pokemons = [];
  }

  public getAll(): Promise<unknown> {
    this._pokemons = [];
    return fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then((resp) => {
        if (resp.status === 200) return resp.json();
      })
      .then((data) => {
        const res = data.results;
        res.forEach((element: any) => {
          this._pokemons.push({
            id: res.findIndex((x: any) => x.name === element.name),
            name: element.name,
            weight: 0,
            height: 0,
            types: "",
            isfavorite: false,
          });
        });
        
        return this._pokemons;
      });
  }

  public getPokemon(name: string): Promise<unknown> {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((resp) => {
        if (resp.status === 200) return resp.json();
      })
      .then((data) => {
        const typeHolder = data.types.map(
          (gotoType: any) => gotoType.type
        );

        this._pokemon = {
          id: data.id,
          name: data.name,
          weight: data.weight,
          height: data.height,
          types: typeHolder.map((getType: any) => getType.name),
          isfavorite: false,
        }
      

        return this._pokemon;
      });
  }
}
