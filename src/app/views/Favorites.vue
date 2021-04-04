<template>
  <div>
    <div v-if="pokemons.length === 0">
      <div class="container">
        <div class="row justify-content-center align-items-center minh-100">
          <div class="col-lg-12">
            <Loader  class="mx-auto d-block"></Loader>
          </div>
        </div>
      </div>
    </div>

    <div v-if="pokemons.length > 0">
      <div class="filter container">
        <div class="row">
          <div class="col-12 text-center">
            <InputSearch
              class="mt-35"
              v-on:emitSearch="getSearch($event)"
            ></InputSearch>
            <ListItemText
              class="mt-40"
              :pokemons="pokemons"
              v-on:emitPokemonSelectedItem="getPokemon($event)"
              v-on:emitFavoritePokemonItem="setFavoritePokemon($event)"
            ></ListItemText>
          </div>
        </div>
      </div>

      <ModalDetail
        v-if="showModal && pokemonDetail.id !== 0"
        v-on:emitClosed="getClosed()"
        :pokemon="pokemonDetail"
      />

      <div class="footer">
       <Footer :is-disabled-favorites="false"
        :is-disabled-all="true"></Footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Loader from "@/app/components/loader.vue"; //../../app/components/loader.vue
import InputSearch from "@/app/components/input-search.vue";
import ListItemText from "@/app/components/list-item-text.vue";
import Footer from "@/app/components/footer.vue";
import ModalDetail from "@/app/components/modal.vue";

import { PokemonsStore } from "@/app/store/pokemons";
import { getModule } from "vuex-module-decorators";

import { Pokemon } from "../../libs/core/domain/entity";

@Component({
  components: { Loader, InputSearch, ListItemText, Footer, ModalDetail },
})
export default class Search extends Vue {
  showModal = false;
  pokemon: Pokemon = {
    id: 0,
    name: "",
    weight: 0,
    height: 0,
    types: "",
    isfavorite: false,
  };

  get pokemonsStore(): PokemonsStore {
    return getModule(PokemonsStore, this.$store);
  }

  get pokemons(): Pokemon[] {
    return this.pokemonsStore.favorites;
  }

  get pokemonDetail(): Pokemon {
    return this.pokemonsStore.item;
  }

  created() {
    this.pokemonsStore.filterFavorites();
  }

  getSearch(filter: string) {
    if (filter.trim().length === 0) {
      this.pokemonsStore.filterFavorites();
    }

    if (filter.trim().length >= 3) {
      const resultSearch = [];
      let cont = 0;
      for (const item of this.pokemons) {
        const namePokemon = item.name.toLocaleLowerCase();
        const searchTerm = filter.toLocaleLowerCase();
        const regexStr = `(?=.*${searchTerm.split(/\s/).join(")(?=.*")})`;
        const searchRegEx = new RegExp(regexStr, "gi");
        if (namePokemon.match(searchRegEx)) {
          resultSearch.push(this.pokemons[cont]);
        }
        cont++;
      }
      this.pokemonsStore.fetchFilterItem(resultSearch, 'favorites');
    }
  }

  getClosed() {
    this.showModal = false;
    this.pokemonsStore.clearItem();
  }

  getPokemon(pokemon: Pokemon) {
    this.pokemonsStore.fetchItem(pokemon.name, true);
    this.showModal = true;
  }

  setFavoritePokemon(id: number) {
    this.pokemonsStore.setFavorite(id);
    this.pokemonsStore.filterFavorites();
  }
}
</script>

<style>
.minh-100 {
  height: 100vh;
}

.filter {
  max-width: 570px;
}
.footer {
  position: fixed;
  height: 80px;
  bottom: 0;
  width: 100%;
  background-color: #fff;
}
</style>
