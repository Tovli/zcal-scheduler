<template>
  <div class="scheduler">
    <div v-for="day in days" class="day" v-bind:class="{ isToday: day.isToday, isEmpty: day.pad }">
      <span class="date">{{day.date}}</span>
      <span class="dayOfTheWeek">{{day.dayOfTheWeek}}</span>
    </div>
  </div>
</template>

<script>
  import { WEEK_DAYS, dayCountInMonth, dayOfTheWeek } from '../services/time-ranger';

  export default {
    name: 'scheduler',
    data() {
      const now = new Date();
      const dayCount = dayCountInMonth(now);
      const days = Array.of(...(new Array(dayCount + 1).keys()))
        .slice(1, dayCount + 1)
        .map((date) => {
          const entry = {
            date,
            dayOfTheWeek: dayOfTheWeek(now, date),
            isToday: now.getDate() === date,
          };
          return entry;
        });

      const firstDayIndex = WEEK_DAYS.findIndex(day => day === days[0].dayOfTheWeek);
      const lastDayIndex = WEEK_DAYS.findIndex(day => day === days[days.length - 1].dayOfTheWeek);
      // pad with empty blocks, for week alignment
      for (let i = 0; i < firstDayIndex; i += 1) {
        days.unshift({ pad: true });
      }
      for (let i = lastDayIndex + 1; i < 7; i += 1) {
        days.push({ pad: true });
      }

      return {
        days,
      };
    },
  };
</script>

<style scoped>

  .scheduler {
    border-top: 1px solid lightskyblue;
    border-left: 1px solid lightskyblue;
    width: 100%;
    height: 100%;
  }

  .day {
    position: relative;
    float: left;
    display: inline-block;
    text-align: left;
    width: calc(100% / 7);
    height: calc(100% / 6);
    padding: 1em;
    /*margin: 1em;*/
    background-color: #fafafa;
    border-bottom: 1px solid skyblue;
    border-right: 1px solid skyblue;
  }

  .day.isEmpty:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #eee;
  }

  .day .date {
    display: inline-block;
    padding: .4em 0;
    width: 1.8em;
    height: 1.8em;
    border-radius: 50%;
    font-size: 80%;
    line-height: 1.2;
    text-align: center;
    font-weight: bold;
    color: #fff;
    background-color: #ccc;
  }

  .day .dayOfTheWeek {
    color: #999;
  }

  .day.isToday .date {
    /*background-color: dodgerblue;*/
    background-color: lightskyblue;
  }

  .day.isToday .dayOfTheWeek {
    color: dodgerblue;
    /*color: lightskyblue;*/
  }

</style>
