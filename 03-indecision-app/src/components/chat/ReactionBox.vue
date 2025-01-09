<template>
  <!-- Se muestra el contenido solo si no hay una reacción seleccionada -->
  <div v-if="!reaction" class="mt-2">
    <!-- Botón para mostrar las reacciones disponibles, solo visible si no hay reacción -->
    <button
      v-if="!showReactions && !reaction"
      @click="toggleReactions"
      class="text-xl text-gray-600 hover:text-blue-500 focus:outline-none"
    >
      😊
    </button>

    <!-- Contenedor de botones de reacciones, solo visible si `showReactions` es true -->
    <div v-if="showReactions" class="mt-2 flex space-x-2">
      <button @click="addReaction('👍')" class="text-xl">👍</button>
      <button @click="addReaction('❤️')" class="text-xl">❤️</button>
      <button @click="addReaction('😂')" class="text-xl">😂</button>
      <button @click="addReaction('😢')" class="text-xl">😢</button>
    </div>
  </div>

  <!-- Si ya se seleccionó una reacción, se muestra la reacción seleccionada -->
  <div v-if="reaction" class="mt-2 text-xs text-gray-600">
    <span>{{ reaction }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Definición de las props para este componente
interface Props {
  reaction: string | null;
  addReaction: (reaction: string) => void;
}

// Estado reactivo que controla la visibilidad de las reacciones
const showReactions = ref(false);

// Función que alterna la visibilidad de las reacciones
const toggleReactions = () => {
  showReactions.value = !showReactions.value;
};

// Definición de las propiedades que este componente recibirá
defineProps<Props>();
</script>
