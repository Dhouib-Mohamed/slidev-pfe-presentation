<script setup lang="ts">
const chapters = [
  { title: 'Project Context', start: 3 },
  { title: 'Problem Analysis', start: 6 },
  { title: 'Track 1 ', start: 12 },
  { title: 'Track 2', start: 23 },
  { title: 'Track 3', start: 35 },
  { title: 'Conclusion', start: 48 },
]
</script>

<template>
  <div class="chapter-slider">
    <div
      v-for="(chapter, idx) in chapters"
      :key="chapter.title"
      class="chapter"
      :class="{ active: $slidev.nav.currentPage >= chapter.start && $slidev.nav.currentPage < (chapters[idx + 1]?.start || Infinity) }"
    >
      {{ chapter.title }}
    </div>
  </div>
</template>

<style scoped>
.chapter-slider {
  margin: 2rem auto 0.5rem;
  width: fit-content;
  align-self: center;
  display: flex;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 1rem;
  padding: 0.5rem 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
.chapter {
  font-weight: 500;
  color: #888;
  transition: color 0.2s;
  margin: auto 1rem;
}
.chapter.active {
  color: #222;
  text-decoration: underline;
}
</style>
