<template>
    <section class="hero">
        <h1>Welcome to Your Friendly Neighborhood Experts</h1>
        <p>We're local, dependable, and always happy to lend a hand — rain, snow, or shine.</p>

        <div class="hero-img-wrapper">
            <NuxtImg src="/tools-hero.png" alt="Friendly technicians with tools" />
        </div>

        <a href="#contact" class="cta">Get in Touch</a>
    </section>
</template>

<style scoped>
.hero {
    text-align: center;
    padding: 5rem 2rem;
    background: #d0e8f2;
    color: #333;
}

.hero-img-wrapper {
    width: 100%;
    max-width: 700px;
    margin: 2rem auto 0;
}

.hero-img-wrapper :deep(img) {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
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
