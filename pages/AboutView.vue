<template>
    <div class="steam-portfolio">
        <HeaderView />
        <div class="content">
            <!-- LB from backgrounds.gallery -->
            <video autoplay muted loop playsinline>
                <source
                    src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1876560/52fda1e426d9e5407530e51b1d8959f1b17b564d.mp4"
                    type="video/mp4" />
            </video>
            <!-- About Section -->
            <div class="wrapper">
                <section class="about-section">
                    <div class="about-container">
                        <h2 class="text-center mb-5">ABOUT ME</h2>
                        <div class="inner">
                            <div class="r0w">
                                <div class="about">
                                    <p class="hero-text">
                                        Currently a third year college student. I don't like programming that much. I
                                        think freshmen
                                        year ruined it for me. But you'll see me making either the most stupid and trash
                                        system for
                                        fun
                                        or a system that makes a difference in the community. I just like bringing ideas
                                        into
                                        reality.
                                    </p>
                                </div>
                            </div>
                            <div class="r0w">
                                <div class="tools">
                                    <h5 class="mb-4">Tools and Technologies</h5>
                                    <ul>
                                        <li>Programming Languages:</li>
                                        <ul>
                                            <li>Javascript</li>
                                            <li>Python</li>
                                            <li>C#</li>
                                        </ul>
                                    </ul>
                                    <ul>
                                        <li>Frameworks and Libraries:</li>
                                        <ul>
                                            <li>React</li>
                                            <li>Vue</li>
                                            <li>Nuxt</li>
                                        </ul>
                                    </ul>
                                    <ul>
                                        <li>Database:</li>
                                        <ul>
                                            <li>MySQL</li>
                                        </ul>
                                    </ul>
                                    <ul>
                                        <li>Version Control:</li>
                                        <ul>
                                            <li>Git</li>
                                            <li>GitHub</li>
                                        </ul>
                                    </ul>
                                    <ul>
                                        <li>Design Tools:</li>
                                        <ul>
                                            <li>Figma</li>
                                            <li>Adobe Photoshop</li>
                                            <li>Canva</li>
                                        </ul>
                                    </ul>
                                </div>
                            </div>
                            <div class="r0w">
                                <div class="education">
                                    <h5 class="mb-4">Education</h5>
                                    <ul>
                                        <li>Bachelor of Science in Information Technology</li>
                                        <ul>
                                            <li>University of Nueva Caceres</li>
                                            <li>Tertiary</li>
                                            <li>2023 - Present</li>
                                        </ul>
                                    </ul>
                                    <ul>
                                        <li>Technical Vocational and Livelihood - Information in Communications
                                            Technology
                                        </li>
                                        <ul>
                                            <li>University of Nueva Caceres</li>
                                            <li>Upper Secondary</li>
                                            <li>2021 - 2023</li>
                                        </ul>
                                    </ul>
                                </div>
                            </div>
                            <div class="r0w">
                                <div class="experience">
                                    <h5 class="mb-4">Work Experience</h5>
                                    <ul>
                                        <li>Barangay Loob, Gainza, Camarines Sur (2024 - 2025)</li>
                                        <ul>
                                            <li>Web Developer</li>
                                            <li>Part of a team that developed and donated a website and a management
                                                system
                                                for the community.</li>
                                        </ul>
                                    </ul>
                                    <ul>
                                        <li>Pandalivery (2023)</li>
                                        <ul>
                                            <li>Work Immersion</li>
                                            <li>Trained with react.js and bootstrap focusing in front-end development
                                                and
                                                lead a team in making a movie recommendation website.</li>
                                        </ul>
                                    </ul>
                                    <ul>
                                        <li>Digitek Photo Studio (2019 - Present)</li>
                                        <ul>
                                            <li>Photographer and Editor</li>
                                            <li>Part-time where I handle taking pictures, printing, and photo editing.
                                            </li>
                                        </ul>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <FooterView />
    </div>
</template>
<style scoped>
.inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.r0w {
    width: 100%;
    display: flex;
    gap: 1.5rem;
}
</style>