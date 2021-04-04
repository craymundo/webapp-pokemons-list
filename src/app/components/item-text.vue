<template>
  <div class="item">
    <span v-on:click="pokemonSelected()">{{ pokemon.name }}</span>
    <img  v-on:click="favoritePokemon()" v-show="pokemon.isfavorite" src="../assets/active.svg" />
    <img  v-on:click="favoritePokemon()" v-show="!pokemon.isfavorite"  src="../assets/inactive.svg" />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { Pokemon } from "../../libs/core/domain/entity";

@Component
export default class ItemText extends Vue {
  @Prop({ required: true }) pokemon!: Pokemon;

  @Emit("emitPokemonSelected")
  pokemonSelected() {
    return this.pokemon;
  }

  @Emit("emitFavoritePokemon")
  favoritePokemon() {
    return this.pokemon.id;
  }

}
</script>
<style lang="css" scoped>
.item {
  display: flex;
  height: 60px;
  background: #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
  align-items: center;
}

.item span {
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  color: #353535;
  margin-left: 20px;
  cursor: pointer;
}

.item img {
  width: 44px;
  height: 44px;
  margin-left: auto;
  margin-right: 10px;
}
</style>
