<script setup lang="ts">
    import AppIcon from "@/components/ui/AppIcon.vue";
</script>

<template>  
    <div class="md:py-4 md:px-2 md:border md:rounded-lg rounded-sm max-md:rounded-none border-gray-400">
        <!-- User Profile & User Information -->
        <div class="flex md:items-end items-center md:px-1 md:gap-x-5 gap-x-2 mb-2">
            <!-- User Profile -->
            <div class="md:size-22 size-12 rounded-full border border-gray-400 overflow-hidden">
                <img src="/src/assets/images/avatars/Default-User-Profile.png" alt="User Profile" class="size-full object-cover">
            </div>
            <!-- User Information -->
            <div class="font-Dana flex flex-col items-start gap-y-1">
                <!-- Username -->
                <span class="text-sm md:text-base text-gray-800">آرزو محمدعلیزاده</span>
                <!-- User Phone -->
                <span class="text-custom md:text-xs text-gray-700" dir="ltr">۰۹۱۴ ۸۶۴ ۳۳۵۰</span>
            </div>
        </div>
        <!-- Dashboard Routes -->
        <div class="pt-2 border-t border-t-gray-700 flex flex-col md:gap-y-1">
            <!-- Route -->
            <router-link activeClass="desktop-profile-panel__link--active" :to="{ name: 'Dashboard|Profile' }" class="h-10 md:h-9.5 flex items-center gap-x-1 px-2 text-gray-800 font-Dana">
                <AppIcon className="size-4 md:size-5" iconName="user"/>
                <span class="text-xs md:text-base">پروفایل</span>
            </router-link>
            <router-link activeClass="desktop-profile-panel__link--active" :to="{ name: 'Dashboard|Orders' }" class="h-10 md:h-9.5 flex items-center gap-x-1 px-2 text-gray-800 font-Dana">
                <AppIcon className="size-4 md:size-5" iconName="order"/>
                <span class="text-xs md:text-base">پیگیری سفارشات</span>
            </router-link>
            <router-link activeClass="desktop-profile-panel__link--active" :to="{ name: 'Dashboard|Wishlist' }" class="h-10 md:h-9.5 flex items-center gap-x-1 px-2 text-gray-800 font-Dana">
                <AppIcon className="size-4 md:size-5" iconName="heart"/>
                <span class="text-xs md:text-base">علاقمندی‌ها</span>
            </router-link>
            <router-link activeClass="desktop-profile-panel__link--active" :to="{ name: 'Dashboard|Address' }" class="h-10 md:h-9.5 flex items-center gap-x-1 px-2 text-gray-800 font-Dana">
                <AppIcon className="size-4 md:size-5" iconName="location"/>
                <span class="text-xs md:text-base">آدرس‌های من</span>
            </router-link>
            <button class="h-10 md:h-9.5 flex items-center gap-x-1 px-2 text-Error font-Dana">
                <AppIcon className="size-4 md:size-5 rotate-180" iconName="exit"/>
                <span class="text-xs md:text-base">خروج</span>
            </button>
        </div>
    </div>
</template>