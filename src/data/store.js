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


  resuldsImg: [
    "../assets/images/review_1-compressor.jpg",
    "../assets/images/review_2-compressor.jpg",
    "../assets/images/review_3-compressor.jpg",
    "../assets/images/review_4-compressor.jpg"

  ],

  resuldsDescription: [
    "The trainer ad Avada Gym have helped me reach my fitness goals beyond anything I cloud of hoped for, I love it! ",
    "the admostphere at Avada Gym is amasing, the people are even better. All im all, it is a great place to work out.  ",
    "The facilities ot Avada Gym stood out to me the most. They are well maintained and have high quality equipment",
    "bod things to say aboutAvada Gym, they are top notch at every corner and truly take care  of their customers."
  ],


  resuldsName: [
    "- Tara Smith",
    "— Simon Chel",
    "-Jen Wirth",
    "-Jeff Glum"
  ],

  trainersName: [
    "Ann Baker",
    "Anne Warren",
    "Peter Rice",
  ]


});

