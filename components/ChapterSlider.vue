<script setup lang="ts">
const chapters = [
  { title: 'Project Context', start: 3 },
  { title: 'Problem Analysis', start: 7 },
  { title: 'Track 1 ', start: 12 },
  { title: 'Track 2', start: 21 },
  { title: 'Track 3', start: 33 },
  { title: 'Conclusion', start: 41 },
]
</script>

<template>
  <div class="chapter-slider">
    <div
      v-for="(chapter, idx) in chapters"
      :key="chapter.title"
      class="chapter"
      :class="{ active: $slidev.nav.currentPage >= chapter.start && $slidev.nav.currentPage < (chapters[idx + 1]?.start || Infinity) }"
      v-on:click="console.log('Navigating to chapter:', chapter.title); $slidev.nav.goto(chapter.start)"
    >
      {{ chapter.title }}
    </div>
  </div>
</template>

<style scoped>
.chapter-slider {
  margin: 1.5rem auto 0;
  width: fit-content;
  align-self: center;
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
  font-size: 0.9rem;
}
.chapter {
  font-weight: 500;
  color: #888;
  transition: color 0.2s;
  margin: auto 1rem;
}
.chapter.active {
  background: rgba(82, 99, 95, 0.4);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
}
</style>
