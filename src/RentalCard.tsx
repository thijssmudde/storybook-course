import React, { FC } from "react";
// import classNames from "classnames";
import { Badge, Button, Typography } from ".";
import {
  FiMapPin,
  FiStar,
  FiHome,
  FiWifi,
  FiHeart,
  FiAward,
} from "react-icons/fi";

export interface IRental {
  title: string;
  subtitle: string;
  badge?: string;
  rating: string;
  reviews: number;
  address: string;
  bed: string;
  wifi: string;
  price: string;
  currency: string;
}

export interface RentalCardProps {
  rental: IRental;
  image?: string;
}

// TODO fix box-shadow (either in this component or )
// TODO fix rating
// TODO button dark mode
// TODO mobile responsive
export const RentalCard: FC<RentalCardProps> = ({ rental, image }) => {
  return (
    // box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    <div className="flex p-5 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="relative rounded-lg w-50 h-36">
        <img src={image} className="rounded-lg w-50 h-36" />
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

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex items-center justify-between">
          <div>
            <Typography
              variant="sm"
              customWeight="bold"
              customColor="text-primary-600 dark:text-primary-300"
              className="mb-1"
            >
              {rental.title}
            </Typography>
            <Typography
              variant="sm"
              customWeight="semibold"
              customColor="text-gray-900 dark:text-white"
              className="mb-1"
            >
              {rental.subtitle}
            </Typography>
          </div>
          <Button variant="secondary" IconOnly={<FiHeart />} />
        </div>

        <div className="flex mt-6 mb-5">
          <div className="flex space-x-1">
            <FiStar size={20} fill="#FDB022" className="text-warning-400" />
            <FiStar size={20} fill="#FDB022" className="text-warning-400" />
            <FiStar size={20} fill="#FDB022" className="text-warning-400" />
            <FiStar size={20} fill="#FDB022" className="text-warning-400" />
            <FiStar size={20} fill="#FDB022" className="text-warning-400" />
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

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FiMapPin className="text-gray-500 dark:text-white" />
            <Typography
              variant="md"
              customWeight="bold"
              customColor="text-gray-500 dark:text-gray-300"
              className="ml-2 mr-5"
            >
              {rental.address}
            </Typography>

            <FiHome className="text-gray-500 dark:text-white" />
            <Typography
              variant="md"
              customWeight="bold"
              customColor="text-gray-500 dark:text-gray-300"
              className="ml-2 mr-5"
            >
              {rental.bed}
            </Typography>

            <FiWifi className="text-gray-500 dark:text-white" />
            <Typography
              variant="md"
              customWeight="bold"
              customColor="text-gray-500 dark:text-gray-300"
              className="ml-2 mr-5"
            >
              {rental.wifi}
            </Typography>
          </div>
          <div className="flex items-center space-x-3">
            <Typography variant="md" customWeight="bold" className="">
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
