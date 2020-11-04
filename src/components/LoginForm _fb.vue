<template>
  <form @submit.prevent="login">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" name="name" id="name">
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" />
    </div>
    <p v-if="feedback" class="alert">{{ feedback }}</p>
    <input class="btn btn-primary" type="submit" value="Login">
  </form>
</template>
<script>
import db from '@/firebase/init';
export default {
  name: 'LoginForm',
  data() {
    return {
      feedback: null
    }
  },
  methods: {
    signup() {
      let ref = db.collection('users').doc(this.email);
      ref.get().then(doc => {
        if(doc.exists) {
          this.feedback = 'this email already exists'
        } else {
          
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/_variables.scss';
form {
  padding: 2rem;
  background: $secondary-color;
  border-radius: 15px;
  box-shadow: 2px 2px 5px gray;
  label {
    display: block;
    font-weight: bold;
    color: $dark-color;
  }
  input[type="text"],
  input[type="email"] {
    width: 100%;
    height: 2rem;
    padding: 0.25rem;
    margin: 0.5rem 0 1rem 0 ;
    border: 1px $light-color dotted;
    border-radius: 5px;
    &:focus {
      outline: none;
      border: 3px $primary-color solid;
    }
  }
  .btn {
    border-radius: 5px;
  }
}
</style>
