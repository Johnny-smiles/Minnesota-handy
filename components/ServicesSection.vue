<template>
    <section class="services" aria-labelledby="services-heading">
        <div class="services-content">
            <h2 id="services-heading">Helping Hands for All Your Home Needs</h2>
            <p>
                We’re not just service folks — we’re your neighbors. Here’s what we can help with:
            </p>
            <div class="grid">
                <article class="card" itemscope itemtype="https://schema.org/Service">
                    <NuxtImg src="/tools.png" width="200" alt="Outlet services" />
                    <h3 itemprop="name">Outlet Repair</h3>
                    <p itemprop="description">
                        From sparks to silence — we’ll make sure your power’s flowing safe and steady.
                    </p>
                </article>

                <article class="card" itemscope itemtype="https://schema.org/Service">
                    <NuxtImg src="/circuit.png" width="200" alt="Electrical panel upgrade" />
                    <h3 itemprop="name">Panel Upgrades</h3>
                    <p itemprop="description">
                        Need more juice? We’ll modernize your system without a fuss.
                    </p>
                </article>

                <article class="card" itemscope itemtype="https://schema.org/Service">
                    <NuxtImg src="/lighting.png" width="200" alt="Lighting installation" />
                    <h3 itemprop="name">Custom Lighting</h3>
                    <p itemprop="description">
                        From cozy cabin glows to kitchen showstoppers — we brighten up your space with care.
                    </p>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup></script>

<style scoped>
.services {
    padding: 4rem 2rem;
    background: #f3f4f6;
    text-align: center;
}
.services-content {
    max-width: 900px;
    margin: auto;
}
.grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
}
.card {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    text-align: left;
}
.card h3 {
    margin-top: 1rem;
}
</style>
