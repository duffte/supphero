<template>
<section class="hero is-fullheight is-light">
  <div class="container">
    <div class="columns">
        <div class="column is-6 box">  
            <h2 class="title">Registrieren</h2>  
            <button class="button is-fullwidth" @click="googleSignUp">Google</button>
            <button class="button is-fullwidth" @click="facebookSignUp">Facebook</button>
            
            <div class="sign-up">
                <div class="control">
                  <input class="input is-fullwidth" type="text" v-model="email" placeholder="Email">
                </div>
                <div class="control">
                  <input class="input is-fullwidth" type="password" v-model="password" placeholder="Password">
                </div>                
                <button class="button is-fullwidth is-primary" @click="signUp">Anmelden</button>
            </div>
        </div> 
        <div class="column is-6 box">  
            <h2 class="title">Anmelden</h2>    
            <button class="button is-fullwidth" @click="googleSignUp">Google</button>
            <button class="button is-fullwidth" @click="facebookSignUp">Facebook</button>

            <div class="login">
                <div class="control">
                  <input class="input is-fullwidth" type="text" v-model="loginemail" placeholder="Email">
                </div>
                <div class="control">
                  <input class="input is-fullwidth" type="password" v-model="loginpassword" placeholder="Password">
                </div>
                <button class="button is-fullwidth is-primary" @click="login">Einloggen</button>
            </div>
            <button class="button is-warning" @click="resetPassword">Reset Password</button>
        </div>
    </div>
  </div>
</section>
</template>

 <script>
import firebase, { fireauth } from '@/plugins/firebase.js'
export default {
  name: 'Login',
  data() {
    return {
      isLoading: false,
      email: '',
      password: '',
      loginemail: '',
      loginpassword: ''
    }
  },
  methods: {
    googleSignUp() {
      this.$store
        .dispatch('signInWithGoogle')
        .then(() => {
          console.log('inside then statement on login')
        })
        .catch(e => {
          console.log(e.message)
        })
    },
    facebookSignUp() {
      this.$store
        .dispatch('signInWithFacebook')
        .then(() => {
          console.log('inside then statement on login')
        })
        .catch(e => {
          console.log(e.message)
        })
    },
    login: function() {
      fireauth
        .signInWithEmailAndPassword(this.loginemail, this.loginpassword)
        .then(() => {
          this.isLoading = true
        })
        .then(
          user => {
            this.$router.replace('/')
          },
          err => {
            alert('Oops. ' + err.message)
          }
        )
    },
    signUp: function() {
      fireauth.createUserWithEmailAndPassword(this.email, this.password).then(
        user => {
          this.$router.replace('/')
        },
        err => {
          alert('Oops. ' + err.message)
        }
      )
    },
    resetPassword() {
      fireauth
        .sendPasswordResetEmail(this.resetEmail)
        .then(function() {
          // Email sent.
        })
        .catch(function(error) {
          // An error happened.
        })
    }
  }
}
</script>

 <style scoped>
</style>