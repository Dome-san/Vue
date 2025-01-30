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
  <FabBotton @click="() => console.log('clicked')">
    <AddCircle />
  </FabBotton>
</template>

<script setup lang="ts">
import FabBotton from '@/modules/common/components/FabBotton.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
</script>
