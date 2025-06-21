<script setup>

import ChapterSlider from "../components/ChapterSlider.vue";
import SlideNumber from "../components/SlideNumber.vue";
</script>

<template>
  <ChapterSlider />

  <div class="bg-section slidev-layout new-section">
    <figure class="flex flex-col justify-center text-center items-center"
    >
      <img
          :src="$attrs.media"
          class="rounded-lg object-cover"
          style="max-height: 30vh; max-width: 100%;"
      />
      <figcaption class="mt-2 text-4 w-full text-center font-bold p-4">
        {{ $attrs.caption }}
      </figcaption>
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