<template>
  <HeaderView />
  <section>
    <div class="container" v-if="project">
      <h1>{{ project.title }}</h1>
      
      <img :src="project.image" :alt="project.title" class="img-fluid my-4 rounded">
      
      <!-- Project Meta Info -->
      <div class="row mb-4">
        <div class="col-md-4" v-if="project.client">
          <strong>Client:</strong> {{ project.client }}
        </div>
        <div class="col-md-4" v-if="project.team">
          <strong>Team:</strong> {{ project.team }}
        </div>
        <div class="col-md-4" v-if="project.date">
          <strong>Date:</strong> {{ new Date(project.date).toLocaleDateString() }}
        </div>
      </div>

      <!-- Technologies -->
      <div class="mb-4" v-if="project.technologies && project.technologies.length">
        <strong>Technologies:</strong>
        <div class="mt-2">
          <span 
            v-for="tech in project.technologies" 
            :key="tech" 
            class="badge bg-primary me-2"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Link -->
      <div class="mb-4" v-if="project.link && project.link !== 'none'">
        <strong>Link:</strong> 
        <a :href="project.link" target="_blank" class="ms-2">{{ project.link }}</a>
      </div>

      <!-- Description -->
      <div class="project-content">
        <p>{{ project.description }}</p>
      </div>
      
      <NuxtLink to="/" class="btn btn-primary mt-4">Back to Home</NuxtLink>
    </div>

    <div class="container my-5" v-else>
      <p>Loading project...</p>
    </div>
  </section>
  <FooterView />
</template>

<script setup>
import FooterView from '~/components/FooterView.vue';
import HeaderView from '~/components/HeaderView.vue';

const route = useRoute()
const slug = route.params.slug

// Query by the filename/slug
const { data: project } = await useAsyncData(`project-${slug}`, () =>
  queryContent('projects', slug).findOne()
)

// console.log('Slug:', slug)
// console.log('Project data:', project.value)
</script>

<style scoped>
section {
  padding: 60px 0;
  background-color: #000000;
}

.navbar-nav {
    gap: 50px;
}

.nav-link {
    font-size: 1.1rem;
    font-weight: 500;
}
</style>