<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld
      msg="Welcome to Your Vue.js App"
      :nameee="name"
      :username="user.username"
      :userage="user.age"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  data() {
    return {
      name: "instructor",
      user: {
        username: "noor",
        age: 24,
      },
    };
  },

  components: {
    HelloWorld,
  },
};
</script>
