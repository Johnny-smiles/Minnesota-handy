<template>
    <form class="contact" aria-labelledby="contact-heading" @submit.prevent="handleSubmit">
        <h2 id="contact-heading">We’d Love to Hear From You</h2>
        <p>Reach out to us at {{ email }} or drop a message below.</p>
        <input type="text" placeholder="Your Name" v-model="name" required aria-label="Name" />
        <input type="email" placeholder="Your Email" v-model="email" required aria-label="Email" />
        <textarea placeholder="What can we help you with today?" v-model="message" required aria-label="Message"></textarea>
        <button type="submit" aria-label="Submit message to Minnesota Handy">Send a Message</button>
    </form>
</template>

<script setup>
const name = ref('')
const email = ref('')
const message = ref('')
const props = defineProps({ email: String })

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
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
    text-align: center;
}
.contact input,
.contact textarea {
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