<script setup lang="ts">
import AppIcon from "@/components/ui/AppIcon.vue";

defineProps<{
  inputId: string,
  mainTitle: string,
  titleDescription: string,
  iconName: string
}>()
</script>

<template>
  <div>
    <input type="radio" :id="inputId" name="in-person" hidden>
    <label :for="inputId" class="flex items-center md:gap-x-2 gap-x-1 text-gray-700">
      <!-- Custom Radio & Method Name -->
      <div class="flex items-center gap-x-2">
        <span class="size-4 flex items-center justify-center border border-gray-400 rounded-full">
          <span class="size-3 rounded-full"></span>
        </span>
        <div class="flex flex-col lg:gap-y-1 font-Dana">
          <span class="md:text-sm text-xs">{{ mainTitle }}</span>
          <span class="text-custom max-md:hidden">{{ titleDescription }}</span>
        </div>
      </div>
      <AppIcon className="size-4 md:size-6" :iconName="iconName"/>
    </label>
  </div>
</template>

<style scoped>
input:checked + label div span span {
    background-color: var(--color-Success-Light);
}
</style>