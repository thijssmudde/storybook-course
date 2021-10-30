export type CountryISO = "BE" | "DE" | "FR" | "IT" | "NL" | "RU" | "US";
type rentalImg = "rental0" | "rental1" | "rental2";

type image = "logo" | "demoAvatar" | CountryISO | rentalImg;

// Development images
const devImages: Record<image, string> = {
  logo: require("../img/logo.png"),
  demoAvatar: require("../img/demoAvatar.png"),

  BE: require("../img/be.svg"),
  DE: require("../img/de.svg"),
  FR: require("../img/fr.svg"),
  IT: require("../img/it.svg"),
  NL: require("../img/nl.svg"),
  RU: require("../img/ru.svg"),
  US: require("../img/us.svg"),

  rental0: require("../img/rental0.png"),
  rental1: require("../img/rental1.png"),
  rental2: require("../img/rental2.png"),
};

export const images = devImages;
