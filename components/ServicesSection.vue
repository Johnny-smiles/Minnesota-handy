<template>
    <section class="services">
        <h2>Helping Hands for All Your Home Needs</h2>
        <p>We're not just service folks — we're your neighbors. Here's what we can help with:</p>
        <div class="grid">
            <div class="card">
                <NuxtImg src="/socket.jpg" width="200" alt="Outlet services" />
                <h3>Outlet Repair</h3>
                <p>From sparks to silence — we’ll make sure your power’s flowing safe and steady.</p>
            </div>
            <div class="card">
                <NuxtImg src="/circuit.jpg" width="200" alt="Circuit upgrades" />
                <h3>Panel Upgrades</h3>
                <p>Need more juice? We’ll modernize your system without a fuss.</p>
            </div>
            <div class="card">
                <NuxtImg src="/lighting.jpg" width="200" alt="Lighting installations" />
                <h3>Custom Lighting</h3>
                <p>From cozy cabin glows to kitchen showstoppers — we brighten up your space with care.</p>
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
    box-shadow: 0 2px 12px rgba(0,0,0,0.1);
    max-width: 300px;
}
.card h3 {
    margin-top: 1rem;
}
</style>
