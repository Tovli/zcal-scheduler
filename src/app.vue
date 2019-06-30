<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <h1>zcal scheduler</h1>
    <div class="scheduler-box">
      <scheduler v-on:addTask="showTaskModal"></scheduler>
    </div>
    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">{{modalHeader}}</h3>
      <div slot="body">{{modalBody}}</div>
      <!--<footer slot="footer">{{modalFooter}}</footer>-->
    </modal>
  </div>
</template>

<script>
  import Scheduler from './components/scheduler';
  import Modal from './components/modal';

  export default {
    name: 'app',
    components: {
      Scheduler,
      Modal,
    },
    data() {
      return {
        showModal: false,
        modalHeader: '',
        modalBody: '',
        modalFooter: '',
      };
    },
    methods: {
      showTaskModal({ header, body, footer }) {
        this.showModal = true;
        this.modalHeader = header;
        this.modalBody = body;
        this.modalFooter = footer;
      },
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
