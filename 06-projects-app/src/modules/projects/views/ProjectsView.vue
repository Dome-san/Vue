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
        <tr
          v-for="(project, index) in projectsStore.projectsWithcompletion"
          :key="project.id"
          class="hover"
        >
          <th>{{ index + 1 }}</th>
          <RouterLink class="flex p-5" :to="`/project/${project.id}`">
            {{ project.name }}
          </RouterLink>
          <td>{{ project.taskCount }}</td>
          <td>
            <progress
              class="progress progress-primary w-56"
              :value="project.completion"
              max="100"
            ></progress>
            {{ project.completion }}%
          </td>
          <th>
            <input
              type="checkbox"
              class="checkbox checkbox-primary"
              :checked="project.checkBoxInput"
            />
          </th>
        </tr>
      </tbody>
    </table>
  </div>
  <InputModal
    :open="modalOpen"
    @close="modalOpen = false"
    @value="projectsStore.addProject"
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
import { useProjectsStore } from '../store/projects.store';
import { RouterLink } from 'vue-router';

const modalOpen = ref(false);
const customModalOpen = ref(false);

const projectsStore = useProjectsStore();

// const onNewValue = (projectName: string) => {
//   projectsStore.projectList.push({
//     id: '3',
//     name: projectName,
//     tasks: [],
//   });
// };
</script>
