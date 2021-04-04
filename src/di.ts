import "reflect-metadata";
import {Container} from "inversify";
import getDecorators from "inversify-inject-decorators";

import PokemonRepository from "./libs/core/usecases/repository/pokemonRepository";

import PokemonRepositoryImpl from "./libs/core/data/pokemonRepositoryImpl";

import { GetAllPokemons, GetAllPokemonsImpl} from "./libs/core/usecases/interactor/getAllPokemons";

import { GetPokemon, GetPokemonImpl} from "./libs/core/usecases/interactor/getPokemon";

import {getModule} from "vuex-module-decorators";

const container = new Container();

container
  .bind<PokemonRepository>("PokemonRepository")
  .to(PokemonRepositoryImpl)
  .inSingletonScope();

container
  .bind<GetAllPokemons>("GetAllPokemons")
  .to(GetAllPokemonsImpl)
  .inSingletonScope();

  container
  .bind<GetPokemon>("GetPokemon")
  .to(GetPokemonImpl)
  .inSingletonScope();

const {lazyInject} = getDecorators(container);
export {lazyInject, container};
