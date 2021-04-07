import { inject, injectable } from "inversify";
import PokemonRepository from "../repository/pokemonRepository";
import { Pokemon } from "../../domain/entity";

export interface GetPokemon {
  execute(name: string): Promise<Pokemon>;
}

@injectable()
export class GetPokemonImpl implements GetPokemon {
  constructor(
    @inject("PokemonRepository") public productRepo: PokemonRepository
  ) {}

  execute(name: string): Promise<Pokemon>{
    return this.productRepo.getPokemon(name);
  }
}
