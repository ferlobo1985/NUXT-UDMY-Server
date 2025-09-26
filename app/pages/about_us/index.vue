<template>
    <LazyAboutUs v-if="about"/>
    <button v-if="!about" @click="about = true">
        Show content
    </button>
</template>

<script setup>
    const about = ref(false)
</script>