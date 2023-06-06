import { reactive } from "vue";

export const store = reactive({
  searchText: "",
  icons: [
    "fa-solid fa-paperclip fgOrange",
    "fa-solid fa-bicycle fgOrange",
    "fa-brands fa-cloudflare fgOrange",
    "fa-solid fa-heart-pulse fgOrange"],
  benefitsList: [
    "Strength & Conditioning",
    "Fitness & Cardio",
    "Flexibility & Rest",
    "Health & Diet"
  ],


});

