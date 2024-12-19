<template>
  <h1 className="text-3xl font-bold underline">Hello world!</h1>
  <hr />
  <MyCounter :value="1" />
  <MyCounterScipt :value="2" />
  <MyCounterScipt2 :value="3" />
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScipt from './components/MyCounterScript.vue';
import MyCounterScipt2 from './components/my-counter-script/MyCounterScript2.vue';
</script>
