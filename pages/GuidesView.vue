<template>
    <div class="steam-portfolio">
        <HeaderView />
        <main class="page">
            <section class="shell">
                <header class="heading">
                    <p class="eyebrow">Notes &amp; resources</p>
                    <h1>Guides</h1>
                    <p>Practical notes from my process—made for people building, learning, and finding their way through
                        a project.</p>
                </header>
                <div class="guide-grid">
                    <article v-for="guide in guides" :key="guide.title" class="guide-card">
                        <div class="guide-number">{{ guide.number }}</div>
                        <p class="eyebrow">{{ guide.topic }}</p>
                        <h2>{{ guide.title }}</h2>
                        <p>{{ guide.description }}</p><span>Coming soon</span>
                    </article>
                </div>
            </section>
        </main>
        <FooterView />
    </div>
</template>
<script setup>
const guides = [
    { number: '01', topic: 'Development', title: 'Starting a community web project', description: 'A practical outline for moving from a local need to a useful first release.' },
    { number: '02', topic: 'Photography', title: 'A simple workflow for event coverage', description: 'How I plan, shoot, sort, and deliver a small event photo set without overcomplicating it.' },
    { number: '03', topic: 'Learning', title: 'Building momentum while learning tech', description: 'A lightweight way to turn coursework, tutorials, and experiments into real portfolio work.' }
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

.guide-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}

.guide-card {
    position: relative;
    min-height: 270px;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 8px;
}

.guide-number {
    margin-bottom: auto;
    color: rgba(111, 199, 219, .34);
    font: 2.7rem 'DM Mono', monospace;
}

.guide-card h2 {
    margin: 0 0 .7rem;
    font-size: 1.08rem;
}

.guide-card>p:not(.eyebrow) {
    margin: 0;
    color: var(--muted);
    font-size: .82rem;
    line-height: 1.6;
}

.guide-card span {
    margin-top: 1.1rem;
    color: var(--accent);
    font: .7rem 'DM Mono', monospace;
    text-transform: uppercase;
}

@media (max-width: 750px) {
    .guide-grid {
        grid-template-columns: 1fr;
    }

    .guide-card {
        min-height: 220px;
    }
}
</style>
