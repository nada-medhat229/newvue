<template>
  <div class="card">
    <img :src="imagePath(imagesrc)" alt="" />
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">
      {{ msg }}
    </p>
    <a href="#" class="btn">{{ btnname }}</a>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Card",
  props: {
    msg: String,
    title: String,
    btnname: String,
    imagesrc: String,
  },
  methods: {
    // eslint-disable-next-line vue/return-in-computed-property, vue/no-dupe-keys
    imagePath(pic) {
      return require("../assets/" + pic);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  background-color: #fff;
  width: 18rem;
  padding: 0;
}
img {
  width: 100%;
  height: 100%;
}
.card-title {
  margin: 40px 0 0;
}
.card-text {
  color: black;
  padding: 10px;
}
.btn {
  background-color: #42b983;
  color: #fff;
  border-radius: 15px;
  padding: 10px;
  text-decoration: none;
  margin: 20px;
  &:hover {
    background-color: #2c3e50;
    color: #fff;
  }
}
</style>
