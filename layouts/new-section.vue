<script setup lang="ts">
import SlideNumber from '../components/SlideNumber.vue'
import ChapterSlider from "../components/ChapterSlider.vue";
import CornerCurves from "../components/corner-curves/CornerCurves.vue";
</script>

<template>
  <ChapterSlider />
  <CornerCurves class="absolute left-0 top-0 transform rotate-90" />
  <div class="bg-section slidev-layout new-section">
    <div class="flex justify-center text-center items-center" style="align-items: center">
      <div class="prose w-3/4">
        <slot></slot>
      </div>
    </div>
  </div>
  <AsGraphic
      type="zigzag"
      class="absolute top-20 -right-30"
  />
  <SlideNumber />
</template>

<style>
.slidev-layout.new-section {
  h1 {
    @apply text-primary text-4xl leading-20 mb-0 font-title font-extrabold;
  }

  h1 + p {
    @apply mt-4 opacity-100;
  }

  p > img {
    @apply w-2/3 mx-auto;
  }
}
</style>
