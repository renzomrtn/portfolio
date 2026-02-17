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
        </div>
        <FooterView />
    </div>
</template>
<style scoped>
@import url('https://fonts.cdnfonts.com/css/motiva-sans');

body {
    font-family: 'motiva-sans', sans-serif;
}

.steam-portfolio {
    background-color: #000000;
    min-height: 100vh;
    color: #c7d5e0;
    font-family: "Motiva Sans", Arial, sans-serif;
    display: flex;
    flex-direction: column;
}

/* Main Content */
.content {
    /* background: url("/images/webpage/hs.jpg") no-repeat center center; backup bg*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
}

.content video {
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    height: auto;
    object-fit: cover;
    transform: translateX(-50%);
    z-index: 0;
}

.wrapper {
    position: relative;
    z-index: 1;
    width: 50%;
    padding: 2rem;
        background-color: rgba(0, 0, 0, 0.5);

}

.form-wrapper {
    max-width: 1000px;
    margin: 0 auto;
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