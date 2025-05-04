<template>
    <section class="faq" aria-labelledby="faq-heading">
        <div class="faq-container">
            <aside class="faq-nav" aria-label="FAQ Navigation">
                <ul>
                    <li><a href="#faq-areas">What areas do you serve?</a></li>
                    <li><a href="#faq-scheduling">How do I schedule a service?</a></li>
                    <li><a href="#faq-estimates">Do you offer free estimates?</a></li>
                </ul>
            </aside>
            <div class="faq-content">
                <h2 id="faq-heading">Frequently Asked Questions</h2>
                <div class="faq-item" id="faq-areas">
                    <h3><a href="#faq-areas">What areas do you serve?</a></h3>
                    <p>We proudly serve Minneapolis and surrounding neighborhoods throughout Minnesota.</p>
                </div>
                <div class="faq-item" id="faq-scheduling">
                    <h3><a href="#faq-scheduling">How do I schedule a service?</a></h3>
                    <p>You can fill out our contact form or email us directly at <a href="mailto:hello@minnesotahandy.com">hello@minnesotahandy.com</a>.</p>
                </div>
                <div class="faq-item" id="faq-estimates">
                    <h3><a href="#faq-estimates">Do you offer free estimates?</a></h3>
                    <p>Yes! We offer complimentary quotes for most jobs. Just reach out and we’ll get you started.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup></script>

<style scoped>
.faq {
    padding: 4rem 2rem;
    background: #eef2f7;
    color: #333;
}
.faq-container {
    display: flex;
    gap: 2rem;
    flex-direction: column;
}
@media(min-width: 768px) {
    .faq-container {
        flex-direction: row;
        align-items: flex-start;
    }
    .faq-nav {
        flex: 1;
        max-width: 200px;
        position: sticky;
        top: 2rem;
        padding-right: 1rem;
    }
}
.faq-nav ul {
    list-style: none;
    padding: 0;
}
.faq-nav li {
    margin-bottom: 1rem;
}
.faq-nav a {
    color: #224870;
    text-decoration: none;
    font-weight: bold;
}
.faq-nav a:hover {
    text-decoration: underline;
}
.faq-content {
    flex: 3;
    max-width: 800px;
    margin: auto;
}
.faq h2 {
    text-align: center;
    margin-bottom: 2rem;
}
.faq-item {
    margin-bottom: 2rem;
    scroll-margin-top: 6rem;
}
.faq-item h3 {
    font-weight: bold;
    margin-bottom: 0.5rem;
}
.faq-item h3 a {
    color: inherit;
    text-decoration: none;
}
.faq-item h3 a:hover {
    text-decoration: underline;
}
</style>