import { defineStore } from "pinia";
import { ref } from "vue";

export const useDealerAgreementStore = defineStore("dealer-agreement", () => {
    const provinces: string[] = [
        "تهران", "فارس", "خراسان رضوی", "اصفهان", "آذربایجان شرقی", 
        "خوزستان", "کرمان", "لرستان", "البرز", "سیستان و بلوچستان",
        "قم", "گیلان", "کردستان", "هرمزگان", "کرمانشاه", "آذربایجان غربی", 
        "مرکزی", "همدان", "گلستان", "بوشهر", "کهگیلویه و بویراحمد", 
        "زنجان", "قزوین", "ایلام", "مازندران", "چهارمحال و بختیاری", 
        "خراسان شمالی", "اردبیل", "خراسان جنوبی", "یزد", "خراسان شمالی"
    ];

    const counties: Record<string, string[]> = {
        "تهران": ["تهران", "شهریار", "رباط‌کریم", "پاکدشت", "ورامین", "فیروزکوه", "دماوند", "ری", "اسلامشهر", "پردیس"],
        "فارس": ["شیراز", "مرودشت", "کازرون", "لارستان", "فراشبند", "فسا", "زرین‌دشت", "استهبان", "شیراز", "مهر"],
        "خراسان رضوی": ["مشهد", "سبزوار", "تربت‌حیدریه", "نیشابور", "کاشمر", "قوچان", "چناران", "کاشمر", "بردسکن"],
        "اصفهان": ["اصفهان", "نجف‌آباد", "کاشان", "خمینی‌شهر", "شهرضا", "خوراسگان", "آران و بیدگل", "خوانسار", "فریدن"],
        "آذربایجان شرقی": ["تبریز", "مرند", "میانه", "اهر", "ورزقان", "اسکو", "آذرشهر", "بستان‌آباد", "سراب"],
        "خوزستان": ["اهواز", "دزفول", "ماهشهر", "آبادان", "خرمشهر", "اندیمشک", "رامشیر", "ایذه", "شادگان", "گتوند"],
        "کرمان": ["کرمان", "رفسنجان", "سیرجان", "بم", "جیرفت", "کوهبنان", "بردسیر", "قلعه‌گنج", "رابر"],
        "لرستان": ["خرم‌آباد", "بروجرد", "دلفان", "الیگودرز", "پلدختر", "چگنی", "دورود", "بیرانشهر", "معمولان"],
        "البرز": ["کرج", "نظرآباد", "ساوجبلاغ", "کوهین", "شهریار", "ملارد", "فردیس"],
        "سیستان و بلوچستان": ["زاهدان", "زابل", "چابهار", "ایرانشهر", "خاش", "نیک‌شهر", "فنوج", "دلگان", "سرباز"],
        "قم": ["قم", "جعفریه", "کهک", "سلفچگان", "دستجرد"],
        "گیلان": ["رشت", "انزلی", "صومعه‌سرا", "تالش", "آستانه‌اشرفیه", "شفت", "لشت‌نشا", "فومن"],
        "کردستان": ["سنندج", "بانه", "قروه", "دیواندره", "مریوان", "کامیاران", "دهگلان", "بیجار", " سروآباد"],
        "هرمزگان": ["بندرعباس", "قشم", "ابوموسی", "میناب", "خمیر", "رودان", "بندر لنگه", "پارسیان", "کیش"],
        "کرمانشاه": ["کرمانشاه", "صحنه", "کنگاور", "اسلام‌آباد غرب", "سرپل ذهاب", "قصر شیرین", "دالاهو"],
        "آذربایجان غربی": ["ارومیه", "مهاباد", "خوی", "بوکان", "نقده", "چالدران", "سردشت", "پیرانشهر", "شاهین‌دژ"],
        "مرکزی": ["اراک", "ساوه", "خنداب", "تفرش", "محلات", "کمیجان", "زرندیه", "فراهان", "دلیجان"],
        "همدان": ["همدان", "ملایر", "نهاوند", "اسدآباد", "بهار", "کبودرآهنگ", "مریانج", "تویسرکان"],
        "گلستان": ["گرگان", "گنبدکاووس", "آزادشهر", "کردکوی", "علی‌آباد", "رودبار", "رامیان", "آق‌قلا"],
        "بوشهر": ["بوشهر", "دشتستان", "گناوه", "کنگان", "دیر", "بندر دیر", "عسلویه", "تنگستان"],
        "کهگیلویه و بویراحمد": ["یاسوج", "گچساران", "دنا", "بهمئی", "چرام"],
        "زنجان": ["زنجان", "خرمدره", "ابهر", "ماهنشان", "ایجرود", "آببر", "سلطانیه"],
        "قزوین": ["قزوین", "البرز", "آبیک", "تاکستان", "بوئین‌زهرا", "شال", "شهرک صنعتی البرز"],
        "ایلام": ["ایلام", "مهران", "دهلران", "آبدانان", "دره‌شهر"],
        "مازندران": ["ساری", "تنکابن", "نوشهر", "بابل", "آمل", "چالوس", "بهنمیر", "نکا", "ساری", "محمودآباد"],
        "چهارمحال و بختیاری": ["شهرکرد", "بروجن", "لردگان", "کاشان", "کیار"],
        "خراسان شمالی": ["بجنورد", "شیروان", "آشخانه", "فاروج", "جاجرم"],
        "اردبیل": ["اردبیل", "مشگین‌شهر", "پارس‌آباد", "گرمی", "بیله‌سوار"],
        "خراسان جنوبی": ["بیرجند", "نهبندان", "قاینات", "فردوس", "سرایان"],
        "یزد": ["یزد", "اردکان", "بافق", "میبد", "تفت", "اشکذر", "حمیدیا", "صدوق"]
    };

    const selectedCountyList = ref<string[]>([]);

    const getCountiesByProvince = (provinceName: string = 'تهران'): void => {
        selectedCountyList.value = counties[provinceName] || [];
    }
    getCountiesByProvince()

    return { 
        provinces,
        getCountiesByProvince,
        selectedCountyList
    };
});
