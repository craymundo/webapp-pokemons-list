<template>
  <div class="form-group has-search">
    <span class="fa fa-search form-control-feedback "></span>
    <input
      type="text"
      class="form-control input-search"
      placeholder="Search"
      :value="currSearchVal"
      v-on:input="updateSearch($event)"
    />
  </div>
</template>
<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";

@Component
export default class InputSearch extends Vue {
  currSearchVal = "";

  @Emit("emitSearch")
  updateSearch($event: { target: { value: string } }) {
    this.currSearchVal = $event.target.value;
    return this.currSearchVal;
  }
}
</script>
<style lang="css" scoped>
.input-search {
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  height: 50px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  padding-top: 14px;
  padding-bottom: 14px;
  line-height: 50px;
  color: #353535;
}

::placeholder {
  color: #bfbfbf;
  opacity: 1;
}

.has-search .form-control {
  padding-left: 2.375rem;
}

.has-search .form-control-feedback {
  position: absolute;
  z-index: 2;
  display: block;
  width: 43px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  pointer-events: none;
  color: #bfbfbf;
}

.fa-search:before {
  font-size: 18px;
}
</style>
