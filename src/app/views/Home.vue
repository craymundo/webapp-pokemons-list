<template>
  <div class="home container">
    <div class="row">
      <div class="col-12 text-center">
        <img
          src="../assets/logoIcon.svg"
          class="mx-auto d-block mt-70"
          alt="..."
        />

        <h1 class="title mt-60">Welcome to Pokédex</h1>
        <p class="description mt-30">
          The digital encyclopedia created by Professor Oak is an invaluable
          tool to Trainers in the Pokémon world.
        </p>

        <button type="button" class="btn btn-normal mt-50" @click="$router.push({name: 'list'})">Get started</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>

<style lang="css" scoped>
.title {
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  color: #353535;
}

.description {
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: #5e5e5e;
}

</style>
