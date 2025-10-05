---
sidebar: false
---

# 🚀 My Projects

Explore my portfolio of UX/UI design and development projects. Click on any project to view the full case study on Behance.

<div class="projects-grid">

<div class="project-card">
  <div class="project-icon">🎬</div>
  <h2>Movie Streaming Web</h2>
  <p>A modern web-based streaming platform with an intuitive interface for discovering and watching movies.</p>
  <div class="project-tags">
    <span class="tag">UX/UI Design</span>
    <span class="tag">Web Design</span>
    <span class="tag">Figma</span>
  </div>
  <a href="https://www.behance.net/gallery/227189429/KMOVIE(Movie-Streaming-Website)" target="_blank" class="project-link">View on Behance →</a>
</div>

<div class="project-card">
  <div class="project-icon">📱</div>
  <h2>Movie Streaming App</h2>
  <p>A mobile application designed for seamless movie streaming experience on iOS and Android devices.</p>
  <div class="project-tags">
    <span class="tag">Mobile Design</span>
    <span class="tag">UX Research</span>
    <span class="tag">Prototyping</span>
  </div>
  <a href="https://www.behance.net/gallery/227489795/Streamly-Application" target="_blank" class="project-link">View on Behance →</a>
</div>

<div class="project-card">
  <div class="project-icon">📔</div>
  <h2>Diary Mobile App</h2>
  <p>A personal diary application with beautiful design and features for journaling, mood tracking, and memories.</p>
  <div class="project-tags">
    <span class="tag">Mobile App</span>
    <span class="tag">UI Design</span>
    <span class="tag">User Experience</span>
  </div>
  <a href="https://www.behance.net/gallery/231227173/Rojan-Diary-Application-UIUX" target="_blank" class="project-link">View on Behance →</a>
</div>

<div class="project-card">
  <div class="project-icon">🎓</div>
  <h2>E-Learning Website</h2>
  <p>An educational platform designed to provide engaging online learning experiences for students and educators.</p>
  <div class="project-tags">
    <span class="tag">Web Design</span>
    <span class="tag">Education</span>
    <span class="tag">Responsive</span>
  </div>
  <a href="https://behance.net/samaamurtadha" target="_blank" class="project-link">View on Behance →</a>
</div>

</div>

<style>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  padding: 0 1rem;
}

.project-card {
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 40px rgba(0,0,0,0.08);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.25);
  border-color: #667eea;
}

.project-card:hover::before {
  transform: scaleX(1);
}

.project-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.project-card h2 {
  font-size: 1.8rem !important;
  font-weight: 700 !important;
  color: #334155 !important;
  margin-bottom: 1rem !important;
  text-align: center;
  border: none !important;
  padding: 0 !important;
}

.project-card p {
  font-size: 1.05rem !important;
  line-height: 1.7 !important;
  color: #64748b !important;
  margin-bottom: 1.5rem !important;
  text-align: center;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.tag {
  display: inline-block;
  padding: 0.4rem 1rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  color: #667eea;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(102, 126, 234, 0.2);
}

.project-link {
  display: inline-block;
  width: 100%;
  text-align: center;
  padding: 0.9rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white !important;
  text-decoration: none !important;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.project-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .project-card {
    padding: 2rem;
  }
  
  .project-icon {
    font-size: 3rem;
  }
  
  .project-card h2 {
    font-size: 1.5rem !important;
  }
}
</style>

---

## 💡 Want to collaborate?

I'm always excited to work on new projects and creative challenges. Feel free to [get in touch](/#get-in-touch) to discuss your ideas!