<template>
  <div class="steam-portfolio">
    <!-- Notification bar 
    <div v-if="isVisible" class="alert-bar">
      <div class="alert-content">
        <span class="alert-icon">🚧</span>
        <div class="alert-message">
          This website is currently under construction. Some features may be unavailable.
        </div>
        <button class="close-btn" @click="closeAlert" aria-label="Close alert">×</button>
      </div>
    </div>
    -->
    <HeaderView />

    <div class="content">
      <!-- LB from backgrounds.gallery -->
      <video autoplay muted loop playsinline>
        <source
          src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1876560/52fda1e426d9e5407530e51b1d8959f1b17b564d.mp4"
          type="video/mp4" />
      </video>
      <!-- Main Profile Section -->
      <div class="profile-wrapper">
        <div class="profile-left">
          <!-- Name and Level Header with Avatar -->
          <div class="profile-header">
            <div class="avatar-section avatar neon">
              <div class="avatar neon">
                <img src="/images/webpage/avatar.jpg" alt="Profile Avatar" class="avatar-main" />
              </div>
            </div>
            <div class="profile-name-loc-desc">
              <div class="profile-name">
                <h1>Renzomrtn</h1>
              </div>
              <div class="location">
                <img src="https://flagcdn.com/16x12/ph.png" alt="Philippines" />
                <span>Philippines</span>
              </div>
              <div class="desc">
                <p>Photographer | Developer | Tech Enthusiast</p>
                <p>I play games too from time to time.</p>
              </div>
            </div>
          </div>

          <!-- Recent Projects Section -->
          <div class="recent-projects">
            <div class="section-header">
              <p>Recent Projects</p>
              <span class="activity-time">23.4 hours past 2 weeks</span>
            </div>
            <div class="project-holder">
              <div v-if="projects && projects.length" class="project-list">
                <NuxtLink v-for="project in projects.slice(0, 3)" :key="project._id" :to="project._path"
                  class="project-item">
                  <div class="top">
                    <div class="project-thumbnail">
                      <img :src="project.image" :alt="project.title" />
                    </div>
                    <div class="project-info">
                      <p>{{ project.title }}</p>
                      <div class="project-meta">
                        <span class="hours">{{ project.hours || '0' }} hrs on record</span>
                        <span class="last-played">Date: {{ formatDate(project.date) }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="bottom">
                    <div class="project-progress">
                      <span>Project Progress</span>
                      <span class="progress-count">{{ project.progress || 0 }} of 100</span>
                      <div class="progress-bar">
                        <div class="progress-fill" :style="{ width: (project.progress || 0) + '%' }"></div>
                      </div>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="recent-photos">
            <div class="section-header">
              <p>Recent Photos</p>
            </div>
            <div class="photos-holder">
              <div v-if="photos && photos.length" class="photo-list">
                <NuxtLink v-for="photos in photos.slice(0, 3)" :key="photos._id" :to="photos._path"
                  class="photo-item">
                  <div class="top">
                    <div class="photo-thumbnail">
                      <img :src="photos.image" :alt="photos.title" />
                    </div>
                    <div class="photo-info">
                      <p>{{ photos.title }}</p>
                      <div class="photo-meta">
                        <span class="last-played">Captured on {{ formatDate(photos.date) }}</span>
                      </div>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div class="profile-right">
          <div class="level-badge-header">
            <div class="level">
              <p class="level-num">Level <span class="circle">21</span></p>
            </div>

            <div class="badge-card">
              <div class="featured-badge">
                <img src="/images/webpage/clbadge.png" alt="Badge" class="badge-image" />
              </div>
              <div class="text">
                <p class="badge-text">Community Leader</p>
                <p class="badge-subtext">900 EXP</p>
              </div>
            </div>
          </div>

          <div class="info-section">
            <div class="status-card">
              <p class="status-text">Currently Online</p>
            </div>

            <div class="projects-block">
              <h6>Projects <span class="count">15</span></h6>
            </div>

            <div class="photography-block">
              <h6><a href="photography">Photography</a></h6>
            </div>

            <div class="guides-block">
              <h6><a href="guides">Guides</a></h6>
            </div>

            <div class="micro-block">
              <h6><a href="micro-creds">Micro-Credentials</a></h6>
            </div>

            <div class="about-block">
              <h6><a href="AboutView">About</a></h6>
            </div>

            <div class="contact-block">
              <h6><a href="ContactView">Contact</a></h6>
            </div>

            <div class="resume-block">
              <h6><a href="/files/MartinFajardo-Resume.pdf" target="_blank">Resume</a></h6>
            </div>

            <div class="organizations-block">
              <h6>Organizations <span class="count">3</span></h6>
              <div class="org-badges">
                <!-- Add organization badges here -->
                <div class="org">
                  <img src="/images/webpage/org1.jpg" alt="Org 1" class="org-badge" />
                  <div class="texts">
                    <h6 class="org-name">UNC SHS Supreme Student Government</h6>
                    <p>2022 - 2023</p>
                  </div>
                </div>
                <div class="org">
                  <img src="/images/webpage/org2.jpg" alt="Org 2" class="org-badge" />
                  <div class="texts">
                    <h6 class="org-name">UNC Reserve Officers Training Corps</h6>
                    <p>2023 - Present</p>
                  </div>
                </div>
                <div class="org">
                  <img src="/images/webpage/org3.jpg" alt="Org 3" class="org-badge" />
                  <div class="texts">
                    <h6 class="org-name">Black Box Society</h6>
                    <p>2023 - Present</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <FooterView />
  </div>
</template>

<script setup>
const { data: photos } = await useAsyncData('photos', () =>
  queryContent('photos')
    .sort({ _file: -1 })
    .find()
)

const { data: projects } = await useAsyncData('projects', () =>
  queryContent('projects')
    .sort({ _file: -1 })
    .find()
)

const formatDate = (date) => {
  if (!date) return 'Recently'
  const d = new Date(date)
  return d.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
}

import { ref } from 'vue'

const isVisible = ref(true)

const closeAlert = () => {
  isVisible.value = false
}
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/motiva-sans');

body {
  font-family: 'motiva-sans', sans-serif;
}

.steam-portfolio {
  background-color: #000000;
  min-height: 100vh;
  color: #c7d5e0;
  font-family: "Motiva Sans", Arial, sans-serif;
  display: flex;
  flex-direction: column;
}

/* Main Content */
.content {
  /* background: url("/images/webpage/hs.jpg") no-repeat center center; backup bg*/
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.content video {
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  height: auto;
  object-fit: cover;
  transform: translateX(-50%);
  z-index: 0;
}

.content .profile-wrapper {
  position: relative;
  z-index: 1;
  color: white;
}

/* Profile Wrapper */
.profile-wrapper {
  background: radial-gradient(circle at 20% 30%, rgba(99, 4, 136, 0.9), transparent 70%),
    radial-gradient(circle at 80% 20%, rgba(50, 0, 40, 0.9), transparent 70%),
    radial-gradient(circle at 50% 80%, rgba(150, 40, 130, 0.9), transparent 70%),
    rgba(87, 9, 74, 0.1);
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 1rem;
  padding: 3rem 2rem 3rem 2rem;
  width: 50%;
}

/* Left Section */
.profile-left {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0;
}

.avatar-section {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  overflow: hidden;
}

.avatar-main {
  width: 7.5rem;
  height: auto;
  display: block;
}

.avatar {
  position: relative;
  padding: 6px;
}

.avatar img {
  object-fit: cover;
}

.avatar.neon::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 1px;
  box-shadow:
    0 0 8px  #00fff0,
    0 0 16px #00c8ff,
    0 0 32px #0066ff;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}

.profile-header {
  height: 160px;
  display: flex;
  justify-content: left;
  align-items: flex-start;
  gap: 2.5rem;
}

.profile-name-loc-desc {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.profile-name h1 {
  color: #fff;
  font-size: 25px;
  font-weight: 100;
  margin: 0 0 0.5rem 0;
}

.location {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.desc p {
  color: #8f98a0;
  margin: 0;
  font-size: 0.9rem;
}

.stat-label {
  font-size: 0.85rem;
  color: #8f98a0;
  text-align: center;
}

/* Recents */
.recent-projects, .recent-photos {
  background: rgba(0, 0, 0, 0.3);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgb(46, 0, 42);
  padding: 10px 16px 10px 16px;
}

.project-holder, .photos-holder {
  padding: 15px;
}

.section-header p {
  color: #fff;
  font-size: 16px;
  margin: 0;
}

.activity-time {
  font-size: 0.85rem;
  color: #8f98a0;
}

.project-list, .photo-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.top {
  display: flex;
  gap: 1rem;
}

.project-item, .photo-item {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: rgb(22, 22, 22);
  padding: 1rem;
  border-radius: 4px;
  text-decoration: none;
  color: #ebebebeb;
  transition: background 0.3s;
}

.project-item:hover, .photo-item:hover {
  background: rgba(0, 0, 0, 0.5);
}

.project-thumbnail {
  width: 180px;
  height: 100px;
  flex-shrink: 0;
  border-radius: 4px;
  overflow: hidden;
}

.photo-thumbnail {
  width: 300px;
  height: 100px;
  flex-shrink: 0;
  border-radius: 4px;
  overflow: hidden;
}

.project-thumbnail img, .photo-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-info, .photo-info {
  flex: 1;
}

.project-info p, .photo-info p {
  font-size: 14px;
  margin: 0 0 0.5rem 0;
}

.project-meta {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 13px;
  color: #8f98a0;
  margin-bottom: 1rem;
  text-align: end;
}

.photo-meta {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 13px;
  color: #8f98a0;
  margin-top: 0.5rem;
}

.project-progress {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.8rem;
  padding: 10px;
  background-color: rgba(46, 13, 36, 0.93);
}

.progress-bar {
  flex: 1;
  height: 8px;
  background: rgba(82, 72, 72, 0.4);
  border-radius: 4px;
  border: rgba(0, 0, 0) 1px solid;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #4f5152;
  transition: width 0.3s;
}

.progress-count {
  color: #8f98a0;
}

/* Right Sidebar */
.profile-right {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.level-badge-header {
  height: 160px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.level-num {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 25px;
  font-weight: 100;
}

.level-num p {
  margin: 0;
}

.circle {
  width: 45px;
  height: 45px;
  border: 2px solid #c4c4c4;
  /* outline */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge-card {
  background: rgba(0, 0, 0, 0.3);
  padding: 0.5rem;
  border-radius: 4px;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.badge-card p {
  margin: 0;
  font-size: small;
}

.badge-image {
  width: 50px;
}

.info-section {
  background: rgba(0, 0, 0, 0.3);
  color: #ebebebeb;
  padding: 1rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-section a {
  color: #ebebebeb;
  text-decoration: none;
}

.organizations-block {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.org {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  height: 100%;
}

.org-badges {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.status-card p {
  color: #57cbde;
  font-size: 1.2rem;
}

.org-badge {
  width: 4.2rem;
}

.org-name {
  margin: 0;
  font-size: 0.8rem;
}

.texts p {
  font-size: 12px;
  color: #8f98a0;
}

.count {
  color: #8f98a0;
  font-size: 1.5rem;
  font-weight: 100;
}

/* All Projects Grid */
.all-projects-section {

  max-width: 1400px;
  margin: 4rem auto;
  padding: 0 2rem;
}

.all-projects-section h2 {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.grid-project-card {
  position: relative;
  aspect-ratio: 16/9;
  border-radius: 4px;
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.3s;
}

.grid-project-card:hover {
  transform: translateY(-5px);
}

.grid-project-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s;
}

.grid-project-card:hover .grid-overlay {
  opacity: 1;
}

.grid-overlay h3 {
  color: #fff;
  font-size: 1.1rem;
  margin: 0;
}

/* Responsive */
@media (max-width: 1200px) {
  .profile-wrapper {
    grid-template-columns: 1fr;
  }

  .profile-left {
    max-width: 300px;
    margin: 0 auto;
  }

  .avatar-section {
    position: relative;
    top: 0;
  }
}

@media (max-width: 768px) {
  .project-item {
    flex-direction: column;
  }

  .project-thumbnail {
    width: 100%;
    height: 200px;
  }
}


/* Alert Bar Styles */

.alert-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 9999;
}

.alert-content {
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 1200px;
  width: 100%;
}

.alert-icon {
  font-size: 20px;
  flex-shrink: 0;
}

.alert-message {
  flex: 1;
  font-size: 15px;
  font-weight: 500;
}

.close-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
  transition: background 0.2s;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>