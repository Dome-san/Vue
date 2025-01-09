<template>
  <!-- Contenedor principal -->
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi amor</span>
    </div>

    <!-- Componente para mostrar los mensajes del chat -->
    <ChatMessages :messages="messages" :isLoading="isLoading" />

    <!-- Componente para enviar mensajes -->
    <MessageBox @send-message="onMessage" />
  </div>
</template>
<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import { useChat } from '@/composables/useChat';

// Desestructuración del composable para obtener estados y métodos necesarios
const { messages, onMessage, isLoading } = useChat();
</script>
