<script setup lang="ts">
import SlideNumber from '../components/SlideNumber.vue'
</script>

<template>
  <div class="slidev-layout">
    <div class="grid grid-cols-2 gap-16">
      <div class="prose">
        <slot name="default"></slot>
      </div>
      <div class="prose">
        <slot name="right"></slot>
      </div>
    </div>
  </div>

  <SlideNumber />
</template>
