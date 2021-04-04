import { lazyInject } from "../../di";

import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { Pokemon } from "../../libs/core/domain/entity";
import { GetAllPokemons } from "../../libs/core/usecases/interactor/getAllPokemons";
import { GetPokemon } from "../../libs/core/usecases/interactor/getPokemon";

export interface PokemonsState {
  items: Pokemon[];
  item: Pokemon;
  favorites: Pokemon[];
}

@Module({
  name: "pokemon",
  namespaced: true,
})
export class PokemonsStore extends VuexModule implements PokemonsState {
  public items: Pokemon[] = [];
  public favorites: Pokemon[] = [];
  public item: Pokemon = {
    id: 0,
    name: "",
    weight: 0,
    height: 0,
    types: "",
    isfavorite: false,
  };

  @lazyInject("GetAllPokemons") private getAllPokemons!: GetAllPokemons;
  @lazyInject("GetPokemon") private getPokemon!: GetPokemon;

  @Mutation
  setItems(items: Pokemon[]) {
    this.items = items;
  }

  @Mutation
  setFavorites(items: Pokemon[]) {
    this.favorites = items;
  }

  @Mutation
  setItem(item: Pokemon, isfavorite: boolean) {
    item.isfavorite = isfavorite;
    this.item = {
      id: item.id,
      name: item.name,
      weight: item.weight,
      height: item.height,
      types: item.types,
      isfavorite: item.isfavorite,
    };
  }

  @Action
  async fetchItems() {
    await this.getAllPokemons.execute().then((data) => {
      this.setItems(data);
    });
  }

  @Action
  filterFavorites() {
    const list = this.items.filter((item) => item.isfavorite === true);
    this.setFavorites(list);
  }

  @Action
  setFavorite(id: number) {
    const index = this.items.findIndex((item) => item.id === id);
    const name = this.items[index].name;
    const pokemon = {
      id: id,
      name: name,
      weight: 0,
      height: 0,
      types: "",
      isfavorite: true,
    };
    this.items[index] = pokemon;
    this.setItems(this.items);
  }

  @Action
  async fetchItem(name: string, isfavorite: boolean) {
    await this.getPokemon.execute(name).then((data) => {
      this.setItem(data, isfavorite);
    });
  }

  @Action
  fetchFilterItem(list: Pokemon[], type = "search") {
    if (type === "favorites") this.setFavorites(list);
    else this.setItems(list);
  }

  @Action
  clearItem() {
    const data = {
      id: 0,
      name: "",
      weight: 0,
      height: 0,
      types: "",
      isfavorite: false,
    };
    this.setItem(data, false);
  }

  @Action
  clearItems() {
    this.setItems([]);
  }
}
