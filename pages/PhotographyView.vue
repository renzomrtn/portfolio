<template>
  <div class="steam-portfolio">
    <HeaderView />
    <main class="archive-page">
      <section class="archive-shell">
        <header class="archive-heading">
          <p class="eyebrow">Through the lens</p>
          <h1>Photography</h1>
          <p>Small studies of light, place, and the overlooked details of ordinary life.</p>
        </header>
        <div v-if="photos?.length" class="photo-grid">
          <NuxtLink v-for="photo in photos" :key="photo._id" :to="photo._path" class="photo-card"><img
              :src="photo.image" :alt="photo.title" />
            <div class="caption">
              <p>{{ photo.location || 'Philippines' }}</p>
              <h2>{{ photo.title }}</h2><span>{{ formatDate(photo.date) }}</span>
            </div>
          </NuxtLink>
        </div>
        <p v-else class="empty">No photographs published yet.</p>
      </section>
    </main>
    <FooterView />
  </div>
</template>
<script setup>
const { data: photos } = await useAsyncData('photo-archive', () => queryContent('photos').sort({ date: -1 }).find())
const formatDate = (date) => date ? new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(new Date(date)) : 'Recent work'
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

.archive-heading {
  max-width: 620px;
  margin-bottom: 2.25rem;
}

.eyebrow {
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

.photo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.photo-card {
  position: relative;
  min-height: 330px;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #0d1721;
}

.photo-card img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .4s;
}

.photo-card:hover img {
  transform: scale(1.05);
}

.photo-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent 35%, rgba(4, 10, 16, .92));
}

.caption {
  position: absolute;
  z-index: 1;
  left: 1rem;
  right: 1rem;
  bottom: 1rem;
}

.caption p,
.caption span {
  margin: 0;
  color: #9bc8d4;
  font: .67rem 'DM Mono', monospace;
  text-transform: uppercase;
  letter-spacing: .08em;
}

.caption h2 {
  margin: .45rem 0;
  color: #fff;
  font-size: 1rem;
}

.empty {
  color: var(--muted);
}

@media (max-width: 800px) {
  .photo-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  .photo-grid {
    grid-template-columns: 1fr;
  }

  .photo-card {
    min-height: 280px;
  }
}
</style>
