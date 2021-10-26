import { IRental } from "../@interfaces";
import { devImages } from "./img";

const rental0: IRental = {
  id: 0,
  title: "Single bedroom apartment near Central Station",
  subtitle: "In the heart of the flower market city centre",
  image: devImages.rental0,
  badge: "Rare find",
  rating: "4.8",
  reviews: 20,
  address: "Prinsengracht",
  bed: "1 bed",
  wifi: "Wi-Fi",
  price: "€480",
  currency: "EUR",
};

const rental1: IRental = {
  id: 1,
  title: "Double bedroom apartment in Slotermeer",
  subtitle: "Lovely and stylish apartment in the city centre",
  image: devImages.rental1,
  badge: "Rare find",
  rating: "3.9",
  reviews: 96,
  address: "Slotermeer-SW",
  bed: "2 beds",
  wifi: "Wi-Fi",
  price: "€950",
  currency: "EUR",
};

const rental2: IRental = {
  id: 2,
  title: "Modern studio in Jordaan",
  subtitle: "Charming new studio apartment Jordaan",
  image: devImages.rental2,
  badge: "Rare find",
  rating: "4.3",
  reviews: 5,
  address: "Jordaan",
  bed: "2 beds",
  wifi: "Wi-Fi",
  price: "€810",
  currency: "EUR",
};

export const rentals: IRental[] = [rental0, rental1, rental2];
