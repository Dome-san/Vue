import { ref } from 'vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import type { YesNoResponse } from '@/interfaces/yes-no.response';
import { sleep } from '@/helpers/sleep';

// Hook personalizado para gestionar el chat
export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);
  const isLoading = ref(false);

  // Función para obtener respuesta de la API
  const getHerResponse = async () => {
    const resp = await fetch('https://yesno.wtf/api');
    const data = (await resp.json()) as YesNoResponse;
    return data;
  };

  // Función que gestiona un nuevo mensaje de entrada
  const onMessage = async (text: string) => {
    if (text.length === 0) return;

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Añade el mensaje del usuario a la lista de mensajes
    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
      timestamp,
      reaction: null,
    });

    if (!text.endsWith('?')) return;

    isLoading.value = true;
    await sleep(1);

    const { answer, image } = await getHerResponse();
    const translatedAnswer = answer === 'yes' ? 'sí' : answer;

    // Añade el mensaje de respuesta al chat
    messages.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: translatedAnswer,
      image,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      reaction: null,
    });
    isLoading.value = false;
  };

  // Retorna las referencias y funciones necesarias para el chat
  return {
    messages,
    onMessage,
    isLoading,
  };
};
