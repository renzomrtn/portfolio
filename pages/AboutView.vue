<script setup lang="ts">
import FooterView from '../components/FooterView.vue';

</script>

<template>
    <HeaderView />
    <div>
        <!-- Hero Section -->
        <section class="hero-section">
            <div class="hero-overlay">
                <div class="container text-center">
                    <p class="hero-text">
                        Currently a third year college student. I don't like programming that much. I think freshmen
                        year ruined it for me. But you'll see me making either the most stupid and trash system for fun
                        or a system that makes a difference in the community. I just like bringing ideas into reality.
                    </p>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section class="about-section">
            <div class="about-container">
                <h2 class="text-center mb-5">ABOUT ME</h2>
                <div class="inner">
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
                                <li>Technical Vocational and Livelihood - Information in Communications Technology</li>
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
                                    <li>Part of a team that developed and donated a website and a management system for the community.</li>
                                </ul>
                            </ul>
                            <ul>
                                <li>Pandalivery (2023)</li>
                                <ul>
                                    <li>Work Immersion</li>
                                    <li>Trained with react.js and bootstrap focusing in front-end development and lead a team in making a movie recommendation website.</li>
                                </ul>
                            </ul>
                            <ul>
                                <li>Digitek Photo Studio (2019 - Present)</li>
                                <ul>
                                    <li>Photographer and Editor</li>
                                    <li>Part-time where I handle taking pictures, printing, and photo editing.</li>
                                </ul>
                            </ul>
                        </div>
                        <div class="credentials">
                            <h5 class="mb-4">Micro Credentials</h5>
                            <ul>
                                <li>Best Community Web-Based Solution - UNC SCIS Innowave Awards (2025)</li>
                                <li>CCNA: Introduction to Networks - Cisco Networking Academy (2025)</li>
                                <li>Javascript Essentials Completion - Cisco Networking Academy (2025)</li>
                                <li>Networking Devices and Initial Configuration Completion - Cisco Networking Academy (2024)</li>
                                <li>Foundations of Cybersecurity Completion - Google / Coursera (2024)</li>
                                <li>Outstanding Performance for Work Immersion - UNC TVL ICT (2023)</li>
                                <li>Introduction to Cybersecurity Completion - Cisco Networking Academy (2023)</li>
                                <li>Cybersecurity Essentials Completion - Cisco Networking Academy (2023)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <FooterView />
</template>
<style scoped>
.about-section {
    background: url('/images/webpage/hs.jpg') no-repeat center center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

.about-container {
    max-width: 1300px;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.5);
       /* -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); */
    padding: 2rem;
}

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

.education,
.experience,
.credentials {
    background-color: #222121;
    border-radius: 12px;
    border: #808080 1px solid;
    padding: 1.5rem;
}

.education {
    flex: 1;
}

.experience, 
.credentials {
    flex: 1;
}
</style>