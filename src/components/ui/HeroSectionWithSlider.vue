<!-- Hero Section Component With Slider ( For Home & Branch & Menu Page Only Use ) -->
<script setup lang="ts">
// Swiper Config
import { ref } from "vue";
const paginationEl = ref<HTMLDivElement | null>(null);
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// Component
import HeroBannerSlider from "./HeroBannerSlider.vue";
</script>

<template>
  <section class="mb-6 md:mb-12 hero-section">
    <!-- Swiper -->
    <Swiper
      :modules="[Autoplay, Pagination, EffectFade]"
      :pagination="{ clickable: true, el: paginationEl }"
      effect="fade"
      :autoplay="{ delay: 5000 }"
      :loop="true"
    >
      <!-- Swiper Slide -->
      <SwiperSlide>
        <HeroBannerSlider
          bgName="one"
          content="تجربه غذای سالم و گیاهی به سبک ترخینه"
        />
      </SwiperSlide>
      <SwiperSlide>
        <HeroBannerSlider bgName="two" content="تجربه فست فود های گیاهی" />
      </SwiperSlide>
      <SwiperSlide>
        <HeroBannerSlider
          bgName="three"
          content="تجربه غذای گیاهی به سبک ترخینه"
        />
      </SwiperSlide>
      <SwiperSlide>
        <HeroBannerSlider
          bgName="four"
          content="نوشیدنی های گرم و سرد به سبک ترخینه"
        />
      </SwiperSlide>

      <!-- Slider Pagination -->
      <div ref="paginationEl"
        class="pagination-button--swiper !bottom-1.25 !translate-x-1/2 !left-1/2 !right-1/2 md:!bottom-2.5 absolute flex items-center justify-center z-50 gap-x-1 *:bg-gray-500 *:!rounded-full md:*:!size-2 *:!size-1 *:!transition-none *:!m-0"
      ></div>

      <!-- Rect Angle Desktop -->
      <svg
        class="absolute bottom-0 z-40 translate-x-1/2 left-1/2 right-1/2 max-md:hidden"
        width="154"
        height="33"
        viewBox="0 0 154 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.1492 12.9957C15.3255 5.56588 21.9046 0 29.6466 0H125.118C132.571 0 138.998 5.16164 141.261 12.2634C144.25 21.6506 148.867 33 153.711 33C161.97 33 -9.49755 33 0.41389 33C6.07606 33 10.4444 22.2302 13.1492 12.9957Z"
          fill="white"
        />
      </svg>

      <!-- Rect Angle Mobile -->
      <svg
        class="z-40 md:hidden block -bottom-[2px] left-1/2 right-1/2 absolute translate-x-1/2"
        width="82"
        height="19"
        viewBox="0 0 82 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M81.1819 18.9086C71.5188 15.7635 70.945 0 60.783 0H20.1709C9.93327 0 10.3917 19 0.153999 19C-4.24391 19 87.0571 19 81.7796 19C81.5654 19 81.3665 18.9687 81.1819 18.9086Z"
          fill="white"
        />
      </svg>
    </Swiper>
  </section>
</template>
