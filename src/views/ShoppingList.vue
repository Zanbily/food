<template>
  <div class="container card-light">
    <div class="ingredient-form">
      <div>
        <label for="type">Type</label>
        <input v-model="chosen.type" type="text" name="type" id="type" />
      </div>
      <div>
        <label for="quantity">Quantity</label>
        <input v-model="chosen.quantity" type="number" name="quantity" id="quantity" />
      </div>
    </div>
    <div class="ingredients">
      <div v-for="(ingredient, index) in this.allShoppingItems"
        :key="index" class="ingredient" v-bind:class="{'chosen': this.idx === index}" @click="chooseIngredient(index)">
        <p>{{ ingredient.type }}</p>
        <div class="quantity-badge">
          <p>{{ ingredient.quantity }}</p>
        </div>
      </div>
    </div>
    <div class="buttons">
      <button @click="newItem" class="btn btn-light">Order</button>
      <button @click="clear" class="btn btn-dark">Clear</button>
      <button @click="remove" class="btn btn-primary">delete</button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ShoppingList',
  data () {
    return {
      item: {},
      idx: null,
      chosen: {}
    }
  },
  computed: mapGetters(['allShoppingItems']),
  methods: {
    ...mapActions(['deleteShoppingItem']),
    chooseIngredient (index) {
      this.chosen = this.allShoppingItems[index]
      this.idx = index
    },
    clear () {
      this.chosen = {}
      this.idx = null
    },
    remove () {
      if (this.idx !== null) {
        this.deleteShoppingItem(this.idx)
        this.clear()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/_variables.scss';
.ingredient-form {
  max-width: 60%;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  margin-bottom: 2rem;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    label {
      margin-right: 1rem;
    }
  }
}
.buttons {
    margin: auto;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      margin-right: 1rem;
      width: 8rem;
    }
  }
  .ingredients {
    .ingredient {
      &:hover {
        cursor: pointer;
        background: $primary-color;
      }
    }
  }
  .chosen {
        background: $primary-color;
  }
</style>
