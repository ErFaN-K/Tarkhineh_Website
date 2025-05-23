<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import jalaali from 'jalaali-js'

const emit = defineEmits<{
  (event: 'getDate', payload: { gregorianDate: Date; jalaaliDateFormatted: string }): void;
  (event: 'closeDatePicker', payload: boolean): void;
}>()

const jalaaliCurrentDate = jalaali.toJalaali(new Date())
const selectedDate = ref<{ jy: number; jm: number; jd: number }>(jalaaliCurrentDate)

const dayNumber = reactive<number[]>([])
const yearNumber = reactive<number[]>([])
const monthNumber = reactive<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

const getMonthLength = (year: number, month: number): void => {
  dayNumber.length = 0
  const monthLength = jalaali.jalaaliMonthLength(year, month)
  for (let i = 1; i <= monthLength; i++) {
    dayNumber.push(i)
  }
}

const calculateMinYear = (minYear: number): void => {
  yearNumber.length = 0
  for (let i = minYear; i <= selectedDate.value.jy; i++) {
    yearNumber.push(i)
  }
}

const setDate = (year?: number, month?: number, day?: number): void => {
  selectedDate.value = {
    jy: year ?? selectedDate.value.jy,
    jm: month ?? selectedDate.value.jm,
    jd: day ?? selectedDate.value.jd,
  }
  getMonthLength(selectedDate.value.jy, selectedDate.value.jm)
}

const sendDate = (): void => {
  const { gy, gm, gd } = jalaali.toGregorian(selectedDate.value.jy, selectedDate.value.jm, selectedDate.value.jd)
  const gregorianDate = new Date(gy, gm - 1, gd)
  const jalaaliDateFormattedStr = jalaaliDateFormatted.value

  emit('getDate', { gregorianDate, jalaaliDateFormatted: jalaaliDateFormattedStr })
  emit('closeDatePicker', false)
}

calculateMinYear(1340)
getMonthLength(selectedDate.value.jy, selectedDate.value.jm)

const jalaaliDateFormatted = computed(() => {
  return `${selectedDate.value.jd} / ${selectedDate.value.jm} / ${selectedDate.value.jy}`
})
</script>

<template>
    <!-- Date Picker -->
    <div class="z-20 absolute max-w-83.25 md:p-4 p-3 rounded-lg left-0 right-0 top-[calc(100%+8px)] mx-auto bg-white shadow-lg">
        <div class="flex items-center flex-col gap-y-4">
            <div class="flex items-center justify-center gap-x-4">
                <!-- Day -->
                <div class="w-20 flex flex-col md:gap-y-2 gap-y-1">
                    <!-- Title -->
                    <span class="text-sm text-center text-gray-800 font-Dana">روز</span>
                    <!-- Numbers -->
                    <div class="h-24.5 px-1 overflow-auto custom-scroll flex flex-col divide-y divide-gray-300">
                        <span :class="selectedDate.jd === day ? 'date--active' : ''" @click="setDate(selectedDate.jy, selectedDate.jm, day)" v-for="day in dayNumber" :key="day" class="text-xs text-center text-gray-700 py-1 font-Dana hover:bg-gray-100 cursor-pointer">{{ day }}</span>     
                    </div>
                </div>
                <!-- Month -->
                <div class="w-20 flex flex-col md:gap-y-2 gap-y-1">
                    <!-- Title -->
                    <span class="text-sm text-center text-gray-800 font-Dana">ماه</span>
                    <!-- Numbers -->
                    <div class="h-24.5 px-1 overflow-auto custom-scroll flex flex-col divide-y divide-gray-300">
                        <span :class="selectedDate.jm === month ? 'date--active' : ''" @click="setDate(selectedDate.jy, month, selectedDate.jd)" v-for="month in monthNumber" :key="month" class="text-xs text-center text-gray-700 py-1 font-Dana hover:bg-gray-100 cursor-pointer">{{ month }}</span>     
                    </div>
                </div>
                <!-- Year -->
                <div class="w-20 flex flex-col md:gap-y-2 gap-y-1">
                    <!-- Title -->
                    <span class="text-sm text-center text-gray-800 font-Dana">سال</span>
                    <!-- Numbers -->
                    <div class="h-24.5 px-1 overflow-auto custom-scroll flex flex-col divide-y divide-gray-300">
                        <span :class="selectedDate.jy === year ? 'date--active' : ''" @click="setDate(year, selectedDate.jm, selectedDate.jd)" v-for="year in yearNumber" :key="year" class="text-xs text-center text-gray-700 py-1 font-Dana hover:bg-gray-100 cursor-pointer" >{{ year }}</span>
                    </div>
                </div>
            </div>
            <!-- Show Custom Date -->
            <span class="text-center text-base font-Dana text-Primary">{{ jalaaliDateFormatted }}</span>
            <!-- Submit Date Button -->
            <button @click="sendDate" class="w-full h-10 bg-Primary hover:bg-Primary/90 text-sm cursor-pointer font-Dana-Medium text-white rounded-sm">ثبت تاریخ</button>
        </div>
    </div>
</template>
