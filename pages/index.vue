<template>
    <main>
        <HeroSection />
        <ServicesSection />
        <section aria-labelledby="contact-heading">
            <ContactForm />
        </section>
        <FaqSection />
        <Footer />
    </main>
</template>

<script setup>
import HeroSection from '~/components/HeroSection.vue'
import ServicesSection from '~/components/ServicesSection.vue'
import ContactForm from '~/components/ContactForm.vue'
import FaqSection from '~/components/FaqSection.vue'
import Footer from '~/components/Footer.vue'
import { siteConfig } from '~/site.config'

const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.siteName,
    "url": siteConfig.siteUrl,
    "telephone": siteConfig.phone,
    "address": {
        "@type": "PostalAddress",
        "addressLocality": siteConfig.location.city,
        "addressRegion": siteConfig.location.state,
        "postalCode": siteConfig.location.zip,
        "addressCountry": siteConfig.location.country
    },
    "description": siteConfig.description,
    "openingHours": siteConfig.hours,
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": siteConfig.location.latitude,
        "longitude": siteConfig.location.longitude
    }
}

useHead({
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify(structuredData)
        }
    ]
})
</script>