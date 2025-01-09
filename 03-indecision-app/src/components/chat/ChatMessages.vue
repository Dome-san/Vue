<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Componente de burbuja para cada mensaje -->
      <ChatBubble
        v-for="message in messages"
        :key="message.id"
        :message="message.message"
        :itsMine="message.itsMine"
        :timestamp="message.timestamp"
        :image="message.image"
        :reaction="message.reaction"
        :addReaction="addReaction(message.id)"
        :isLoading="isLoading"
      />

      <!-- Indicador de carga -->
      <SvgLoading :isLoading="isLoading" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue';
import SvgLoading from './SvgLoading.vue';

// Definición de las props
interface Props {
  messages: ChatMessage[];
  isLoading: boolean;
}

const props = defineProps<Props>();

// Referencia al contenedor del chat para desplazamiento
const chatRef = ref<HTMLDivElement | null>(null);

// Observador para desplazar automáticamente al final del chat cuando cambian los mensajes
watch(props.messages, () => {
  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth',
    });
  }, 100);
});

// Función para agregar reacciones a los mensajes
const addReaction = (messageId: number) => (reaction: string) => {
  const message = props.messages.find((msg) => msg.id === messageId);
  if (message && !message.reaction) {
    message.reaction = reaction;
  }
};
</script>
