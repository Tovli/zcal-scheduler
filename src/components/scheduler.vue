<template>
  <div class="scheduler">
    <div v-for="day in days" class="day">
      <span>{{day.header}}</span>
    </div>
  </div>
</template>

<script>
  import { daysInMonth, dayOfTheWeek } from '../services/time-ranger';

  export default {
    name: 'scheduler',
    data() {
      const now = new Date();
      const dayCount = daysInMonth(now);
      const days = Array.of(...(new Array(dayCount + 1).keys()))
        .slice(1, dayCount + 1)
        .map(i => ({ header: `${i} ${dayOfTheWeek(now, i)}` }));
      return {
        days,
      };
    },
  };
</script>

<style scoped>

  .scheduler {
    border-top: 1px solid skyblue;
    border-left: 1px solid skyblue;
    width: 100%;
    height: 100%;
  }

  .day {
    float: left;
    display: inline-block;
    text-align: left;
    /*border: 1px solid green;*/
    width: calc(100% / 7);
    height: calc(100% / 5);
    padding: 1em;
    /*margin: 1em;*/
    background-color: aliceblue;
    border-bottom: 1px solid dodgerblue;
    border-right: 1px solid dodgerblue;
  }

</style>
