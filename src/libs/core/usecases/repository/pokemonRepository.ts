export default interface PokemonRepository {
    getAll():  Promise<any> ;
    getPokemon(name: string):  Promise<any> ;
}
