<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <h1>zcal scheduler</h1>
    <div class="scheduler-box">
      <scheduler></scheduler>
    </div>
  </div>
</template>

<script>
  import Scheduler from './components/scheduler';

  export default {
    name: 'app',
    components: {
      Scheduler,
    },
  };
</script>

<style>
  html,
  body,
  #app {
    height: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  h1 {
    height: 10%;
    line-height: 5;
  }

  .scheduler-box {
    height: 90%;
    padding: 0 2em 2em;
  }
</style>
