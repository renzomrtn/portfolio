<template>
  <header class="site-header">
    <div class="nav-container">
      <NuxtLink to="/" class="nav-brand" aria-label="Renzomrtn home"><img src="/images/webpage/logo.png" alt="" /><span>Renzomrtn</span></NuxtLink>
      <button class="menu-button" type="button" :aria-expanded="menuOpen" aria-controls="main-navigation" @click="menuOpen = !menuOpen"><span class="sr-only">Toggle navigation</span><i class="fa-solid" :class="menuOpen ? 'fa-xmark' : 'fa-bars'" aria-hidden="true" /></button>
      <nav id="main-navigation" class="nav-links" :class="{ 'is-open': menuOpen }" aria-label="Main navigation">
        <NuxtLink to="/AboutView" @click="menuOpen = false">About</NuxtLink><NuxtLink to="/ProjectsView" @click="menuOpen = false">Projects</NuxtLink><NuxtLink to="/ContactView" @click="menuOpen = false">Contact</NuxtLink><a href="/files/MartinFajardo-Resume.pdf" target="_blank" rel="noopener">Resume <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /></a>
      </nav>
    </div>
  </header>
</template>
<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
</script>
<style scoped>
.site-header { position: relative; z-index: 10; background: rgba(14, 20, 29, .94); border-bottom: 1px solid var(--line); }.nav-container { width: min(1160px, calc(100% - 2rem)); min-height: 72px; margin: auto; display: flex; align-items: center; justify-content: space-between; gap: 2rem; }.nav-brand { display: inline-flex; align-items: center; gap: .7rem; color: #f3f7fb; font-weight: 700; letter-spacing: .08em; font-size: 1.05rem; text-transform: uppercase; }.nav-brand img { width: 36px; height: 36px; object-fit: contain; }.nav-links { display: flex; align-items: center; gap: 1.75rem; }.nav-links a { color: var(--muted); font-size: .78rem; font-weight: 600; text-transform: uppercase; letter-spacing: .12em; }.nav-links a:hover, .nav-links a.router-link-active { color: var(--accent); }.menu-button { display: none; color: #fff; background: transparent; border: 0; font-size: 1.25rem; }.sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; }
@media (max-width: 680px) { .nav-container { min-height: 64px; width: min(100% - 1.25rem, 1160px); }.menu-button { display: block; }.nav-links { display: none; position: absolute; top: 64px; left: 0; right: 0; padding: 1rem; background: #101722; border-bottom: 1px solid var(--line); flex-direction: column; align-items: stretch; gap: 0; }.nav-links.is-open { display: flex; }.nav-links a { padding: .85rem .35rem; } }
</style>
