<template>
    <div class="steam-portfolio">
        <!-- Navigation -->
        <HeaderView />
        <div class="content">
            <!-- LB from backgrounds.gallery -->
            <video autoplay muted loop playsinline>
                <source
                    src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1876560/52fda1e426d9e5407530e51b1d8959f1b17b564d.mp4"
                    type="video/mp4" />
            </video>
            <div class="wrapper">
                <section class="contact-section">
                    <h2 class="text-center mb-5">MICRO CREDENTIALS</h2>
                    <div class="contact-container">
                        <div class="cred1">
                            <a href="https://www.credly.com/users/lorenzz/badges" target="_blank" class="social-link">
                                <i class="fas fa-certificate fa-2x"></i>Credly
                            </a>
                        </div>
                        <div class="cred2">
                            <div class="coursera">
                                <h6>Coursera</h6>
                                <ul>
                                    <li>Foundations of Cybersecurity Completion - Google / Coursera (2024)</li>
                                </ul>
                            </div>
                            <div class="cisco">
                                <h6>Cisco</h6>
                                <ul>
                                    <li>CCNA: Introduction to Networks - Cisco Networking Academy (2025)</li>
                                    <li>Javascript Essentials Completion - Cisco Networking Academy (2025)</li>
                                    <li>Networking Devices and Initial Configuration Completion - Cisco Networking
                                        Academy (2024)</li>
                                    <li>Introduction to Cybersecurity Completion - Cisco Networking Academy (2023)</li>
                                    <li>Cybersecurity Essentials Completion - Cisco Networking Academy (2023)</li>
                                </ul>
                            </div>
                            <div class="school">
                                <h6>University</h6>
                                <ul>
                                    <li>Best Community Web-Based Solution - UNC SCIS Innowave Awards (2025)</li>
                                    <li>Outstanding Performance for Work Immersion - UNC TVL ICT (2023)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <FooterView />
    </div>
</template>