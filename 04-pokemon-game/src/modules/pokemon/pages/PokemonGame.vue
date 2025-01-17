<template>
  <section v-if="isLoading" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando pokemons</h3>
  </section>
  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="m-5">Quien es este pokemon?</h1>
    <h3>{{ randomPokemon }}</h3>

    <!-- Pokemon Pictures -->
    <PokemonPictures />
    <!-- Pokemon Options -->
    <PokemonOptions />
  </section>
</template>

<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPictures from '../components/PokemonPictures.vue';
import { usePokemonGame } from '../composables/usePokemonGame';

const { randomPokemon, isLoading } = usePokemonGame();
</script>
