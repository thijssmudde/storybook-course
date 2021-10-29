import React, { FC } from "react";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Typography } from "./Typography";
import { IRental } from "./@interfaces";
import {
  FiMapPin,
  FiStar,
  FiHome,
  FiWifi,
  FiHeart,
  FiAward,
} from "react-icons/fi";
import { useRentalRating } from "./helpers/useRentalRating";

export interface RentalCardProps {
  rental: IRental;
}

export const RentalCard: FC<RentalCardProps> = ({ rental }) => {
  const { arrayStarsFilled, arrayRemainingFilled } = useRentalRating(
    rental.rating,
  );

  return (
    <div className="relative flex flex-col bg-white rounded-lg shadow-md md:p-5 md:flex-row dark:bg-gray-800">
      <div className="relative w-full md:w-50 h-36">
        <img
          src={rental.image}
          className="object-cover w-full rounded-t-lg md:rounded-lg md:w-50 h-36"
          alt={rental.title}
        />
        {rental.badge ? (
          <Badge
            className="absolute bottom-2 left-2"
            variant="primary"
            size="md"
            LeadingIcon={<FiAward />}
          >
            {rental.badge}
          </Badge>
        ) : null}
      </div>

      <div className="flex items-center px-5 pt-2 space-x-3 md:pr-0 md:hidden">
        <Typography variant="lg" customWeight="bold">
          {rental.price}
        </Typography>
        <Typography variant="md" customColor="text-gray-500 dark:text-white">
          {rental.currency} total
        </Typography>
      </div>

      <div className="flex flex-col flex-grow px-5 md:pr-0">
        <div className="flex items-center justify-between">
          <div>
            <Typography
              variant="sm"
              customWeight="bold"
              customColor="text-primary-600 dark:text-primary-300"
              className="mt-3 mb-1 md:mt-0"
            >
              {rental.title}
            </Typography>
            <Typography
              variant="md"
              customWeight="semibold"
              customColor="text-gray-900 dark:text-white"
              className="mb-1"
            >
              {rental.subtitle}
            </Typography>
          </div>
          <Button
            variant="secondary"
            IconOnly={<FiHeart />}
            className="absolute md:static right-2 top-24"
          />
        </div>

        <div className="flex mt-5 mb-5">
          <div className="flex items-center space-x-1">
            {arrayStarsFilled.map((index: number) => (
              <FiStar
                key={index}
                size={20}
                fill="#FDB022"
                className="text-warning-400"
              />
            ))}
            {arrayRemainingFilled.map((index: number) => (
              <FiStar
                key={index}
                size={20}
                fill="#E4E7EC"
                className="text-gray-200"
              />
            ))}
          </div>
          <Typography
            variant="md"
            customWeight="bold"
            className="mx-2 select-none"
          >
            {rental.rating}
          </Typography>
          <Typography
            variant="md"
            customColor="text-gray-500 dark:text-gray-400"
          >
            {rental.reviews} reviews
          </Typography>
        </div>

        <div className="flex items-center justify-between mb-3 md:mb-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center">
              <FiMapPin size={20} className="text-gray-500 dark:text-white" />
              <Typography
                variant="md"
                customWeight="bold"
                customColor="text-gray-500 dark:text-gray-300"
                className="ml-2 mr-2 sm:mr-5"
              >
                {rental.address}
              </Typography>
            </div>

            <div className="items-center hidden xs:flex">
              <FiHome size={20} className="text-gray-500 dark:text-white" />
              <Typography
                variant="md"
                customWeight="bold"
                customColor="text-gray-500 dark:text-gray-300"
                className="ml-2 mr-2 sm:mr-5"
              >
                {rental.bed}
              </Typography>
            </div>

            <div className="flex items-center">
              <FiWifi size={20} className="text-gray-500 dark:text-white" />
              <Typography
                variant="md"
                customWeight="bold"
                customColor="text-gray-500 dark:text-gray-300"
                className="ml-2 mr-2 sm:mr-5"
              >
                {rental.wifi}
              </Typography>
            </div>
          </div>
          <div className="items-center hidden space-x-3 md:flex">
            <Typography variant="lg" customWeight="bold" className="">
              {rental.price}
            </Typography>
            <Typography
              variant="md"
              customColor="text-gray-500 dark:text-white"
            >
              {rental.currency} total
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
