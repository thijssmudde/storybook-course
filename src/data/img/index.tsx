export type CountryISO = "be" | "de" | "fr" | "it" | "nl" | "ru" | "us";
type rentalImg = "rental0" | "rental1" | "rental2";

type image = "logo" | "demoAvatar" | CountryISO | rentalImg;

// Development images
const devImages: Record<image, string> = {
  logo: require("./logo.png"),
  demoAvatar: require("./demoAvatar.png"),

  be: require("./be.svg"),
  de: require("./de.svg"),
  fr: require("./fr.svg"),
  it: require("./it.svg"),
  nl: require("./nl.svg"),
  ru: require("./ru.svg"),
  us: require("./us.svg"),

  rental0: require("./rental0.png"),
  rental1: require("./rental1.png"),
  rental2: require("./rental2.png"),
};

// Production images using the CDN
const prodImages: Record<image, string> = {
  logo: "https://res.cloudinary.com/tailwindcss/image/upload/v1634916081/Logo_Icon_dq276z.png",
  demoAvatar:
    "https://res.cloudinary.com/tailwindcss/image/upload/v1634915122/demoAvatar_jooj6y.png",

  be: "https://res.cloudinary.com/tailwindcss/image/upload/v1635279280/be_jrkj6d.svg",
  de: "https://res.cloudinary.com/tailwindcss/image/upload/v1635279281/de_umqzrw.svg",
  fr: "https://res.cloudinary.com/tailwindcss/image/upload/v1635279284/fr_kfnvdu.svg",
  it: "https://res.cloudinary.com/tailwindcss/image/upload/v1635279276/it_dwah46.svg",
  nl: "https://res.cloudinary.com/tailwindcss/image/upload/v1635279277/nl_tpy2ab.svg",
  ru: "https://res.cloudinary.com/tailwindcss/image/upload/v1635279278/ru_dcbkqy.svg",
  us: "https://res.cloudinary.com/tailwindcss/image/upload/v1635279279/us_bid855.svg",

  rental0:
    "https://res.cloudinary.com/tailwindcss/image/upload/v1634674297/image_1_egxeww.png",
  rental1:
    "https://res.cloudinary.com/tailwindcss/image/upload/v1634674298/image_2_ngqift.png",
  rental2:
    "https://res.cloudinary.com/tailwindcss/image/upload/v1634674297/image_3_c7xiit.png",
};

export const images =
  process.env.NODE_ENV === "production" ? prodImages : devImages;
