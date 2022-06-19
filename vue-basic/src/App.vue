<template>
  <div>
    <header>
      <nav-bar></nav-bar>
    </header>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar },
  name: "App",
};
</script>

<style lang="scss">
header{
  display: flex;
  justify-content: end;
  margin-top: 0rem;
  margin-right: 3rem;
}
</style>
