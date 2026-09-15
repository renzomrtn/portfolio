<template>
  <div class="steam-portfolio">
    <HeaderView />
    <main class="page">
      <section class="shell">
        <header class="heading">
          <p class="eyebrow">Learning record</p>
          <h1>Micro-credentials</h1>
          <p>Courses, certifications, and recognition that support my work in technology and community projects.</p>
        </header>
        <div class="credential-layout"><a class="credly-card" href="https://www.credly.com/users/lorenzz/badges"
            target="_blank" rel="noopener"><i class="fa-solid fa-certificate" aria-hidden="true" />
            <div>
              <p class="eyebrow">Verified badges</p>
              <h2>Credly profile</h2><span>View credentials →</span>
            </div>
          </a>
          <div class="credential-list">
            <section v-for="group in credentials" :key="group.name" class="credential-group">
              <header>
                <p class="eyebrow">{{ group.name }}</p><span>{{ group.items.length }}</span>
              </header>
              <ul>
                <li v-for="item in group.items" :key="item">{{ item }}</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
    <FooterView />
  </div>
</template>
<script setup>
const credentials = [
  { name: 'Coursera', items: ['Foundations of Cybersecurity Completion — Google / Coursera (2024)'] },
  { name: 'Cisco Networking Academy', items: ['CCNA: Introduction to Networks (2025)', 'JavaScript Essentials Completion (2025)', 'Networking Devices and Initial Configuration Completion (2024)', 'Introduction to Cybersecurity Completion (2023)', 'Cybersecurity Essentials Completion (2023)'] },
  { name: 'University recognition', items: ['Best Community Web-Based Solution — UNC SCIS Innowave Awards (2025)', 'Outstanding Performance for Work Immersion — UNC TVL ICT (2023)'] }
]
</script>
<style scoped>
.page {
  position: relative;
  overflow: hidden;
  flex: 1;
  padding: clamp(2rem, 6vw, 5rem) 1rem;
  background: #0a1018 url('/images/webpage/bg.jpg') center / cover fixed;
}

.page::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(110deg, rgba(7, 15, 24, .96), rgba(10, 18, 29, .83));
}

.shell {
  position: relative;
  width: min(1160px, 100%);
  margin: auto;
}

.heading {
  max-width: 680px;
  margin-bottom: 2.5rem;
}

.eyebrow {
  margin: 0 0 .45rem;
  color: var(--accent);
  font: .69rem 'DM Mono', monospace;
  text-transform: uppercase;
  letter-spacing: .1em;
}

.heading h1 {
  margin: 0 0 .7rem;
  font-size: clamp(2.2rem, 6vw, 4rem);
  letter-spacing: -.06em;
}

.heading>p:last-child {
  margin: 0;
  color: var(--muted);
  line-height: 1.65;
}

.credential-layout {
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 1rem;
}

.credly-card {
  min-height: 210px;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(145deg, #163d4b, #152333);
  border: 1px solid rgba(111, 199, 219, .42);
  border-radius: 8px;
}

.credly-card i {
  color: #8be1ee;
  font-size: 2rem;
}

.credly-card h2 {
  margin: 0 0 .55rem;
  font-size: 1.15rem;
}

.credly-card span {
  color: var(--accent);
  font-size: .78rem;
}

.credential-list {
  display: grid;
  gap: .8rem;
}

.credential-group {
  border: 1px solid var(--line);
  border-radius: 7px;
  overflow: hidden;
  background: var(--panel);
}

.credential-group header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .85rem 1rem;
  border-bottom: 1px solid var(--line);
}

.credential-group header .eyebrow {
  margin: 0;
}

.credential-group header span {
  color: var(--muted);
  font: .7rem 'DM Mono', monospace;
}

.credential-group ul {
  display: grid;
  gap: .55rem;
  margin: 0;
  padding: 1rem 1rem 1rem 2rem;
  color: #c8d6df;
  font-size: .82rem;
  line-height: 1.45;
}

.credential-group li::marker {
  color: var(--accent);
}

@media (max-width: 650px) {
  .credential-layout {
    grid-template-columns: 1fr;
  }

  .credly-card {
    min-height: 150px;
  }
}
</style>
