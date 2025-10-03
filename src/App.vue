<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="pages">
    <Navbar />
    <router-view />
  </div>
</template>

<style scoped>
.pages {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #ffffff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

/* Remove background gradient to match clean white design */
/* Logo styles can be removed if not used */
</style>

<style>
/* Global styles for smooth page transitions */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}

/* Selection color */
::selection {
  background: #667eea;
  color: white;
}

::-moz-selection {
  background: #667eea;
  color: white;
}
</style>