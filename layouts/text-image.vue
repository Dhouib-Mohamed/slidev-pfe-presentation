<script setup lang="ts">
import CornerCurves from '../components/corner-curves/CornerCurves.vue';
import SlideNumber from '../components/SlideNumber.vue'
import ChapterSlider from '../components/ChapterSlider.vue';
</script>

<template>
  <ChapterSlider />
  <div class="slidev-layout">
    <CornerCurves class="absolute bottom-0 right-0 transform scale-x--100" />
    <div
      class="grid grid-cols-10"
      :class="$attrs.reverse ? 'gap-16' : 'gap-8'"
    >
      <div
          class="prose"
        :class="[
              $attrs.imgSmall ? 'col-span-6' : 'col-span-4',
              { 'order-1': $attrs.reverse }
            ]"
      >
        <div class="my-auto z-10 relative">
          <slot name="default"></slot>
        </div>
      </div>
      <figure class="relative flex flex-col justify-center items-center" :class="$attrs.imgSmall ? 'col-span-4' : 'col-span-6'">
        <img
          :src="$attrs.media"
          class="rounded-lg object-cover"
          style="max-height: 30vh; max-width: 100%;"
        />
        <figcaption class="mt-2 text-5 w-full text-center font-bold">
          {{ $attrs.caption }}
        </figcaption>
        <img
          v-if="$attrs.additionalImg"
          :src="$attrs.additionalImg"
          class="rounded-lg object-cover"
          style="margin-top: 50px"
        />
      </figure>
    </div>
  </div>

  <SlideNumber />
</template>
