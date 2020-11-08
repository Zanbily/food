<template>
  <div class="bcard" v-bind:class="{'selected': this.idx.toString() === this.$route.params.index}">
    <div class="bcard-header">{{ name }}</div>
    <p class="bcard-description">{{ description }}</p>
    <img class="bcard-avatar" :src="imgUrl" alt="image">
  </div>
</template>
<script>
export default {
  name: 'Product',
  props: {
    name: String,
    description: String,
    imgUrl: String,
    idx: Number
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/_variables';
.bcard {
  margin: 15px auto;
  max-width: 450px;
  min-height: 100px;
  color: $dark-color;
  background: darken($light-color, 5);
  // border: 1px $dark-color dotted;
  // border-radius: 15px;
  box-shadow: 2px 2px 5px $dark-color;
  transition: background 0.2s ease-in-out;
  overflow: hidden;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  &:hover {
    cursor: pointer;
    background: darken($light-color, 25);
    color: darken($dark-color, 10);
    img {
      opacity: 1;
    }
  }
  &-header {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: start;
    align-self: center;
    justify-self: start;
    margin-left: 10px;
  }
  &-description {
    font-size: 1rem;
    align-self: start;
    justify-self: start;
    margin-left: 10px;
  }
  &-avatar {
    margin-right: 15px;
    grid-column-start: 2;
    grid-row-start: 1;
    grid-row-end: 3;
    align-self: center;
    justify-self: end;
  }
  img {
    width: 125px;
    height: 75px;
    // border: 1px $dark-color solid;
    border-radius: 15px;
    opacity: 0.9;
    transition: opacity 0.2s ease-in-out;
  }
}
.selected {
  background: darken($light-color, 25);
  color: darken($dark-color, 10);
}
</style>
