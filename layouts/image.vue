<script setup>

import ChapterSlider from "../components/ChapterSlider.vue";
import SlideNumber from "../components/SlideNumber.vue";
</script>

<template>
  <ChapterSlider />

  <div class="bg-section slidev-layout new-section" style="padding-top: 0">
    <figure class="flex flex-col justify-center text-center items-center"
    >
      <figcaption class="mt-2 text-6 w-full text-center font-bold p-5">
        {{ $attrs.caption }}
      </figcaption>
      <img
          v-click
          :src="$attrs.media"
          class="rounded-lg object-cover"
          style="max-height: 26vh; max-width: 100%;"
      />
    </figure>
  </div>
  <AsGraphic
      type="zigzag"
      class="absolute top-20 -right-30"
  />
  <SlideNumber/>

</template>

<style scoped>

</style>