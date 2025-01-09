import { mount } from '@vue/test-utils';
import MyCounter from '@/components/MyCounter.vue';

describe('<MyCounter/>', () => {
  test('Should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
      },
    });
  });
});
