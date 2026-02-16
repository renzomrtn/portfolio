<template>
    <div>
        <!-- Navigation -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="/">
                    <img src="/images/webpage/logo.png" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="about">ABOUT</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact">CONTACT</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/files/MartinFajardo-Resume.pdf" target="_blank" rel="noopener noreferrer">RESUME</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- Thank You Section -->
        <section class="thankyou-section">
            <div class="container text-center">
                <h4>Your message has been sent</h4>
                <h3 class="hero-title">THANK YOU!</h3>
            </div>
        </section>
    </div>
</template>
<style scoped>
.thankyou-section {
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}
</style>