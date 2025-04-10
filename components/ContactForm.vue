<template>
    <form class="contact" @submit.prevent="handleSubmit">
        <h2>We’d Love to Hear From You</h2>
        <p>Drop us a note — just like you'd wave from the porch.</p>
        <input type="text" placeholder="Your Name" v-model="name" required />
        <input type="email" placeholder="Your Email" v-model="email" required />
        <textarea placeholder="What can we help you with today?" v-model="message" required />
        <button type="submit">Send a Message</button>
    </form>
</template>

<script setup>
const name = ref('')
const email = ref('')
const message = ref('')

function handleSubmit() {
    alert(`Thanks kindly! We'll be in touch soon, neighbor.\nName: ${name.value}\nEmail: ${email.value}\nMessage: ${message.value}`)
}
</script>

<style scoped>
.contact {
    margin: 4rem auto;
    max-width: 600px;
    background: #fffefc;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    text-align: center;
}
.contact input, .contact textarea {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    margin-bottom: 1rem;
}
.contact button {
    background: #224870;
    color: white;
    font-weight: bold;
    padding: 1rem 2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}
</style>
