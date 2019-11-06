<template>
<div>
    <BaseHero
        :title="'Hallo, '+$store.state.user.displayName"
        subtitle=""
        />
    <section class="hero is-light">
        <div class="hero-body">
            <div class="columns">
                <div class="column is-8 is-offset-2 box">
                   <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input class="input" type="text" :value="$store.state.user.displayName">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Picture</label>
                        <img :src="$store.state.user.photoURL" :alt="$store.state.user.displayName">
                        <div class="control">
                            <input class="input" type="text" :value="$store.state.user.photoURL">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">E-Mail</label>
                        <div class="control">
                            <input class="input" type="text" :value="$store.state.user.email">
                        </div>
                    </div>
                    <div class="field" v-if="$store.state.user.providerData[0].providerId">
                        Du hast Dich mit <span class="tag is-primary">{{$store.state.user.providerData[0].providerId}}</span> angemeldet!
                    </div>
                    <div v-else>
                        <label class="label">Old Password</label>
                        <div class="control">
                            <input class="input" type="password">
                        </div>
                        <label class="label">New Password</label>
                        <div class="control">
                            <input class="input" type="password">
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
import { fireauth } from '@/plugins/firebase.js'
export default {
  data() {
    return {}
  },
  methods: {
    updateProfile() {
      fireauth.currentUser
        .updateProfile({
          displayName: this.displayName,
          photoURL: this.photoURL
        })
        .then(function() {
          // Update successful.
        })
        .catch(function(error) {
          // An error happened.
        })
    },
    resendVerificationEmail() {
      fireauth.currentUser
        .sendEmailVerification()
        .then(function() {
          // Email sent.
        })
        .catch(function(error) {
          // An error happened.
        })
    },
    updatePassword() {
      fireauth.currentUser
        .updatePassword(this.newpassword)
        .then(function() {
          // Update successful.
        })
        .catch(function(error) {
          // An error happened.
        })
    }
  }
}
</script>
