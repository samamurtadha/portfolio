<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.2rem;
  color: #5c6fff;
  text-shadow: 0 2px 6px rgba(0,0,0,0.2);
}

.card {
  margin: 2rem auto;
  padding: 2.5rem;
  max-width: 450px;
  background-color: #272727;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.35);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 22px rgba(0,0,0,0.45);
}

button {
  display: inline-block;
  margin-bottom: 1rem;
  background: #5c6fff;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
  padding: 0.7em 1.4em;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}
button:hover {
  background: #424cdf;
  transform: scale(1.05);
}

p {
  font-size: 1rem;
  line-height: 1.6;
  color: #ddd;
  margin: 0.6rem 0;
}

a {
  color: #5c6fff;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
}
a:hover {
  color: #ffd966;
  text-decoration: underline;
}

code {
  background: rgba(255,255,255,0.1);
  padding: 0.2em 0.5em;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.95rem;
}

.read-the-docs {
  margin-top: 1.5rem;
  font-style: italic;
  color: #aaa;
}
</style>
