<template>
    <div class="steam-portfolio">
        <HeaderView />
        <main class="page">
            <section class="shell">
                <header class="heading">
                    <p class="eyebrow">Get in touch</p>
                    <h1>Let's make something useful.</h1>
                    <p>Have a project, collaboration, or question in mind? Send a message and I'll get back to you.</p>
                </header>
                <div class="contact-grid">
                    <aside class="contact-card">
                        <p class="eyebrow">Elsewhere</p><a v-for="link in socialLinks" :key="link.name"
                            :href="link.href" target="_blank" rel="noopener"><i :class="link.icon"
                                aria-hidden="true" /><span>{{ link.name }}</span><i
                                class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /></a>
                    </aside>
                    <form class="form-card" action="https://formspree.io/f/xblqlgaa" method="POST"><input type="hidden"
                            name="_subject" value="Contact from portfolio" /><label for="name">Full name<input id="name"
                                name="name" autocomplete="name" placeholder="Your name" required /></label><label
                            for="email">Email address<input id="email" type="email" name="email" autocomplete="email"
                                placeholder="you@example.com" required /></label><label for="subject">Subject<input
                                id="subject" name="subject" placeholder="What's this about?" required /></label><label
                            for="message">Message<textarea id="message" name="message" rows="6"
                                placeholder="Tell me a little about it…" required /></label><button type="submit">Send
                            message <i class="fa-solid fa-arrow-right" aria-hidden="true" /></button></form>
                </div>
            </section>
        </main>
        <FooterView />
    </div>
</template>
<script setup>
const socialLinks = [{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/martinlorenz-fajardo/', icon: 'fa-brands fa-linkedin-in' }, { name: 'GitHub', href: 'https://github.com/renzomrtn', icon: 'fa-brands fa-github' }, { name: 'Instagram', href: 'https://www.instagram.com/renzomrtn', icon: 'fa-brands fa-instagram' }, { name: 'X / Twitter', href: 'https://www.twitter.com/renzomrtn', icon: 'fa-brands fa-x-twitter' }, { name: 'Facebook', href: 'https://www.facebook.com/renzomrtn', icon: 'fa-brands fa-facebook-f' }]
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
    max-width: 650px;
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

.contact-grid {
    display: grid;
    grid-template-columns: 240px minmax(0, 1fr);
    gap: 1rem;
}

.contact-card,
.form-card {
    padding: 1.1rem;
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 8px;
}

.contact-card a {
    display: grid;
    grid-template-columns: 18px 1fr 14px;
    gap: .65rem;
    align-items: center;
    padding: .8rem .25rem;
    border-bottom: 1px solid var(--line);
    color: #dce9f2;
    font-size: .81rem;
}

.contact-card a:last-child {
    border-bottom: 0;
}

.contact-card a:hover {
    color: var(--accent);
}

.contact-card a>i:last-child {
    font-size: .64rem;
}

.form-card {
    display: grid;
    gap: .9rem;
}

.form-card label {
    display: grid;
    gap: .4rem;
    color: #dbe8ef;
    font-size: .74rem;
    font-weight: 700;
}

.form-card input,
.form-card textarea {
    width: 100%;
    padding: .7rem .8rem;
    color: var(--ink);
    background: rgba(5, 12, 18, .55);
    border: 1px solid var(--line);
    border-radius: 4px;
    font: .82rem Manrope, sans-serif;
    outline: none;
}

.form-card textarea {
    resize: vertical;
}

.form-card input:focus,
.form-card textarea:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(111, 199, 219, .11);
}

.form-card button {
    justify-self: start;
    padding: .75rem 1rem;
    border: 1px solid #61b9cb;
    border-radius: 4px;
    color: #edfbff;
    background: #194554;
    font-size: .78rem;
    font-weight: 700;
    cursor: pointer;
}

.form-card button:hover {
    background: #246276;
}

@media (max-width: 650px) {
    .contact-grid {
        grid-template-columns: 1fr;
    }

    .contact-card {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1rem;
    }

    .contact-card .eyebrow {
        grid-column: 1 / -1;
    }

    .contact-card a {
        border-bottom: 0;
    }
}
</style>
