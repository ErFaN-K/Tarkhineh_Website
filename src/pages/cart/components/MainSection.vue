<script setup lang="ts">
import FactorPanel from './FactorPanel.vue';
import FoodCardContainer from './card-step/FoodCardContainer.vue';
import CompleteInfoStep from './complete-info-step/CompleteInfoStep.vue'
import InternetPaymentStep from './Internet-payment-step/InternetPaymentStep.vue'
import NotFound from './card-step/NotFound.vue';

import { useCartStore } from '@/store/modules/cartStore.ts' 
const cartStore = useCartStore()
</script>

<template>
    <section class="main-section md:my-10 my-6">
        <div class="container">
            <NotFound v-if="false"/>
            <div v-else class="grid lg:grid-cols-12 grid-cols-4 items-start lg:gap-x-6 max-lg:gap-y-3">
                <FoodCardContainer v-if="cartStore.step === 1"/>
                <CompleteInfoStep v-if="cartStore.step === 2"/>
                <InternetPaymentStep v-if="cartStore.step === 3"/>
                <FactorPanel />
            </div>
        </div>
    </section>
</template> 