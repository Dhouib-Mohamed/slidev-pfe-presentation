<script setup>

import SlideNumber from '../components/SlideNumber.vue';
</script>

<template>
  <CornerCurves class="absolute left-0 top-0 transform rotate-90" />
  <div class="slidev-layout">
    <div class="flex flex-col items-center justify-center h-full">
        <h1 class="font-bold mb-4 text-center" style="font-size: 3.5rem; line-height: 4rem ">
            {{$attrs.chapter}}
        </h1>
    </div>
  </div>

  <SlideNumber/>
</template>

<style scoped>

</style>