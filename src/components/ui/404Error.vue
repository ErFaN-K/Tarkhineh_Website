<script setup lang="ts">
    import AppIcon from './AppIcon.vue';
</script>

<template>
    <!-- 404 Not Found -->
    <div class="flex flex-col md:gap-y-4 gap-y-2">
        <AppIcon className="md:h-100 h-50" iconName="not-found"/>
        <span class="text-Primary md:text-3xl text-xl font-Dana-SemiBold text-center"> چیزی که دنبالش بودی، اینجا نیست.</span>
    </div>
</template>