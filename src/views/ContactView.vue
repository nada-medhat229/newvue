<template>
  <div class="container">
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
      sapiente error, esse quas libero autem, delectus architecto laboriosam
      dolores voluptas unde natus voluptate voluptatem maiores dolorum eius
      impedit recusandae doloremque?
    </p>
    <div class="d-flex mb-4 justify-content-evenly">
      <input type="text" class="form-control w-50" v-model="newplayer" />
      <button class="btn btn-success w-25" @click="players.push(newplayer)">
        Add
      </button>
    </div>

    <ul class="list-group d-flex">
      <li
        class="border rounded p-2 my-2"
        v-for="(player, i) in players"
        :key="i"
      >
        {{ player }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ContactView",
  data() {
    return {
      players: ["ahmed", "mohamed", "islam", "ali"],
      newplayer: "khaled",
    };
  },
};
</script>
