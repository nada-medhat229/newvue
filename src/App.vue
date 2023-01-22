<template>
  <div id="app">
    <nav>
      <router-link to="/" exact>Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/product">product</router-link> |
      <router-link to="/contact">contact</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &:hover {
      color: #2c3e50;
    }
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
