import CustomModal from '@/modules/common/components/CustomModal.vue';
import { mount } from '@vue/test-utils';

describe('<CustomModal/>', () => {
  test('renders dialog with default state', () => {
    const wrraper = mount(CustomModal);

    const modal = wrraper.find('.modal');
    expect(modal.attributes('open')).toBeUndefined();
  });

  test('renders dialog with header, body and footer slots', () => {
    const wrraper = mount(CustomModal, {
      slots: {
        header: '<span>Header content</span>',
        body: '<span>Body content</span>',
        footer: '<span>Footer content</span>',
      },
    });

    expect(wrraper.find('.border-b').text()).toContain('Header content');
    expect(wrraper.find('.my-5').text()).toContain('Body content');
    expect(wrraper.find('.border-t').text()).toContain('Footer content');
  });

  test('opens and closes dialog when open prop changes', async () => {
    const wrraper = mount(CustomModal, {
      props: {
        open: true,
      },
    });

    const modal = wrraper.find('.modal');
    expect(modal.attributes('open')).toBeDefined();

    const modalBackground = wrraper.find('.modal-backdrop');
    expect(modalBackground.exists()).toBe(true);
    expect(modalBackground.classes()).toEqual([
      'modal-backdrop',
      'fixed',
      'top-0',
      'left-0',
      'z-10',
      'bg-black',
      'opacity-40',
      'w-screen',
      'h-screen',
    ]);

    // Cambiando prop
    await wrraper.setProps({ open: false });
    expect(modal.attributes('open')).toBeUndefined();
    expect(wrraper.find('.modal-backdrop').exists()).toBe(false);
  });
});
