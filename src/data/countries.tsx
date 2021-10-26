import React from "react";
import { IOption } from "../@interfaces";
import { CountryISO, images } from "./img";

interface ICountry {
  city: string;
  countryISO: CountryISO;
}

const countriesData: ICountry[] = [
  {
    city: "Rome",
    countryISO: "it",
  },
  {
    city: "Amsterdam",
    countryISO: "nl",
  },
  {
    city: "Berlin",
    countryISO: "de",
  },
  {
    city: "Paris",
    countryISO: "fr",
  },
  {
    city: "Washington",
    countryISO: "us",
  },
  {
    city: "Moscow",
    countryISO: "ru",
  },
  {
    city: "Brussels",
    countryISO: "be",
  },
];

export const countries: IOption[] = countriesData.map((country) => ({
  value: country.countryISO,
  label: (
    <>
      <img
        src={images[country.countryISO]}
        alt={country.countryISO.toLowerCase()}
        className="w-5 h-5 mr-2"
      />{" "}
      {`${country.city}, ${country.countryISO}`}
    </>
  ),
}));
