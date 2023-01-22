<template>
  <div class="about">
    <HelloWorld msg="welcome to about page" />
    <Test :testname="testname" :testcompany="company" />
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import HelloWorld from "../components/HelloWorld.vue";
import Test from "../components/test.vue";

export default {
  name: "AboutView",
  data() {
    return {
      name: "instructor",
      user: {
        username: "noor",
        age: 24,
      },
      testname: "testing",
      company: {
        companyname: "eltahrer",
        age: 1990,
      },
    };
  },
  components: {
    HelloWorld,
    Test,
  },
};
</script>
