<template>
    <nav class="nav">
        <NuxtLink to="/" class="logo">Minnesota Handy</NuxtLink>
        <div class="links">
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/services">Services</NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
        </div>
    </nav>
</template>

<style scoped>
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    background: #224870;
    color: white;
}
.logo {
    font-weight: bold;
    font-size: 1.2rem;
    color: white;
    text-decoration: none;
}
.links {
    display: flex;
    gap: 1.5rem;
}
.links a {
    color: white;
    text-decoration: none;
}
.links a:hover {
    text-decoration: underline;
}
</style>
