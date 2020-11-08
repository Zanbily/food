<template>
  <div id="nav">
    <div class="container">
      <div class="logo">
        <h1><i class="fas fa-utensils"></i> Syrian Food</h1>
      </div>
      <div class="links">
        <router-link v-if="$route.name !== 'Auth'" to="/recipes">Home</router-link>
        <router-link v-if="$route.name !== 'Auth'" to="/shoppingList">Shopping List</router-link>
      </div>
    </div>
  </div>
  <router-view />
</template>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_mobile.scss";
// Initial reset .....................
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
::-webkit-scrollbar {
  width: 0;
}
// ..................................................
// All app styles ...................................
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  line-height: 1.5;
  background: $light-color;
  min-height: 100vh;
}
// The Navbar
#nav {
  padding: 1.5rem;
  min-height: 88px;
  color: #eee;
  background: $dark-color;
  text-align: center;
  z-index: 2;
  .container {
    max-width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .router-link-active{
      background: $primary-color;
    }
    .logo {
      transition: color 1s ease-in-out;
      &:hover {
        color: violet;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        padding: 0.75rem 1.5rem;
        color: inherit;
        margin-left: 1rem;
        text-align: center;
        transition: color, background 0.5s ease-out;
        &:hover {
          background: $primary-color;
        }
      }
    }
  }
}
// .................................................
// Buttons ..................
.btn {
  display: inline-block;
  border: none;
  padding: 0.6rem 2rem;
  font-weight: bold;
  outline: none;
  &:hover {
    cursor: pointer;
  }
  &.btn-primary {
    background: darken($primary-color, 10);
    color: $secondary-color;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: $primary-color;
      color: #fff;
    }
  }
  &.btn-dark {
    background: $dark-color;
    color: $secondary-color;
    transition: all 0.4s ease-in-out;
    &:hover {
      background: darken($dark-color, 5);
      color: #fff;
    }
  }
  &.btn-light {
    background: darken($light-color, 10);
    color: $dark-color;
    border: 2px $primary-color solid;
    transition: all 0.2s ease-in-out;
    &:hover {
      background: darken($light-color, 15);
      color: darken($dark-color, 10);
    }
  }
  &.btn-success {
    background: lighten(green, 10);
    color: $light-color;
    transition: all 0.2s ease-in-out;
    &:hover {
      background: green;
      color: #fff;
    }
  }
}
.fbtn {
    padding: 0.7rem 0.8rem;
    border: 2px $dark-color solid;
    border-radius: 50%;
    background: $dark-color;
    color: $light-color;
    position: absolute;
    // right: 10px;
    // bottom: -25px;
    box-shadow: -2px -2px 5px $dark-color;
    transition: all 300ms ease-in-out;
    &:hover {
      background: darken($dark-color, 10);
    }
  }
.container {
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 3rem;
}
// Ingredients Form Styling for Detail and ShoppingList Components
.ingredient-form {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin: 10px 0;
  max-width: 90%;
  justify-content: space-between;
  label {
    text-align: start;
    display: block;
    font-weight: bold;
  }
  input {
    border: none;
    padding: 0.25rem;
    font-size: 1rem;
    width: 100%;
    font-weight: bold;
    color: $dark-color;
    border-bottom: 2px $dark-color solid;
    line-height: 1.5;
    background: darken($light-color, 10);
    transition: background 0.5s ease-in-out;
    &:focus {
      outline: none;
      color: $dark-color;
    }
    &::placeholder {
      color: $dark-color;
      font-weight: bold;
      opacity: 0.5;
    }
  }
  .close-ingredient-btn {
    height: 25px;
    width: 25px;
    margin-top: 3px;
    font-weight: bold;
    color: darken($light-color, 10);
    background: $dark-color;
    border: none;
    border: 1px $dark-color solid;
    border-radius: 5px;
    outline: none;
    transition: all 200ms ease-in-out;
    &:hover {
      color: darken($light-color, 10);
      background: darken($dark-color, 25);
      cursor: pointer;
    }
  }
}
.card-light {
  padding: 2rem;
  min-height: 100vh;
  position: relative;
  background: darken($light-color, 5);
  box-shadow: 2px 2px 5px $dark-color;
}
.ingredients {
    width: 100%;
    padding: 0.5rem 1rem 1rem;
    position: relative;
    .ingredient {
      margin: auto;
      padding: 0.4rem;
      font-weight: bold;
      border-bottom: 1px $dark-color solid;
      display: flex;
      width: 80%;
      justify-content: space-between;
      align-items: center;
      &:last-child {
        border: none;
      }
      .quantity-badge {
        text-align: center;
        padding: 0.2rem;
        width: 50px;
        background: $dark-color;
        color: $light-color;
        border-radius: 10px;
      }
    }
}
</style>
