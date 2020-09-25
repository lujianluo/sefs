<template>
  <div>
    <div class="error" v-if="error">{{error.message}}</div>
    <form @submit.prevent="pressed">
      Register
      <div class="email">
        <input type="email" v-model="email" placeholder="email" />
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="password" />
      </div>
      <div class="name">
        <input type="name" v-model="name" placeholder="name" />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore'


export default {
  data() {
    return {
      email: "",
      password: "",
      name: "",
      error: "",
      
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
            firebase.firestore.collection("profiles").doc(user.user.uid).set({
                        name: this.name
                    })
          this.$router.replace({ name: "Home" });
        })
        .catch(error => (this.error = error));
    }
  }
};
</script>