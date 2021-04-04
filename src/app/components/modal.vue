<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <img src="../assets/pokemonDefault.png" />

            <img
              src="../assets/closed.svg"
              class="modal-default-button"
              @click="closed()"
            />
          </div>

          <div class="modal-body">
            <div class="item">
              <span>Name: {{ pokemon.name }}</span>
            </div>

            <div class="item">
              <span>Width: {{ pokemon.weight }}</span>
            </div>

            <div class="item">
              <span>Height: {{ pokemon.height }}</span>
            </div>

            <div class="item">
              <span>Types: {{ pokemon.types }}</span>
            </div>

            <div class="footer-item">
              <button
                type="button"
                class="btn btn-normal mt-20"
                @click="copyPokemon()"
              >
                Share to my friends
              </button>
{{pokemon.isfavorite}}
              <img
                class="mt-20"
                v-show="pokemon.isfavorite"
                src="../assets/active.svg"
              />
              <img
                class="mt-20"
                v-show="!pokemon.isfavorite"
                src="../assets/inactive.svg"
              />

              <textarea ref="textarea" style="display:none">
                 copiar y nose
               </textarea
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import { Component, Emit, Prop, Ref, Vue } from "vue-property-decorator";
import { Pokemon } from "../../libs/core/domain/entity";

@Component
export default class ModalDetail extends Vue {
  @Prop({ required: true }) pokemon!: Pokemon;
  @Ref("textarea") readonly textarea!: HTMLTextAreaElement;

  @Emit("emitClosed")
  closed() {
    return true;
  }

  copyPokemon() {
    const dummy = document.createElement("input");
    const text = `${this.pokemon.name},${this.pokemon.weight},${this.pokemon.height},${this.pokemon.types} `;

    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  }
}
</script>
<style lang="css" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 315px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  background: url("../assets/fondo.png") no-repeat;
  background-size: cover;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 0px 30px;
  padding: 1rem 0px;
}

.modal-body .item {
  display: flex;
  height: 47px;
  background: #ffffff;
  border-bottom: 1px solid #e8e8e8;
  align-items: center;
}

.modal-body .item span {
  font-family: "Lato";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #353535;
  margin-left: 20px;
}

.footer-item {
  display: flex;
  height: 60px;
  background: #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
  align-items: center;
}

.footer-item button {
  margin-right: auto;
}

.footer-item img {
  width: 44px;
  height: 44px;
  margin-left: auto;
}

.modal-default-button {
  position: absolute;
  top: 10px;
  right: 10px;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

@media (min-width: 376px) {
  .modal-container {
    width: 575px;
  }
}
</style>
