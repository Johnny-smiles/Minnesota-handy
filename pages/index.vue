<template>
    <div>
        <HeroSection />
        <ServicesSection />
        <ContactForm />
        <Footer />
    </div>
</template>

<script setup>
import HeroSection from '~/components/HeroSection.vue'
import ServicesSection from '~/components/ServicesSection.vue'
import ContactForm from '~/components/ContactForm.vue'
import Footer from '~/components/Footer.vue'
import { useHead } from '#imports'

const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Minnesota Handy",
    url: "https://minnesotahandy.netlify.app",
    telephone: "+1-555-123-4567",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Minneapolis",
        addressRegion: "MN",
        postalCode: "55401",
        addressCountry: "US"
    },
    description: "Friendly, local home repair & electrical services in Minnesota.",
    openingHours: "Mo-Fr 08:00-17:00"
}

useHead({
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(structuredData)
        }
    ],
    // Prevents sanitization of JSON-LD
    __dangerouslyDisableSanitizersByTagID: {
        'ldjson': ['innerHTML']
    }
})
</script>
