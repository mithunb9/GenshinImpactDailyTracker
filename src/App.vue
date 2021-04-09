<template>
  <Member playerName="Diluc"
          imageURL="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/10/diluc-genshin-impact-1.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5"
  />

</template>

<script>
import Member from "./components/player/Member"
export default {
  name: 'App',
  components: {
    Member
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
