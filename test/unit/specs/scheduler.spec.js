import Vue from 'vue';
import Scheduler from '@/components/scheduler';

describe('scheduler.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Scheduler);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.scheduler h1').textContent)
      .to.equal('Welcome to Your Vue.js App');
  });
});
