<template>
  <div class="recipes container">
    <div v-bind:class="{'w100': $route.name === 'Recipes','hide-mobile': $route.name !== 'Recipes'}" class="product-list">
      <transition-group name="list" enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutLeft">
      <Product v-for="(item, index) in this.allItems" :key="index" :name="item.name" :description="item.description" :imgUrl="item.imgUrl" :idx="index" @click="select(index)"/>
      </transition-group>
    </div>
    <transition
        name="router"
        enter-active-class="animated bounceInRight"
      >
    <router-view class="details-window"></router-view>
    </transition>
        <button @click="goNew" v-bind:class="{'hide-mobile': $route.name !== 'Recipes', 'f-btn-right': $route.name !== 'Recipes'}" class="btn fbtn f-btn-list"><i class="fas fa-plus fa-3x"></i></button>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
import Product from '@/components/Product.vue'
export default {
  name: 'Recipes',
  components: {
    Product
  },
  computed: mapGetters(['allItems']),
  methods: {
    select (idx) {
      this.$router.push({ name: 'Detail', params: { index: idx } })
    },
    goNew () {
      this.$router.push({ name: 'NewItem' })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/_variables.scss';
@import "~animate.css/source/animate.css";
.container {
    padding: 0;
    transition: all 1s ease-in;
  }
.recipes {
  display: flex;
  transition: all 1s ease-in;
  padding: 1rem;
  .w100 {
    min-width: 100% !important;
  }
  .product-list {
    margin: 8px 8px 0 0;
    background: darken($light-color, 13);
    box-shadow: 2px 2px 5px $dark-color;
    min-width: 49%;
    min-height: 100vh;
    max-height: 100vh;
    overflow: scroll;
    padding: 1rem;
    transition: all 0.5s ease-out;
  }
  .details-window {
    margin: 8px 8px 0;
    min-height: 100vh;
    min-width: 49%;
    max-width: 50%;
  }
  .f-btn-right {
    left: 46% !important;
  }
  .f-btn-list {
        width: 100px;
        height: 100px;
        top: 70%;
        left: 62%;
        z-index: 2;
        transition: all 1s ease-out;
    }
}
</style>
