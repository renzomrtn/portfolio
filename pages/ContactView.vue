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
                            <a class="nav-link active" href="contact">CONTACT</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/files/MartinFajardo-Resume.pdf" target="_blank" rel="noopener noreferrer">RESUME</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="hero-section">
            <div class="hero-overlay">
                <div class="container text-center">
                </div>
            </div>
        </section>

        <section class="contact-section">
            <div class="contact-container">
                <h2 class="text-center mb-5">LET'S CONNECT</h2>
                <div class="form-wrapper">
                    <form action="https://formspree.io/f/xblqlgaa" method="POST">
                        <input type="hidden" name="_subject" value="Contact from website" />

                        <div class="mb-4">
                            <label for="name" class="form-label">Full Name</label>
                            <input type="text" class="form-control custom-input" id="name" name="name"
                                placeholder="Your name" required />
                            <div class="invalid-feedback">Please enter your name.</div>
                        </div>

                        <div class="mb-4">
                            <label for="email" class="form-label">Email Address</label>
                            <input type="email" class="form-control custom-input" id="email" name="email"
                                placeholder="your@email.com" required />
                            <div class="invalid-feedback">Please enter a valid email address.</div>
                        </div>

                        <div class="mb-4">
                            <label for="subject" class="form-label">Subject</label>
                            <input type="text" class="form-control custom-input" id="subject" name="subject"
                                placeholder="Subject" required />
                            <div class="invalid-feedback">Please enter a subject.</div>
                        </div>

                        <div class="mb-4">
                            <label for="message" class="form-label">Message</label>
                            <textarea class="form-control custom-input" id="message" name="message" rows="5"
                                placeholder="Your message..." required></textarea>
                            <div class="invalid-feedback">Please enter your message.</div>
                        </div>

                        <div class="text-center">
                            <button type="submit" class="btn custom-button px-5 py-2">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>
<style scoped>
.hero-section {
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('/images/webpage/contactbanner.png');
    background-size: cover;
    background-position: center;
    min-height: 500px;
    display: flex;
    align-items: center;
    color: white;
}

.contact-section {
  background: url('/images/webpage/hs.jpg') no-repeat center center;
}

.contact-container {
  max-width: 1300px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.5);
  /*  background-color: rgba(41, 39, 39, 0.5); 
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); */
  padding: 2rem;
}

.form-wrapper {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
}

.custom-input {
    border-radius: 8px;
    padding: 0.6rem 1rem;
    height: auto;
}

.custom-input:focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);
}

.custom-button {
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    border: 2px solid rgb(255, 255, 255);
    border-radius: 4px;
    font-weight: 500;
    transition: all 0.3s ease;
}

.custom-button:hover {
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    border-color: black;
}
</style>