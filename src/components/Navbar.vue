<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="logo">
        <router-link to="/">
          <span class="logo-text">Samaa</span>
          <span class="logo-dot">.</span>
        </router-link>
      </div>
      
      <button class="mobile-menu-btn" @click="toggleMenu" :class="{ active: isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul class="nav-links" :class="{ active: isMenuOpen }">
        <li v-for="(page, index) in pages" :key="index">
          <router-link 
            :to="page.path" 
            :class="{ active: isActive(page.path) }"
            @click="closeMenu"
          >
            <span class="nav-icon">{{ page.icon }}</span>
            <span>{{ page.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)

const pages = [
  { name: "Home", path: "/", icon: "🏠" },
  { name: "Projects", path: "/projects", icon: "💼" },
  { name: "Contact", path: "/contacts", icon: "📧" }
]

const isActive = (path) => {
  return route.path === path
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
}

.navbar-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

/* Logo Styles */
.logo {
  z-index: 1001;
}

.logo a {
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 800;
  color: white;
  transition: transform 0.3s ease;
}

.logo a:hover {
  transform: scale(1.05);
}

.logo-text {
  letter-spacing: 1px;
}

.logo-dot {
  color: #ffd700;
  font-size: 2rem;
  margin-left: 2px;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.2); }
}

/* Navigation Links */
.nav-links {
  display: flex;
  list-style: none;
  gap: 10px;
  margin: 0;
  padding: 0;
}

.nav-links li a {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  padding: 12px 24px;
  border-radius: 50px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-icon {
  font-size: 1.1rem;
  transition: transform 0.3s ease;
}

.nav-links li a:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.nav-links li a:hover .nav-icon {
  transform: scale(1.2);
}

.nav-links li a.active {
  background: white;
  color: #667eea;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.nav-links li a.active .nav-icon {
  animation: bounce 0.6s ease;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 1001;
}

.mobile-menu-btn span {
  width: 28px;
  height: 3px;
  background: white;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.mobile-menu-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.mobile-menu-btn.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(8px, -8px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar-container {
    padding: 0 30px;
    height: 70px;
  }

  .logo a {
    font-size: 1.5rem;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    flex-direction: column;
    gap: 0;
    padding: 20px 30px;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    max-height: calc(100vh - 70px);
    overflow-y: auto;
  }

  .nav-links.active {
    transform: translateX(0);
  }

  .nav-links li {
    width: 100%;
  }

  .nav-links li a {
    width: 100%;
    padding: 16px 20px;
    font-size: 1.1rem;
    justify-content: flex-start;
    border-radius: 12px;
  }

  .nav-links li a:hover,
  .nav-links li a.active {
    background: rgba(255, 255, 255, 0.2);
    color: white;
  }

  .nav-links li a.active {
    font-weight: 700;
  }
}

@media (max-width: 480px) {
  .navbar-container {
    padding: 0 20px;
  }

  .logo a {
    font-size: 1.3rem;
  }
}
</style>
