<template>
    <nav class="steam-nav">
      <div class="nav-container">
        <div class="nav-brand">
          <a href="/">
            <img src="/images/webpage/logo.png" alt="Logo" />
            <h2>Renzomrtn</h2>
          </a>
        </div>
        <div class="nav-links">
          <a href="AboutView">About</a>
          <a href="ContactView">Contact</a>
          <a href="/files/MartinFajardo-Resume.pdf" target="_blank">Resume</a>
        </div>
      </div>
    </nav>
</template>
<style scoped>
.steam-nav {
  width: 100%;
  background: #171d25;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-container {
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 5rem;
  width: 50%;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-brand h2 {
  margin: 0;
  font-size: 1.5rem;
}

.nav-brand img {
  height: 40px;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

a {
  color: #c7d5e0;
  text-decoration: none;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-links a {
  color: #c7d5e0;
  text-decoration: none;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #fff;
}
</style>