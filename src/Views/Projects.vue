<script setup>
import { ref } from 'vue'

const selectedCategory = ref('all')

const projects = ref([
  {
    id: 1,
    title: 'Movie Streaming Website',
    category: 'web',
    description: 'A Netflix-style streaming platform with elegant UI, personalized recommendations, and seamless video playback experience.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/6f7fce227189429.Y3JvcCwzOTEyLDMwNjAsODcsMA.png',
    technologies: ['Figma', 'Adobe XD', 'UI/UX Design'],
    link: 'https://www.behance.net/gallery/227189429/KMOVIE%28Movie-Streaming-Website%29',
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 2,
    title: 'Diary Mobile Application',
    category: 'mobile',
    description: 'Personal diary app with mood tracking, secure entries, photo attachments, and beautiful journal templates.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/c8ad9b231227173.Y3JvcCwxNDAwLDEwOTUsMCww.png',
    technologies: ['Figma', 'Prototyping', 'User Research'],
    link: 'https://www.behance.net/gallery/231227173/Rojan-Diary-Application-UIUX',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 3,
    title: 'Movie Streaming Appication',
    category: 'mobile',
    description: 'On-the-go movie streaming app with offline downloads, custom playlists, and intuitive navigation.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/577260227489795.Y3JvcCwzODM1LDMwMDAsODUsMA.jpeg',
    technologies: ['Sketch', 'Principle', 'Figma'],
    link: 'https://www.behance.net/gallery/227489795/Streamly-Application',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 4,
    title: 'E-Learning Website',
    category: 'web',
    description: 'Interactive learning platform with video courses, quizzes, progress tracking, and student-teacher collaboration.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
    technologies: ['Figma', 'Photoshop', 'Wireframing'],
    link: '',
    color: 'from-blue-500 to-cyan-500'
  }
])

const categories = [
  { value: 'all', label: 'All Projects', icon: '🎨' },
  { value: 'web', label: 'Web Design', icon: '💻' },
  { value: 'mobile', label: 'Mobile Apps', icon: '📱' }
]

const filteredProjects = ref(projects.value)

const filterProjects = (category) => {
  selectedCategory.value = category
  if (category === 'all') {
    filteredProjects.value = projects.value
  } else {
    filteredProjects.value = projects.value.filter(p => p.category === category)
  }
}
</script>

<template>
  <div class="projects-container">
    <!-- Hero Section -->
    <section class="projects-hero">
      <div class="hero-content">
        <h1 class="hero-title">My Projects</h1>
        <p class="hero-subtitle">
          Explore my design work showcasing creativity, user-centered thinking, 
          and attention to detail across various platforms and industries.
        </p>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="filter-section">
      <div class="filter-container">
        <h2 class="filter-title">Browse by Category</h2>
        <div class="filter-buttons">
          <button 
            v-for="cat in categories" 
            :key="cat.value"
            @click="filterProjects(cat.value)"
            :class="['filter-btn', { active: selectedCategory === cat.value }]"
          >
            <span class="filter-icon">{{ cat.icon }}</span>
            <span>{{ cat.label }}</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="projects-section">
      <div class="projects-grid">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="project-card"
        >
          <div class="project-image-wrapper">
            <img :src="project.image" :alt="project.title" class="project-image">
            <div :class="['project-overlay', `bg-gradient-to-br ${project.color}`]">
              <a :href="project.link" class="view-project-btn">
                <span>View Project</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="project-content">
            <div class="project-header">
              <h3 class="project-title">{{ project.title }}</h3>
              <span class="project-category">{{ project.category === 'web' ? '💻 Web' : '📱 Mobile' }}</span>
            </div>
            
            <p class="project-description">{{ project.description }}</p>
            
            <div class="project-technologies">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="tech-badge"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredProjects.length === 0" class="empty-state">
        <div class="empty-icon">📭</div>
        <h3>No projects found</h3>
        <p>Try selecting a different category</p>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2 class="cta-title">Interested in working together?</h2>
        <p class="cta-description">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <a href="#/contact" class="cta-button">
          <span>Get In Touch</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.projects-container {
  width: 100%;
  min-height: 100vh;
}

/* Hero Section */
.projects-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 120px 60px 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.projects-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="2" fill="white" opacity="0.1"/></svg>');
  animation: float 20s linear infinite;
}

@keyframes float {
  0% { transform: translateY(0); }
  100% { transform: translateY(-100px); }
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 20px;
  animation: fadeInUp 0.8s ease;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  animation: fadeInUp 0.8s ease 0.2s backwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Filter Section */
.filter-section {
  padding: 60px 60px 40px;
  background: white;
}

.filter-container {
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
}

.filter-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 30px;
}

.filter-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 15px 30px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border: 2px solid transparent;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.filter-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: #667eea;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.filter-icon {
  font-size: 1.2rem;
}

/* Projects Section */
.projects-section {
  padding: 60px 60px 100px;
  background: white;
  min-height: 400px;
}

.projects-grid {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 40px;
}

.project-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  animation: fadeInScale 0.6s ease;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.project-image-wrapper {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card:hover .project-image {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(102, 126, 234, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.view-project-btn {
  padding: 15px 30px;
  background: white;
  color: #667eea;
  border-radius: 50px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.view-project-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.project-content {
  padding: 30px;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 15px;
  gap: 15px;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin: 0;
  flex: 1;
}

.project-category {
  padding: 6px 15px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #555;
  white-space: nowrap;
}

.project-description {
  font-size: 1rem;
  color: #666;
  line-height: 1.7;
  margin-bottom: 20px;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tech-badge {
  padding: 8px 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 80px 20px;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.empty-icon {
  font-size: 5rem;
  margin-bottom: 20px;
}

.empty-state h3 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
}

.empty-state p {
  font-size: 1.1rem;
  color: #666;
}

/* CTA Section */
.cta-section {
  padding: 100px 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  text-align: center;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 20px;
}

.cta-description {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  margin-bottom: 40px;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 18px 40px;
  background: white;
  color: #667eea;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

/* Gradient background utilities */
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}

.from-purple-500 { --tw-gradient-from: #a855f7; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
.to-pink-500 { --tw-gradient-to: #ec4899; }

.from-blue-500 { --tw-gradient-from: #3b82f6; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
.to-cyan-500 { --tw-gradient-to: #06b6d4; }

.from-orange-500 { --tw-gradient-from: #f97316; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
.to-red-500 { --tw-gradient-to: #ef4444; }

.from-teal-500 { --tw-gradient-from: #14b8a6; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
.to-green-500 { --tw-gradient-to: #22c55e; }

.from-indigo-500 { --tw-gradient-from: #6366f1; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
.to-purple-500 { --tw-gradient-to: #a855f7; }

.from-pink-500 { --tw-gradient-from: #ec4899; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
.to-rose-500 { --tw-gradient-to: #f43f5e; }

/* Responsive Design */
@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
  }

  .hero-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .projects-hero,
  .filter-section,
  .projects-section,
  .cta-section {
    padding-left: 30px;
    padding-right: 30px;
  }

  .projects-hero {
    padding-top: 80px;
    padding-bottom: 60px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .filter-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .filter-btn {
    justify-content: center;
  }

  .cta-title {
    font-size: 2rem;
  }
}
</style>
