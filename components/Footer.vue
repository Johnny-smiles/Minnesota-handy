<template>
    <footer class="site-footer" role="contentinfo">
        <p>&copy; {{ new Date().getFullYear() }} {{ name }}. All rights reserved.</p>
        <p>
            <a :href="`tel:${phone}`">{{ phone }}</a> •
            <a :href="`mailto:${email}`">{{ email }}</a>
        </p>
    </footer>
</template>

<script setup>
defineProps({
    name: String,
    phone: String,
    email: String
})
</script>

<style scoped>
.site-footer {
    background: #1f2937;
    color: #ccc;
    padding: 2rem;
    text-align: center;
}
.site-footer a {
    color: #f8b400;
    text-decoration: underline;
}
.site-footer address {
    margin-top: 1rem;
    font-style: normal;
}
</style>