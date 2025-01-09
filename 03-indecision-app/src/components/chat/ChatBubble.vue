<template>
  <div v-if="itsMine" class="flex justify-end">
    <div class="bg-blue-200 text-black p-3 rounded-lg max-w-xs relative shadow">
      <div class="break-words">{{ message }}</div>
      <span class="text-xs text-gray-600 block text-right mt-1">
        {{ timestamp }}
      </span>

      <ReactionBox :reaction="reaction" :addReaction="addReaction" />
    </div>
  </div>

  <div v-else class="flex">
    <div class="bg-gray-300 text-black p-3 rounded-lg max-w-xs relative shadow">
      <div class="break-words">
        <span class="capitalize">{{ message }}</span>
        <img
          v-if="image"
          :src="image"
          alt="YesNoImage"
          class="w-52 h-52 object-cover rounded-md mt-2"
        />
      </div>
      <span class="text-xs text-gray-600 block text-right mt-1">
        {{ timestamp }}
      </span>

      <ReactionBox :reaction="reaction" :addReaction="addReaction" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ReactionBox from './ReactionBox.vue';

interface Props {
  message: string;
  itsMine: boolean;
  timestamp: string;
  image?: string;
  reaction: string | null;
  addReaction: (reaction: string) => void;
  isLoading: boolean;
}

defineProps<Props>();
</script>
