import PokemonGame from '@/modules/pokemon/pages/PokemonGame.vue';
import { mount } from '@vue/test-utils';

import { usePokemonGame } from '@/modules/pokemon/composables/usePokemonGame';
import type { Mock } from 'vitest';
import { GameStatus } from '@/modules/pokemon/interfaces';

vi.mock('@/modules/pokemon/composables/usePokemonGame', () => ({
  usePokemonGame: vi.fn(),
}));

const pokemonOptions = [
  {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
  },
  {
    name: 'ivysaur',
    url: 'https://pokeapi.co/api/v2/pokemon/2/',
  },
  {
    name: 'venusaur',
    url: 'https://pokeapi.co/api/v2/pokemon/3/',
  },
  {
    name: 'charmander',
    url: 'https://pokeapi.co/api/v2/pokemon/4/',
  },
];

describe('<PokemonGame/>', () => {
  test('should initialize with default values', () => {
    (usePokemonGame as Mock).mockReturnValue({
      randomPokemon: undefined,
      isLoading: true,
      gameStatus: GameStatus.Playing,
      pokemonOptions: [],
      checkAnswer: vi.fn(),
      getNextRound: vi.fn(),
    });
    const wrapper = mount(PokemonGame);

    expect(wrapper.get('h1').text()).toBe('Espere por favor');
    expect(wrapper.get('h1').classes()).toEqual(['text-3xl']);

    expect(wrapper.get('h3').text()).toBe('Cargando pokemons');
    expect(wrapper.get('h3').classes()).toEqual(['animate-pulse']);
  });

  test('should render <PokemonPictures/> and <PokemonOptions/>', () => {
    (usePokemonGame as Mock).mockReturnValue({
      randomPokemon: pokemonOptions.at(0),
      isLoading: false,
      gameStatus: GameStatus.Playing,
      pokemonOptions: pokemonOptions,
      checkAnswer: vi.fn(),
      getNextRound: vi.fn(),
    });

    const wrapper = mount(PokemonGame);
    const imageURL =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/undefined.svg';
    const pokemons = pokemonOptions.map((p) => p.name);

    expect(wrapper.find('img').attributes('src')).toBe(imageURL);

    const buttons = wrapper.findAll('.capitalize.disabled\\:shadow-none.disabled\\:bg-gray-100');
    expect(buttons).length(4);
    buttons.forEach((button) => {
      expect(pokemons).toContain(button.text());
    });
  });

  test('should render button for a new game', () => {
    (usePokemonGame as Mock).mockReturnValue({
      randomPokemon: pokemonOptions.at(0),
      isLoading: false,
      gameStatus: GameStatus.Won,
      pokemonOptions: pokemonOptions,
      checkAnswer: vi.fn(),
      getNextRound: vi.fn(),
    });

    const wrapper = mount(PokemonGame);

    const button = wrapper.find('[data-test-id="btn-new-game"]');

    expect(button.text()).toBe('Prueba otra vez');
  });

  test('should call the getNextRound function when the button is clicked', async () => {
    const spyNextRoundFn = vi.fn();

    (usePokemonGame as Mock).mockReturnValue({
      randomPokemon: pokemonOptions.at(0),
      isLoading: false,
      gameStatus: GameStatus.Won,
      pokemonOptions: pokemonOptions,
      checkAnswer: vi.fn(),
      getNextRound: spyNextRoundFn,
    });

    const wrapper = mount(PokemonGame);
    const button = wrapper.find('[data-test-id="btn-new-game"]');

    await button.trigger('click');

    expect(spyNextRoundFn).toHaveBeenCalled();
    expect(spyNextRoundFn).toHaveBeenCalledWith(4);
  });
});
