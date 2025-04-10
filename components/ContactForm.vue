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
    padding: 2.5rem;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
    text-align: center;
}

.contact h2 {
    margin-bottom: 0.5rem;
}

.contact p {
    margin-bottom: 2rem;
    color: #444;
}

.contact input,
.contact textarea {
    padding: 1.25rem 1rem;
    border: 1px solid #ddd;
    border-radius: 10px;
    width: 100%;
    margin-bottom: 1.25rem;
    font-size: 1rem;
    transition: box-shadow 0.2s ease;
    box-sizing: border-box;
}

.contact input:focus,
.contact textarea:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(34, 72, 112, 0.15);
    border-color: #224870;
}

.contact textarea {
    min-height: 120px;
    resize: vertical;
}

.contact button {
    background: #224870;
    color: white;
    font-weight: bold;
    padding: 1rem 2.5rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.2s ease;
}

.contact button:hover {
    background: #1b3b63;
}
</style>