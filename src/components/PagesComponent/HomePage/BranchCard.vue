<script setup>
defineProps({
  branchImage: {
    type: String,
    required: true,
  },
  branchName: {
    type: String,
    required: true,
  },
  branchAddress: {
    type: String,
    required: true,
  },
  branchPageLink: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex flex-row w-full delay-100 border border-gray-400 rounded-lg md:flex-col hover:border-Primary transition-all"
  >
    <a :href="branchPageLink">
      <img :src="branchImage" class="max-md:min-w-36 max-md:max-h-20" />
    </a>
    <div
      class="flex flex-col items-center max-md:justify-between w-full p-2 text-center md:px-2 md:py-4 gap-y-1"
    >
      <h3 class="text-sm text-gray-800 md:text-xl font-Morabba-Bold">
        {{ branchName }}
      </h3>
      <p
        class="text-gray-700 text-custom md:text-sm font-Dana line-clamp-2 h-8 md:h-10 md:mb-2"
      >
        {{ branchAddress }}
      </p>
      <a
        :href="branchPageLink"
        class="text-xs font-Dana flex items-center justify-center w-32 h-8 border rounded-sm gap-x-1 max-md:hidden border-Primary text-Primary"
      >
        <span>صفحه شعبه</span>
        <svg class="size-4">
          <use href="#chevron-left-mini"></use>
        </svg>
      </a>
    </div>
  </div>
</template>
