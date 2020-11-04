<template>
  <form @submit.prevent>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" v-model="email" name="email" id="email" />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" v-model="password" name="password" id="password" />
    </div>
    <div v-if="method.localeCompare('Sign Up') === 0" class="form-group">
      <label for="confirm_password">Confirm Password</label>
      <input type="password" v-model="confirmPassword" name="confirm_password" id="confirm_password" />
    </div>
    <p v-if="feedback" class="alert" v-bind:class="{'good-alert': goodAlert}">{{ feedback }}</p>
    <button @click="signUpOrLogin" class="btn btn-primary">{{ method }}</button>
    <button @click="switchMethod" class="btn btn-primary">Switch to {{ otherMethod }}</button>
  </form>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SignupForm',
  data () {
    return {
      email: null,
      password: null,
      confirmPassword: null,
      method: 'Login',
      otherMethod: 'Sign Up',
      goodAlert: false,
      feedback: null
    }
  },
  computed: mapGetters(['allUsers']),
  methods: {
    ...mapActions(['addUser', 'logInorOut']),
    switchMethod () {
      if (this.method.localeCompare('Sign Up') === 0) {
        this.method = 'Login'
        this.otherMethod = 'Sign Up'
      } else {
        this.method = 'Sign Up'
        this.otherMethod = 'Login'
      }
    },
    /**
     * based on method calls login() or continue:
     * validates email and checks if it is already signed up
     * validate passwords and checks if they are the same
     * adds the new user to the users list
     */
    signUpOrLogin () {
      this.goodAlert = false
      if (this.method.localeCompare('Login') === 0) {
        this.login()
      } else if (this.method.localeCompare('Sign Up') === 0) {
        if (this.validateEmail(this.email)) {
          if (this.validatePassword(this.password)) {
            var user = {
              email: this.email,
              password: this.password
            }
            var found = false
            for (let i = 0; i < this.allUsers.length; i++) {
              if (this.email.localeCompare(this.allUsers[i].email) === 0) {
                found = true
                break
              }
            }
            if (found) {
              this.feedback = 'Email already exists'
            } else {
              this.addUser(user)
              this.switchMethod()
              this.goodAlert = true
              this.feedback = 'Email added successfully'
            }
          }
        }
      }
    },
    /**
     * checks if the email and password are correct and exists
     * routes to the home page
     */
    login () {
      var found = false
      var correctPassword = false
      for (let i = 0; i < this.allUsers.length; i++) {
        if (this.email.localeCompare(this.allUsers[i].email) === 0) {
          found = true
          if (this.password.localeCompare(this.allUsers[i].password) === 0) {
            correctPassword = true
          }
          break
        }
      }
      if (found) {
        if (correctPassword) {
          this.logInorOut(true)
          this.$router.push({ name: 'Home' })
        } else {
          this.feedback = 'Wrong Password'
        }
      } else {
        this.feedback = 'Email does not exist'
      }
    },
    /**
     * basic check of password
     * can be improved to check more than length
     */
    validatePassword (password) {
      if (password.length < 6) {
        this.feedback = 'Password must be more than 6 characters'
        return false
      } else if (password !== this.confirmPassword) {
        this.feedback = 'Passwords are not the same'
        return false
      } else {
        return true
      }
    },
    /**
     * basic check of email
     */
    validateEmail (email) {
      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email
        )
      ) {
        return true
      }
      this.feedback = 'You have entered an invalid email address!'
      return false
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/scss/_variables.scss";
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
  input[type="password"],
  input[type="email"] {
    width: 100%;
    height: 2rem;
    padding: 0.25rem;
    margin: 0.5rem 0 1rem 0;
    border: 1px $light-color dotted;
    border-radius: 5px;
    &:focus {
      outline: none;
      border: 3px $primary-color solid;
    }
  }
  .btn {
    border-radius: 5px;
    margin-right: 10px;
  }
  .alert {
    color: $primary-color;
    padding-bottom: 1rem;
  }
  .good-alert {
      color: green;
  }
}
</style>
