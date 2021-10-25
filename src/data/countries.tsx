import React from "react";
import { IOption } from "../@interfaces";

const getCountryFlag = (countryISO: string) =>
  `https://hatscripts.github.io/circle-flags/flags/${countryISO.toLowerCase()}.svg`;

interface ICountry {
  city: string;
  iso: string;
}

const countriesData: ICountry[] = [
  {
    city: "Rome",
    iso: "IT",
  },
  {
    city: "Amsterdam",
    iso: "NL",
  },
  {
    city: "Berlin",
    iso: "DE",
  },
  {
    city: "Paris",
    iso: "FR",
  },
  {
    city: "Washington",
    iso: "US",
  },
  {
    city: "Moscow",
    iso: "RU",
  },
  {
    city: "Brussels",
    iso: "BE",
  },
];

export const countries: IOption[] = countriesData.map((country) => ({
  value: country.iso,
  label: (
    <>
      <img
        src={getCountryFlag(country.iso.toLowerCase())}
        alt={country.iso.toLowerCase()}
        className="w-5 h-5 mr-2"
      />{" "}
      {`${country.city}, ${country.iso}`}
    </>
  ),
}));
