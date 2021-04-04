import Vue from "vue";
import Vuex from "vuex";
import {PokemonsState, PokemonsStore} from "./pokemons";
import {getModule} from "vuex-module-decorators";

Vue.use(Vuex);

export interface RootState {
  pokemon: PokemonsState;
}

const store = new Vuex.Store<RootState>({
  modules: {
    pokemon: PokemonsStore,
  }
});

export default store;
