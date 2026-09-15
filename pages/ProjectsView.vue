<template>
  <div class="steam-portfolio">
    <HeaderView />
    <main class="archive-page">
      <section class="archive-shell">
        <header class="archive-heading">
          <p class="eyebrow">Selected work</p>
          <h1>Projects</h1>
          <p>A running record of systems, sites, and experiments built to solve practical problems.</p>
        </header>
        <div v-if="projects?.length" class="project-grid">
          <NuxtLink v-for="project in projects" :key="project._id" :to="project._path" class="project-card"><img
              :src="project.image" :alt="project.title" />
            <div class="card-copy">
              <div>
                <p class="card-date">{{ formatDate(project.date) }}</p>
                <h2>{{ project.title }}</h2>
                <p class="tech">{{ project.technologies?.join(' · ') || 'Digital project' }}</p>
              </div><span class="open">View project <i class="fa-solid fa-arrow-right" aria-hidden="true" /></span>
            </div>
          </NuxtLink>
        </div>
        <p v-else class="empty">No projects published yet.</p>
      </section>
    </main>
    <FooterView />
  </div>
</template>
<script setup>
const { data: projects } = await useAsyncData('project-archive', () => queryContent('projects').sort({ date: -1 }).find())
const formatDate = (date) => date ? new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(new Date(date)) : 'In progress'
</script>
<style scoped>
.archive-page {
  position: relative;
  overflow: hidden;
  flex: 1;
  padding: clamp(2rem, 6vw, 5rem) 1rem;
  background: #0a1018 url('/images/webpage/bg.jpg') center / cover fixed;
}

.archive-page::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(110deg, rgba(7, 15, 24, .96), rgba(10, 18, 29, .83));
}

.archive-shell {
  position: relative;
  width: min(1160px, 100%);
  margin: auto;
}

.eyebrow,
.card-date {
  margin: 0 0 .45rem;
  color: var(--accent);
  font: 500 .69rem 'DM Mono', monospace;
  text-transform: uppercase;
  letter-spacing: .1em;
}

.archive-heading h1 {
  margin: 0 0 .7rem;
  font-size: clamp(2.2rem, 6vw, 4rem);
  letter-spacing: -.06em;
}

.archive-heading>p:last-child {
  margin: 0;
  color: var(--muted);
  line-height: 1.65;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.project-card {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 8px;
  transition: transform .2s, border-color .2s;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(111, 199, 219, .55);
}

.project-card>img {
  width: 100%;
  height: 165px;
  object-fit: cover;
}

.card-copy {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
}

.card-copy h2 {
  margin: 0 0 .45rem;
  color: #eff7fb;
  font-size: 1rem;
}

.tech {
  margin: 0;
  color: var(--muted);
  font-size: .78rem;
}

.open {
  color: var(--accent);
  font: .72rem 'DM Mono', monospace;
}

.open i {
  margin-left: .3rem;
}

.empty {
  color: var(--muted);
}

@media (max-width: 800px) {
  .project-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  .project-grid {
    grid-template-columns: 1fr;
  }

  .project-card {
    min-height: 260px;
  }

  .project-card>img {
    height: 180px;
  }
}
</style>
