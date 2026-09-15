<template>
  <div class="steam-portfolio">
    <HeaderView />
    <main v-if="project" class="detail-page">
      <article class="detail-shell">
        <NuxtLink to="/ProjectsView" class="back">← All projects</NuxtLink>
        <header class="detail-heading">
          <p class="eyebrow">Project file</p>
          <h1>{{ project.title }}</h1>
          <p>{{ project.technologies?.join(' · ') || 'Digital project' }}</p>
        </header>
        <img :src="project.image" :alt="project.title" class="hero-image" />
        <div class="detail-grid">
          <div class="prose">
            <ContentRenderer :value="project" />
          </div>
          <aside class="facts">
            <div v-if="project.client"><span>Client</span><strong>{{ project.client }}</strong></div>
            <div v-if="project.team"><span>Team</span><strong>{{ project.team }}</strong></div>
            <div v-if="project.date"><span>Completed</span><strong>{{ formatDate(project.date) }}</strong></div>
            <div v-if="project.hours"><span>Time recorded</span><strong>{{ project.hours }} hours</strong></div><a
              v-if="project.link && project.link !== 'none'" :href="project.link" target="_blank" rel="noopener"
              class="visit">Visit project <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /></a>
          </aside>
        </div>
      </article>
    </main>
    <FooterView />
  </div>
</template>
<script setup>
const route = useRoute()
const { data: project } = await useAsyncData(`project-${route.params.slug}`, () => queryContent('projects', route.params.slug).findOne())
if (!project.value) throw createError({ statusCode: 404, message: 'Project not found' })
const formatDate = (date) => new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(new Date(date))
useHead({ title: `${project.value.title} | Renzomrtn`, meta: [{ name: 'description', content: project.value.title }, { property: 'og:image', content: project.value.image }] })
</script>
<style scoped>
.detail-page {
  position: relative;
  overflow: hidden;
  flex: 1;
  padding: clamp(2rem, 6vw, 5rem) 1rem;
  background: #0a1018 url('/images/webpage/bg.jpg') center / cover fixed;
}

.detail-page::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(110deg, rgba(7, 15, 24, .96), rgba(10, 18, 29, .83));
}

.detail-shell {
  position: relative;
  width: min(1160px, 100%);
  margin: auto;
}

.back {
  display: inline-block;
  margin-bottom: 2rem;
  color: var(--accent);
  font: .75rem 'DM Mono', monospace;
}

.detail-heading {
  margin-bottom: 2rem;
}

.eyebrow {
  margin: 0 0 .5rem;
  color: var(--accent);
  font: .69rem 'DM Mono', monospace;
  text-transform: uppercase;
  letter-spacing: .1em;
}

.detail-heading h1 {
  margin: 0 0 .7rem;
  font-size: clamp(2.2rem, 6vw, 4rem);
  letter-spacing: -.06em;
}

.detail-heading>p:last-child {
  margin: 0;
  color: var(--muted);
}

.hero-image {
  display: block;
  width: 100%;
  max-height: 540px;
  object-fit: cover;
  border: 1px solid var(--line);
  border-radius: 9px;
}

.detail-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 240px;
  gap: 3rem;
  padding-top: 2rem;
}

.prose {
  color: #c6d4df;
  line-height: 1.8;
}

.prose :deep(p) {
  margin: 0 0 1rem;
}

.facts {
  align-self: start;
  display: grid;
  gap: 1px;
  border: 1px solid var(--line);
  background: var(--line);
}

.facts>div {
  padding: .85rem;
  background: var(--panel);
}

.facts span {
  display: block;
  margin-bottom: .35rem;
  color: var(--muted);
  font: .65rem 'DM Mono', monospace;
  text-transform: uppercase;
}

.facts strong {
  font-size: .78rem;
}

.visit {
  padding: .85rem;
  background: #1a4453;
  color: #e9faff;
  font-size: .78rem;
  font-weight: 700;
}

.visit:hover {
  background: #246276;
}

@media (max-width: 650px) {
  .detail-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .facts {
    grid-template-columns: 1fr 1fr;
  }

  .visit {
    grid-column: span 2;
  }
}
</style>
