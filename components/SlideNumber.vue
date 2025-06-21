<template>
  <div class="slide-number">
    {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
  </div>
</template>

<style>
.slide-number {
  position: fixed;
  right: 2rem;
  bottom: 1.5rem;
  font-size: 1.1rem;
  color: #888;
  z-index: 1000;
  pointer-events: none;
  user-select: none;
}
</style>
