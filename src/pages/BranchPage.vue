<script setup>
// Components
import Header from "../components/Header.vue";
import HeroSection from "../components/HeroSectionWithSlider.vue";
import SpecialOfferSection from "../components/PagesComponent/BranchPage/SpecialOfferSection.vue";
import PopularFoodSection from "../components/PagesComponent/BranchPage/PopularFoodSection.vue";
import NotIranianFoodSection from "../components/PagesComponent/BranchPage/NotIranianFoodSection.vue";
import AboutBranchSection from "../components/PagesComponent/BranchPage/AboutBranchSection.vue";
import UserCommentsSection from "../components/PagesComponent/BranchPage/UserCommentsSection.vue";
import Footer from "../components/Footer.vue";
import HamburgerMenu from "../components/HamburgerMenu.vue";
import Overlay from "../components/Overlay.vue";
import FoodCardSkeletonLoader from "../components/PagesComponent/BranchPage/VerticalFoodCardSkeletonLoader.vue";
</script>

<template>
  <!-- Branch Page -->
  <Header />

  <!-- Branch | Main -->
  <main>
    <!-- Branch | Hero Section -->
    <HeroSection />
    <!-- Branch | Special Offer Section -->
    <SpecialOfferSection />
    <!-- Branch | Popular Food Section -->
    <PopularFoodSection />
    <!-- Branch | Not Iranian Food Section -->
    <NotIranianFoodSection />
    <!-- Branch | About Branch Section -->
    <AboutBranchSection />
    <!-- Branch | User Commnets Section -->
    <UserCommentsSection />
  </main>

  <!----------------------->

  <!-- Footer -->
  <Footer />
  <!-- Hamburger Menu -->
  <HamburgerMenu />
  <!-- Overlay -->
  <Overlay />
</template>
