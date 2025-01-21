import PokemonPictures from '@pokemon/components/PokemonPictures.vue';
import { mount } from '@vue/test-utils';

describe('<PokemonPictures/>', () => {
  const pokemonId = 25;
  const imageSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;

  test('should render the hidden image when showPokemon prop is false', () => {
    const wrapper = mount(PokemonPictures, {
      props: {
        showPokemon: false,
        pokemonId,
      },
    });

    const image = wrapper.find('img');
    const attributes = image.attributes();

    expect(attributes).toEqual(
      expect.objectContaining({
        class: 'brightness-0 h-[200px]',
        src: imageSource,
      }),
    );
  });

  test('should render the image when showPokemon prop is true', () => {
    const wrapper = mount(PokemonPictures, {
      props: {
        showPokemon: true,
        pokemonId,
      },
    });

    console.log(wrapper.html());
    const image = wrapper.find('img');
    const attributes = image.attributes();

    expect(attributes).toEqual(
      expect.objectContaining({
        alt: 'pokemon image',
        class: 'fade-in h-[200px]',
        src: imageSource,
      }),
    );
  });
});
