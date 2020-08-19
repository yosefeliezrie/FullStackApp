<template>
  <div class="hello">
    <input type="email" name="email" placeholder="email" v-model="email" />
    <input type="password" name="password" placeholder="password" v-model="password" />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  name: "Register",
  data() {
    return {
      email: "test@test.com",
      password: "password"
    };
  },
  // Send data to api
  methods: {
    async register() {
      // grab the email and pass from state
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
      console.log(response.data);
      console.log("User: " + response.email);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
