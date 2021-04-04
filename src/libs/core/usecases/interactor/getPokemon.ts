import { inject, injectable } from "inversify";
import PokemonRepository from "../repository/pokemonRepository";

export interface GetPokemon {
  execute(name: string): Promise<any>;
}

@injectable()
export class GetPokemonImpl implements GetPokemon {
  constructor(
    @inject("PokemonRepository") public productRepo: PokemonRepository
  ) {}

  execute(name: string): Promise<any>{
    return this.productRepo.getPokemon(name);
  }
}
