<template>
  <div class="steam-portfolio">
    <HeaderView />
    <main class="page">
      <section class="shell">
        <header class="heading">
          <p class="eyebrow">About me</p>
          <h1>Making ideas useful.</h1>
          <p>I’m a third-year Information Technology student who enjoys turning rough ideas into tangible systems,
            especially when they can help a community.</p>
        </header>
        <div class="about-grid">
          <section class="panel story">
            <p>I’m drawn to work that has a reason to exist: a small tool that makes a process clearer, a website that
              gives a community a better home, or a photograph that preserves a moment. I learn by making, testing, and
              improving the result.</p><a href="/files/MartinFajardo-Resume.pdf" target="_blank" rel="noopener">Read
              résumé <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /></a>
          </section>
          <section class="panel">
            <p class="eyebrow">Toolkit</p>
            <div class="skills">
              <div v-for="skill in skills" :key="skill.name"><span>{{ skill.name }}</span>
                <p>{{ skill.items.join(' · ') }}</p>
              </div>
            </div>
          </section>
        </div>
        <section class="timeline">
          <p class="eyebrow">Experience &amp; education</p>
          <article v-for="entry in timeline" :key="entry.title" class="timeline-item">
            <p>{{ entry.period }}</p>
            <div>
              <h2>{{ entry.title }}</h2>
              <h3>{{ entry.organization }}</h3>
              <p>{{ entry.description }}</p>
            </div>
          </article>
        </section>
      </section>
    </main>
    <FooterView />
  </div>
</template>
<script setup>
const skills = [{ name: 'Languages', items: ['JavaScript', 'Python', 'C#'] }, { name: 'Frameworks', items: ['React', 'Vue', 'Nuxt'] }, { name: 'Tools', items: ['MySQL', 'GitHub', 'Figma', 'Photoshop'] }]
const timeline = [
  { period: '2024 – 2025', title: 'Web Developer', organization: 'Barangay Loob, Gainza, Camarines Sur', description: 'Part of a team that developed and donated a website and management system for the community.' },
  { period: '2023', title: 'Work Immersion', organization: 'Pandalivery', description: 'Trained with React and Bootstrap, then led a team building a movie-recommendation website.' },
  { period: '2019 – Present', title: 'Photographer & Editor', organization: 'Digitek Photo Studio', description: 'Handles photography, printing, and photo editing on a part-time basis.' },
  { period: '2023 – Present', title: 'BS Information Technology', organization: 'University of Nueva Caceres', description: 'Tertiary education.' }
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
  max-width: 720px;
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
  line-height: 1.7;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.1fr .9fr;
  gap: 1rem;
}

.panel,
.timeline {
  padding: 1.25rem;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 8px;
}

.story>p {
  margin: 0 0 1.2rem;
  color: #d4e0e8;
  line-height: 1.75;
}

.story a {
  color: var(--accent);
  font-size: .8rem;
}

.skills {
  display: grid;
  gap: 1rem;
}

.skills div {
  padding-bottom: .9rem;
  border-bottom: 1px solid var(--line);
}

.skills div:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.skills span {
  display: block;
  margin-bottom: .35rem;
  color: #e7f3fa;
  font-size: .8rem;
  font-weight: 700;
}

.skills p {
  margin: 0;
  color: var(--muted);
  font-size: .76rem;
  line-height: 1.5;
}

.timeline {
  margin-top: 1rem;
}

.timeline>.eyebrow {
  margin-bottom: 1.2rem;
}

.timeline-item {
  display: grid;
  grid-template-columns: 130px 1fr;
  gap: 1.2rem;
  padding: 1rem 0;
  border-top: 1px solid var(--line);
}

.timeline-item>p {
  margin: 0;
  color: var(--accent);
  font: .7rem 'DM Mono', monospace;
}

.timeline-item h2 {
  margin: 0 0 .25rem;
  font-size: .92rem;
}

.timeline-item h3 {
  margin: 0 0 .5rem;
  color: var(--muted);
  font-size: .77rem;
  font-weight: 500;
}

.timeline-item div>p {
  margin: 0;
  color: #c7d5de;
  font-size: .79rem;
  line-height: 1.6;
}

@media (max-width: 650px) {
  .about-grid {
    grid-template-columns: 1fr;
  }

  .timeline-item {
    grid-template-columns: 1fr;
    gap: .5rem;
  }
}
</style>
