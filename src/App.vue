<template>
  <!-- <img alt="minecraft logo" src="./assets/mine2.png"> -->
  <!-- <HelloWorld msg="Welcome to the Pupoin's website! "/> -->

  <puLayout></puLayout>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import puLayout from './components/puLaout.vue'

export default {
  name: 'App',

  components: {
    // HelloWorld,
    puLayout
},

  data() {
    return {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ],
      titledd: 'this is title'
    }
  },

  methods: {
    
  },

  props: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
