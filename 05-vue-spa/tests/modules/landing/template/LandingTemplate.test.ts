import LandingTemplate from '@/modules/landing/template/LandingTemplate.vue';
import router from '@/router';
import { shallowMount } from '@vue/test-utils';
import { RouterView } from 'vue-router';

describe('<LandingTemplate/>', () => {
  test('should be render correctly with RouterView', () => {
    const wrapper = shallowMount(LandingTemplate, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.find('header').exists()).toBe(true);
    expect(wrapper.find('main').exists()).toBe(true);
    expect(wrapper.find('footer').exists()).toBe(true);
    expect(wrapper.find('footer').html()).toContain('Acme Corporation');
    expect(wrapper.find('footer').html()).toContain(
      `${new Date().getFullYear()} Acme Corporation. Derechos reservados`,
    );
    expect(wrapper.findComponent({ name: 'RouterView' }).exists()).toBe(true);
    expect(wrapper.findComponent(RouterView).exists()).toBe(true);
  });
});
