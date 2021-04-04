<template>
  <div class="row display-flex align-center">
    <div class="col-6 text-center width-285">
      <button
        type="button"
        :class="isDisabledAll? 'btn btn-normal mt-18 btn-all disabled' : 'btn btn-normal mt-18 btn-all '"
        @click="$router.push({ name: 'list' })"
      >
        All
      </button>
    </div>
    <div class="col-6 text-center width-285">
      <button
        type="button"
        :class="isDisabledFavorites? 'btn btn-normal mt-18 btn-favorites disabled' : 'btn btn-normal mt-18 btn-favorites '"
        @click="$router.push({ name: 'favorites' })"
      >
        Favorites
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  @Prop({ required: true }) isDisabledFavorites!: boolean;
  @Prop({ required: true }) isDisabledAll!: boolean;
}
</script>
<style lang="css" scoped>
footer {
  position: fixed;
  height: 100px;
  bottom: 0;
  width: 100%;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-all:before {
  content: "";
  display: block;
  background: url("../assets/icon-button2.svg") no-repeat;
  width: 22px;
  height: 22px;
  float: left;
  margin: 0 11px 0 0;
}

.btn-favorites:before {
  content: "";
  display: block;
  background: url("../assets/icon-button1.svg") no-repeat;
  width: 22px;
  height: 22px;
  float: left;
  margin: 0 11px 0 0;
}

@media (min-width: 376px) {
  .row.display-flex.align-center {
    justify-content: center;
    padding-left: 0;
    padding-right: 0;
  }
  .btn-normal {
    min-width: 275px;
  }

  .width-285 {
    width: 285px;
    flex: 0;
  }
}

@media (max-width: 375px) {
  .row.display-flex.align-center {
    padding-left: 15px;
    padding-right: 15px;
  }

  .btn-normal {
    min-width: 144px;
  }
  .width-285 {
    flex: 0 0 50%;
    max-width: 100%;
  }
}
</style>
