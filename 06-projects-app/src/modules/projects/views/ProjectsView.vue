<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Proyecto</th>
          <th>Tareas</th>
          <th>Avance</th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover">
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
      </tbody>
    </table>
  </div>
  <InputModal
    :open="modalOpen"
    @close="modalOpen = false"
    @value="onNewValue($event)"
    placeholder="Ingresa el nombre del proyecto"
    title="Nuevo proyecto"
    subTitle="Escribe un nombre unico para diferenciarlos"
  />

  <CustomModal :open="customModalOpen">
    <template #hearder>
      <h1 class="text-3xl">Titulo del modal</h1>
    </template>
    <template #body>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </template>
    <template #actions>
      <div class="flex justify-end mt-3">
        <button @click="customModalOpen = false" class="btn mr-4">Close</button>
        <button @click="customModalOpen = false" class="btn btn-primary">Aceptar</button>
      </div>
    </template>
  </CustomModal>
  <FabBotton @click="modalOpen = true">
    <AddCircle />
  </FabBotton>
  <FabBotton @click="customModalOpen = true" class="bottom-left">
    <ModalIcol />
  </FabBotton>
</template>

<script setup lang="ts">
import CustomModal from '@/modules/common/components/CustomModal.vue';
import FabBotton from '@/modules/common/components/FabBotton.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
import ModalIcol from '@/modules/common/icons/ModalIcol.vue';
import { ref } from 'vue';

const modalOpen = ref(false);
const customModalOpen = ref(false);

const onNewValue = (projectName: string) => {
  console.log({ projectName });
};
</script>
