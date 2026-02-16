<template>
  <HeaderView />
  <section>
    <div class="photo-detail">
      <div class="photo-container">
        <img :src="photo.image" :alt="photo.title" class="main-photo" />
      </div>

      <div class="photo-info">
        <h1>{{ photo.title }}</h1>

        <div class="metadata">
          <span v-if="photo.date" class="date">
            <i class="icon-calendar"></i> {{ formatDate(photo.date) }}
          </span>
          <span v-if="photo.location" class="location">
            <i class="icon-location"></i> {{ photo.location }}
          </span>
        </div>

        <div class="caption-info">
          <p v-if="photo.caption" class="caption">{{ photo.caption }}</p>
        </div>

        <div v-if="photo.camera" class="camera-info">
          <h3>Camera Details</h3>
          <p>{{ photo.camera }}</p>
        </div>

        <div v-if="photo.body" class="description">
          <ContentRenderer :value="photo" />
        </div>

        <nuxt-link to="/" class="back-link">
          ← Back to Home
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import FooterView from '~/components/FooterView.vue'

const route = useRoute()
const slug = route.params.slug

// Fetch the photo content
const { data: photo } = await useAsyncData(`photo-${slug}`, () => {
  return queryContent('photos', slug).findOne()
})

// Handle photo not found
if (!photo.value) {
  throw createError({
    statusCode: 404,
    message: 'Photo not found'
  })
}

// Format date helper
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// SEO
useHead({
  title: photo.value.title,
  meta: [
    { name: 'description', content: photo.value.caption || photo.value.title },
    { property: 'og:image', content: photo.value.image }
  ]
})
</script>

<style scoped>
section {
  padding: 60px 0;
  background-color: #000000;
}

.photo-detail {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.photo-container {
  margin-bottom: 2rem;
  background: #2e2d2d;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}

.main-photo {
  max-width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: contain;
}

.photo-info {
  max-width: 800px;
  margin: 0 auto;
}

.photo-info h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.metadata {
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.caption-info {
  margin-bottom: 1.5rem;
}

.caption {
  font-size: 1.2rem;
  line-height: 1.6;
}

.camera-info {
  border-radius: 8px;
  margin-bottom: 2rem;
}

.camera-info h3 {
  margin-top: 0;
  font-size: 1rem;
  text-transform: uppercase;
}

.description {
  line-height: 1.8;
  margin-bottom: 2rem;
}

.back-link {
  display: inline-block;
  margin-top: 2rem;
  color: #0066cc;
  text-decoration: none;
  font-weight: 500;
}

.back-link:hover {
  text-decoration: underline;
}
</style>