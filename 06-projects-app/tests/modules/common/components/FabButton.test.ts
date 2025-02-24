import { shallowMount } from '@vue/test-utils';
import FabBotton from '@/modules/common/components/FabBotton.vue';

describe('<FabButton/>', () => {
  test('renders with default position', () => {
    const wrraper = shallowMount(FabBotton);

    // console.log(wrraper.html());
    expect(wrraper.props().position).toBe('bottom-right');
    const buttonClasses = wrraper.find('button').classes();
    const classesToHave = ['btn', 'btn-circle', 'btn-secondary', 'fixed', 'bottom-right'];

    expect(buttonClasses).toEqual(classesToHave);
  });

  test('renders with top-left position', () => {
    const wrraper = shallowMount(FabBotton, {
      props: {
        position: 'top-left',
      },
    });

    const button = wrraper.find('button');

    expect(button.classes()).toContain('top-left');
  });

  test('renders with top-right position', () => {
    const wrraper = shallowMount(FabBotton, {
      props: {
        position: 'top-right',
      },
    });

    const button = wrraper.find('button');

    expect(button.classes()).toContain('top-right');
  });

  test('renders slot content inside button', () => {
    const wrraper = shallowMount(FabBotton, {
      slots: {
        default: '<span>Hola</span>',
      },
    });

    const slotContent = wrraper.find('button span');

    expect(slotContent.exists()).toBe(true);
    expect(slotContent.text()).toBe('Hola');
  });
});
