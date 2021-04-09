<template>
  <div class="member">
    <div class="imageholder">
      <img :src="imageURL">
    </div>
    <h1>{{playerName}}</h1>
  </div>
  <button v-on:click="switchState">Click me</button>
  <div v-if="show">
    <h1>Diluc is hawt 🔥</h1>
  </div>
</template>

<script>
export default {
  name: 'Member',
  props: {
    playerName: String,
    imageURL: String,
  },
  data(){
    return{
      show: false
    }
  },
  methods:{
    switchState(){
      this.show = !this.show
    },
  }
}
</script>

<style>
.member{
  width: 300px;
  border: 1px solid black;
  border-radius: 15px;
}

.imageholder{
  width: 300px;
}
.imageholder img{
  width: 300px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
</style>