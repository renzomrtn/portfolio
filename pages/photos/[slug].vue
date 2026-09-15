<template>
  <div class="steam-portfolio">
    <HeaderView />
    <main v-if="photo" class="detail-page">
      <article class="detail-shell">
        <NuxtLink to="/PhotographyView" class="back">← Photography archive</NuxtLink>
        <header class="detail-heading">
          <p class="eyebrow">Photo study</p>
          <h1>{{ photo.title }}</h1>
          <p>{{ photo.location || 'Philippines' }} <span v-if="photo.date">· {{ formatDate(photo.date) }}</span></p>
        </header>
        <figure class="photo-frame"><img :src="photo.image" :alt="photo.title" />
          <figcaption v-if="photo.caption">{{ photo.caption }}</figcaption>
        </figure>
        <div class="detail-grid">
          <div v-if="photo.body" class="prose">
            <ContentRenderer :value="photo" />
          </div>
          <aside v-if="photo.camera" class="facts"><span>Camera details</span><strong>{{ photo.camera }}</strong>
          </aside>
        </div>
      </article>
    </main>
    <FooterView />
  </div>
</template>
<script setup>
const route = useRoute()
const { data: photo } = await useAsyncData(`photo-${route.params.slug}`, () => queryContent('photos', route.params.slug).findOne())
if (!photo.value) throw createError({ statusCode: 404, message: 'Photo not found' })
const formatDate = (date) => new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(date))
useHead({ title: `${photo.value.title} | Renzomrtn`, meta: [{ name: 'description', content: photo.value.caption || photo.value.title }, { property: 'og:image', content: photo.value.image }] })
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
  max-width: 700px;
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

.photo-frame {
  margin: 0;
  padding: clamp(.5rem, 1.5vw, 1rem);
  background: #0b121a;
  border: 1px solid var(--line);
}

.photo-frame img {
  display: block;
  max-width: 100%;
  max-height: 72vh;
  margin: auto;
  object-fit: contain;
}

.photo-frame figcaption {
  max-width: 720px;
  margin: 1rem auto .2rem;
  color: var(--muted);
  font-size: .82rem;
  line-height: 1.6;
}

.detail-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 250px;
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
  padding: 1rem;
  border: 1px solid var(--line);
  background: var(--panel);
}

.facts span {
  display: block;
  margin-bottom: .45rem;
  color: var(--accent);
  font: .65rem 'DM Mono', monospace;
  text-transform: uppercase;
}

.facts strong {
  font-size: .8rem;
}

@media (max-width: 650px) {
  .detail-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
}
</style>
