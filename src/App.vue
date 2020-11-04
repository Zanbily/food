<template>
  <div id="nav">
    <div class="container">
      <div class="logo">
        <h1>Food Store</h1>
      </div>
      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </div>
  </div>
  <router-view />
</template>

<style lang="scss">
@import "@/scss/_variables.scss";
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
  height: 100vh;
}
// The Navbar
#nav {
  padding: 20px;
  position: sticky;
  color: #eee;
  background: #333;
  text-align: center;
  .container {
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    .router-link-active.router-link-exact-active {
      background: #2c3e50;
      border-radius: 15px;
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
      a {
        padding: 0.75rem 1.5rem;
        color: inherit;
        margin-left: 1rem;
        border-radius: 15px;
        transition: color, background 0.5s ease-out;
        &:hover {
          background: #2c3e50;
          color: palevioletred;
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
  &:hover {
    cursor: pointer;
  }
  &.btn-primary {
    background: darken($primary-color, 10);
    color: $secondary-color;
    transition: background, color 0.2s ease-in-out;
    &:hover {
      background: $primary-color;
      color: #fff;
    }
  }
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 3rem;
}
</style>
