import { inject, injectable } from "inversify";
import PokemonRepository from "../repository/pokemonRepository";
import { Pokemon } from "../../domain/entity";

export interface GetAllPokemons {
  execute(): Promise<Pokemon[]>;
}

@injectable()
export class GetAllPokemonsImpl implements GetAllPokemons {
  constructor(
    @inject("PokemonRepository") public productRepo: PokemonRepository
  ) {}

  execute(): Promise<Pokemon[]>{
    return this.productRepo.getAll();
  }
}
