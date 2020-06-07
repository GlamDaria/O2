<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "@/components/Header";
// import styles from "@/styles/main.module.scss";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss"></style>
