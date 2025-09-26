<template>
    <LazyAboutUs v-if="about"/>
    <button v-if="!about" @click="about = true">
        Show content
    </button>
    <hr/>
    <NuxtImg
        src="/images/horse.jpg"
        alt="horse"
        width="300"
        height="200"
        format="webp"
        quality="1"
    />
</template>

<script setup>
    const about = ref(false)
</script>