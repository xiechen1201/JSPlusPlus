<template>
  <div>
    <h1>List</h1>
    <ul>
      <li v-for="n in 10" :key="n">This is a list item #{{ n }} of my list.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  mounted() {
    console.log("List mounted!");
  },
  unmounted() {
    console.log("List unmounted!");
  }
};
</script>

<style></style>
