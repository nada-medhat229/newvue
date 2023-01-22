<template>
  <div>
    <ul>
      <li>{{ testname }}</li>
      <li>{{ testcompany.companyname }}</li>
      <li>{{ testcompany.age }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "test",
  props: {
    testcompany: Object,
    testname: String,
  },
};
</script>
