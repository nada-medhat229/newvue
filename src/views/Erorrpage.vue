<template>
  <div>
    <p>
      not found 404
      <button @click="redirectMe()">go to home</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "ContactView",
  methods: {
    redirectMe() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
