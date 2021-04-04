<template>
  <div>
    <itemtext v-for="item in pokemons" :key="item.id" :pokemon="item"
     v-on:emitPokemonSelected="getPokemon($event)"
     v-on:emitFavoritePokemon="setFavoritePokemon($event)"
     />
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import ItemText from "./item-text.vue";
import { Pokemon }  from "../../libs/core/domain/entity"

@Component({
  components: {
    itemtext: ItemText,
  },
})
export default class ListItemText extends Vue {
  @Prop({required: true}) pokemons!: Pokemon[]

@Emit("emitPokemonSelectedItem")
  getPokemon(pokemon: Pokemon) {
    return pokemon;
  }

@Emit("emitFavoritePokemonItem")
  setFavoritePokemon(id: number) {
    return id;
  }

}
</script>
<style lang="css" scoped></style>
