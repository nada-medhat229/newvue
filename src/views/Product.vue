<template>
  <div>
    <div class="container">
      <div class="row">
        <Card
          v-for="frind in friends"
          :key="frind.id"
          :imagesrc="frind.imagesrc"
          :title="frind.title"
          :msg="frind.msg"
          :btnname="frind.btn"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/card.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Product",
  components: {
    // eslint-disable-next-line no-undef
    Card,
  },
  data() {
    return {
      friends: [
        {
          id: 1,
          imagesrc: "pet8.png",
          title: "ykk",
          msg: "sit amet accusamus excepturi perferendis autem eligendi! Laborum quos deleniti amet?",
          btn: "go to",
        },
        {
          id: 2,
          imagesrc: "pet7.png",
          title: "popi",
          msg: "lljsjlasnk sit amet accusamus excepturi autem eligendi! Laborum quos deleniti amet?",
          btn: "learn more",
        },
        {
          id: 3,
          imagesrc: "category-3.png",
          title: "dog",
          msg: "sit amet accusamus jdfjsdofksdjlijodjijos perferendis autem! Laborum quos deleniti amet?",
          btn: "more than",
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
img {
  width: 150px;
  height: 150px;
}
.row {
  display: flex;
  justify-content: space-between;
}
</style>
