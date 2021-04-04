import { inject, injectable } from "inversify";
import PokemonRepository from "../repository/pokemonRepository";

export interface GetAllPokemons {
  execute(): Promise<any>;
}

@injectable()
export class GetAllPokemonsImpl implements GetAllPokemons {
  constructor(
    @inject("PokemonRepository") public productRepo: PokemonRepository
  ) {}

  execute(): Promise<any>{
    return this.productRepo.getAll();
  }
}
