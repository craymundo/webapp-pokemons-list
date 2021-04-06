import { Pokemon } from "../../domain/entity";
export default interface PokemonRepository {
    getAll():  Promise<Pokemon[]> ;
    getPokemon(name: string):  Promise<Pokemon> ;
}
