<template>
  <form class="item-form" @submit.prevent>
    <div class="form-group">
      <label for="name">Name</label>
      <input v-model="newName" type="text" name="name" id="name" />
    </div>
    <div class="form-group">
      <label for="imgUrl">Image URL</label>
      <input v-model="newImgUrl" type="text" name="imgUrl" id="imgUrl" />
    </div>
    <div class="des-img">
      <div class="form-group description">
        <label for="description">Description</label>
        <textarea v-model="newDescription" name="description" id="" cols="20" rows="5"></textarea>
      </div>
      <div class="form-group image">
        <label for="img">Image</label>
        <img :src="newImgUrl" alt="" />
      </div>
    </div>
    <!-- Section Ingredients -->
    <label>Ingredients</label>
    <div class="ingredients">
      <p v-if="newIngredients.length < 1">No Ingredients</p>
      <div class="ingredient-form" v-for="(ingredient, index) in this.newIngredients" :key="index">
        <div>
          <input v-model="ingredient.type" type="text" placeholder="Type" name="type" id="type" />
        </div>
        <div>
          <input v-model="ingredient.quantity" type="number" placeholder="Quantity" name="quantity" id="quantity" />
        </div>
        <button @click="removeIngredient(index)" class="close-ingredient-btn"><i class="fas fa-times"></i></button>
      </div>
      <button class="btn f-btn fbtn" @click="addIngredient"><i class="fas fa-plus fa-2x"></i></button>
    </div>
    <div class="buttons">
      <button @click="newItem" class="btn btn-light">Save</button>
      <button @click="clear" class="btn btn-dark">Clear</button>
      <button @click="cancel" class="btn btn-primary">Cancel</button>
    </div>
  </form>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'ItemForm',
  props: [
    'name',
    'description',
    'imgUrl',
    'ingredients'
  ],
  data () {
    return {
      newName: this.name,
      newDescription: this.description,
      newImgUrl: this.imgUrl,
      newIngredients: this.ingredients
    }
  },
  methods: {
    ...mapActions(['addItem', 'updateItem']),
    newItem () {
      var item = {
        name: this.newName,
        description: this.newDescription,
        imgUrl: this.newImgUrl,
        ingredients: this.newIngredients
      }
      if (this.$route.name === 'NewItem') {
        this.addItem(item)
        this.$router.push({ name: 'Recipes' })
      } else if (this.$route.name === 'Edit') {
        var params = {
          index: this.$route.params.index,
          item: item
        }
        this.updateItem(params)
        this.$router.push({ name: 'Detail', params: { index: this.$route.params.index } })
      }
    },
    addIngredient () {
      var ingredient = { name: '', quantity: '' }
      this.newIngredients.push(ingredient)
    },
    removeIngredient (index) {
      this.newIngredients.splice(index, 1)
    },
    clear () {
      this.newName = ''
      this.newDescription = ''
      this.newImgUrl = ''
      this.newIngredients = []
    },
    cancel () {
      this.$router.push({ name: 'Recipes' })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/scss/_variables.scss";
form {
  padding: 2rem;
  min-height: 100vh;
  background: darken($light-color, 5);
  color: $dark-color;
  text-align: left;
  box-shadow: 2px 2px 5px $dark-color;
  label {
    text-align: start;
    display: block;
    font-weight: bold;
  }
  .form-group {
    input[type="text"] {
      width: 90%;
      font-size: 1rem;
      font-weight: bold;
      color: $dark-color;
      height: 2.5rem;
      padding: 0.25rem;
      margin-bottom: 1rem;
      border: none;
      border-bottom: 1px $dark-color solid;
      background: $light-color;
      transition: background 0.5s ease-in-out;
      &:hover {
        background: lighten($primary-color, 35);
      }
      &:focus {
        outline: none;
        background: lighten($primary-color, 35);
      }
    }
  }
  .des-img {
    display: flex;
    .description {
      flex: 1;
      textarea {
        margin: 1rem 1rem 0 0;
        border-radius: 5px;
        font-size: 1.2rem;
        font-weight: bold;
        color: $dark-color;
        background: $light-color;
        transition: background 0.5s ease-in-out;
        &:hover {
          background: lighten($primary-color, 35);
        }
        &:focus {
          outline: none;
          background: lighten($primary-color, 35);
        }
      }
    }
    .image {
      flex: 2;
      img {
        border-radius: 5px;
        max-width: 100%;
        max-height: 70%;
      }
    }
  }
  .ingredients {
    margin-top: 5px;
    width: 95%;
    padding: 0.5rem 1rem 1rem;
    background: darken($light-color, 10);
    position: relative;
    .f-btn {
      bottom: -20px;
      right: 10px;
    }
  }
  .buttons {
    margin: 40px auto 0;
    max-width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
    button {
      padding: 0.5rem 1.5rem;
    }
  }
}
</style>
