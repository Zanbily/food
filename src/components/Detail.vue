<template>
  <div class="detail-card card-light">
    <a @click="closeDetail" class="close-icon"><i class="fas fa-times fa-2x"></i></a>
    <div class="details">
      <h1>{{ item.name }}</h1>
      <p>{{ item.description }}</p>
      <div class="buttons ingredients">
        <a class="to-shopping-btn"><i class="fas fa-cart-plus fa-2x"></i></a>
        <a @click="removeRecipe" class="delete-btn"><i class="fas fa-trash-alt fa-2x"></i></a>
        <a @click="editRecipe" class="edit-btn"><i class="fas fa-pencil-alt fa-2x"></i></a>
      </div>
    </div>
      <div class="image">
        <img :src="item.imgUrl" alt="" />
      </div>
    <div class="ingredients">
      <div v-for="(ingredient, index) in item.ingredients"
        :key="index" class="ingredient">
        <p>{{ ingredient.type }}</p>
        <div class="quantity-badge">
          <p>{{ ingredient.quantity }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Detail',
  data () {
    return {
      item: {},
      index: 0
    }
  },
  created () {
    this.item = this.allItems[this.$route.params.index]
  },
  computed: mapGetters(['allItems']),
  watch: {
    $route: 'updateIndex'
  },
  methods: {
    ...mapActions(['deleteItem']),
    updateIndex () {
      this.item = this.allItems[this.$route.params.index]
    },
    editRecipe () {
      this.$router.push({
        name: 'Edit',
        params: { index: this.$route.params.index }
      })
    },
    removeRecipe () {
      if (confirm('Are You Sure?')) {
        var params = {
          index: this.$route.params.index
        }
        this.deleteItem(params)
        this.$router.push({ name: 'Recipes' })
      }
    },
    toShoppingList () {
      // for (var i=0; i<this.item.ingredients.length; i++) {
      //   this.newShoppingItem(this.item.ingredients[i])
      // }
    },
    closeDetail () {
      this.$router.push({ name: 'Recipes' })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/scss/_variables.scss";
.detail-card {
  .close-icon {
    padding: 1rem;
    color: $dark-color;
    position: absolute;
    top: 10px;
    right: 20px;
    &:hover {
      cursor: pointer;
      color: $primary-color;
    }
  }
  .details {
    color: $dark-color;
    p {
      margin-bottom: 1rem;
    }
    .buttons {
      padding: 0;
      margin: auto;
      max-width: 80%;
      background: darken($light-color, 5);
      box-shadow: 2px 2px 3px $dark-color;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      a {
        padding: 1rem;
        &:hover {
          cursor: pointer;
          color: $primary-color;
        }
      }
    }
  }
}
.image {
  padding: 1rem;
  margin-top: 1rem;
  flex: 2;
  img {
    box-shadow: 2px 2px 5px $dark-color;
    max-width: 70%;
    border-radius: 5px;
  }
}
</style>
