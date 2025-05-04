<template>
    <header class="hero" role="banner">
        <div class="hero-content">
            <h1>Welcome to {{ siteName }}, Your Friendly Neighborhood Experts</h1>
            <p>
                We’re local, dependable, and always happy to lend a hand —
                rain, snow, or shine.
            </p>
            <NuxtImg
                src="/tools-hero.png"
                width="700"
                alt="Friendly technician standing with toolbox and wiring gear"
                class="hero-image"
            />
            <br />
            <a href="#contact" class="cta" role="button">Get in Touch</a>
        </div>
    </header>
</template>

<script setup>
defineProps({ siteName: String })
</script>

<style scoped>
.hero {
    text-align: center;
    padding: 5rem 2rem;
    background: #d0e8f2;
    color: #333;
}
.hero-content {
    max-width: 800px;
    margin: auto;
}
.hero-image {
    max-width: 100%;
    height: auto;
}
.cta {
    display: inline-block;
    margin-top: 2rem;
    background: #224870;
    color: white;
    padding: 1rem 2rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: bold;
}
</style>