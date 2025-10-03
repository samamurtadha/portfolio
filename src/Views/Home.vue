<script setup>
import MyPic from '../assets/myPic.jpg'
import CvPic from '../assets/cvPic.png'

const downloadCV = () => {
  // Add your CV download link here
  window.open(CvPic, '_blank')
}

const scrollToProjects = () => {
  // Navigate to projects section
  document.querySelector('.cv-section')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="text-content">
          <p class="greeting">Hello, I'm</p>
          <h1 class="name">Samaa Murtadha</h1>
          <h2 class="title">UX/UI Designer</h2>
          <p class="description">
            Creating beautiful and intuitive digital experiences that make a difference.
            Passionate about user-centered design and innovative solutions.
          </p>
          
          <div class="btns">
            <button class="hire-btn" @click="scrollToProjects">
              <span>View My Work</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button class="view-btn" @click="downloadCV">
              <span>Download CV</span>
            </button>
          </div>

          <!-- Social Links -->
          <div class="social-links">
            <a href="https://github.com/samaamurtadha" target="_blank" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/samaa-murtadha-0962a32b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="mailto:samaamurtadha@gmail.com" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>

        <div class="image-content">
          <div class="image-wrapper">
            <img :src="MyPic" alt="Samaa Murtadha" class="my-pic">
            <div class="image-background"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section">
      <h2 class="section-title">My Expertise</h2>
      <div class="skills-grid">
        <div class="skill-card">
          <div class="skill-icon">🎨</div>
          <h3>UI Design</h3>
          <p>Creating beautiful interfaces with attention to detail</p>
        </div>
        <div class="skill-card">
          <div class="skill-icon">👤</div>
          <h3>UX Research</h3>
          <p>Understanding user needs through research and testing</p>
        </div>
        <div class="skill-card">
          <div class="skill-icon">📱</div>
          <h3>Prototyping</h3>
          <p>Building interactive prototypes for validation</p>
        </div>
        <div class="skill-card">
          <div class="skill-icon">💡</div>
          <h3>Design Systems</h3>
          <p>Developing scalable and consistent design systems</p>
        </div>
      </div>
    </section>

    <!-- CV Section -->
    <section class="cv-section">
      <h2 class="section-title">My Resume</h2>
      <div class="cv-container">
        <img :src="CvPic" alt="Resume" class="cv-pic">
        <button class="download-cv-btn" @click="downloadCV">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download Full CV
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
}

/* Hero Section */
.hero-section {
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding: 80px 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
}

.hero-section::before {
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 1;
  width: 100%;
}

.text-content {
  color: white;
}

.greeting {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 10px;
  opacity: 0.9;
  animation: fadeInUp 0.8s ease;
}

.name {
  font-size: 4rem;
  font-weight: 800;
  margin: 0 0 10px 0;
  line-height: 1.1;
  background: linear-gradient(to right, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeInUp 0.8s ease 0.2s backwards;
}

.title {
  font-size: 2rem;
  font-weight: 600;
  color: #ffd700;
  margin: 0 0 20px 0;
  animation: fadeInUp 0.8s ease 0.4s backwards;
}

.description {
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.9;
  margin-bottom: 40px;
  max-width: 500px;
  animation: fadeInUp 0.8s ease 0.6s backwards;
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

.btns {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  animation: fadeInUp 0.8s ease 0.8s backwards;
}

.hire-btn,
.view-btn {
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.hire-btn {
  background: white;
  color: #667eea;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.hire-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.view-btn {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.view-btn:hover {
  background: white;
  color: #667eea;
  transform: translateY(-3px);
}

.social-links {
  display: flex;
  gap: 20px;
  animation: fadeInUp 0.8s ease 1s backwards;
}

.social-link {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.social-link:hover {
  background: white;
  color: #667eea;
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.image-content {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeInRight 1s ease;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.image-wrapper {
  position: relative;
  width: 400px;
  height: 400px;
}

.my-pic {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 8px solid white;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 2;
  animation: float-image 3s ease-in-out infinite;
}

@keyframes float-image {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.image-background {
  position: absolute;
  width: 120%;
  height: 120%;
  top: -10%;
  left: -10%;
  background: linear-gradient(45deg, #ffd700, #ff6b6b);
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.5;
  z-index: 1;
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.7; }
}

/* Skills Section */
.skills-section {
  padding: 100px 60px;
  background: white;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 60px;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(to right, #667eea, #764ba2);
  border-radius: 2px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.skill-card {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.skill-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.skill-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.skill-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
}

.skill-card p {
  color: #666;
  line-height: 1.6;
}

/* CV Section */
.cv-section {
  padding: 100px 60px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.cv-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.cv-pic {
  width: 100%;
  max-width: 600px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  margin-bottom: 30px;
  border: 3px solid white;
  transition: transform 0.3s ease;
}

.cv-pic:hover {
  transform: scale(1.02);
}

.download-cv-btn {
  padding: 16px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.download-cv-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }

  .text-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .name {
    font-size: 3rem;
  }

  .image-wrapper {
    width: 300px;
    height: 300px;
  }

  .btns {
    justify-content: center;
  }

  .social-links {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .hero-section,
  .skills-section,
  .cv-section {
    padding: 60px 30px;
  }

  .name {
    font-size: 2.5rem;
  }

  .title {
    font-size: 1.5rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .btns {
    flex-direction: column;
    width: 100%;
  }

  .hire-btn,
  .view-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
