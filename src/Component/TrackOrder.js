import React from "react";
import iPhone from "../assets/R.jpeg";
import { Link } from "react-router-dom";

const TrackOrder = () => {
  return (
    <section className="bg-white py-8 antialiased text-gray-800 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="py-4">
          <Link
            to="/"
            className="inline-flex items-center text-gray-700 hover:text-blue-600"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
          Track the delivery of order #957684673
        </h2>

        <div className="mt-6 sm:mt-8 lg:flex lg:gap-8">
          <div className="w-full divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 dark:divide-orange-500 dark:border-orange-500 lg:max-w-xl xl:max-w-2xl">
            {/* Product Items */}
            {[
              {
                image: iPhone,
                name: "PC system All in One APPLE iMac (2023)...",
                productId: "BJ8364850",
                quantity: 1,
                price: "$1,499",
              },
              {
                image: iPhone,
                name: "Restored Apple Watch Series 8 (GPS)...",
                productId: "BJ8364850",
                quantity: 2,
                price: "$598",
              },
              {
                image: iPhone,
                name: "Sony Playstation 5 Digital Edition Console...",
                productId: "BJ8364850",
                quantity: 1,
                price: "$799",
              },
              {
                image: iPhone,
                name: "Xbox Series X Diablo IV Bundle...",
                productId: "BJ8364850",
                quantity: 1,
                price: "$699",
              },
              {
                image: iPhone,
                name: "APPLE iPhone 15 5G phone, 256GB, Gold",
                productId: "BJ8364850",
                quantity: 3,
                price: "$2,997",
              },
            ].map((product, index) => (
              <div key={index} className="space-y-4 p-6">
                <div className="flex items-center gap-6">
                  <a href="/" className="h-14 w-14 shrink-0">
                    <img
                      className="h-full w-full"
                      src={product.image}
                      alt={product.name}
                    />
                  </a>

                  <a
                    href="/"
                    className="min-w-0 flex-1 font-medium text-gray-900 hover:underline"
                  >
                    {product.name}
                  </a>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <span className="font-medium text-orange-500 ">
                      Product ID:
                    </span>{" "}
                    {product.productId}
                  </p>

                  <div className="flex items-center justify-end gap-4">
                    <p className="text-base font-normal text-gray-900">
                      x{product.quantity}
                    </p>

                    <p className="text-xl font-bold leading-tight text-gray-900 ">
                      {product.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Summary Section */}
            <div className="space-y-4 bg-gray-50 p-6">
              <div className="space-y-2">
                <dl className="flex items-center justify-between gap-4">
                  <dt className="font-normal text-gray-500 ">Original price</dt>
                  <dd className="font-medium text-gray-900">$6,592.00</dd>
                </dl>
                <dl className="flex items-center justify-between gap-4">
                  <dt className="font-normal text-gray-500">Savings</dt>
                  <dd className="text-base font-medium text-green-500">
                    -$299.00
                  </dd>
                </dl>
                <dl className="flex items-center justify-between gap-4">
                  <dt className="font-normal text-gray-500">Store Pickup</dt>
                  <dd className="font-medium text-gray-900">$99</dd>
                </dl>
                <dl className="flex items-center justify-between gap-4">
                  <dt className="font-normal text-gray-500">Tax</dt>
                  <dd className="font-medium text-gray-900">$799</dd>
                </dl>
              </div>
              <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                <dt className="text-lg font-bold text-gray-900 ">Total</dt>
                <dd className="text-lg font-bold text-gray-900">$7,191.00</dd>
              </dl>
            </div>
          </div>

          {/* Order History Section */}
          <div className="mt-6 grow sm:mt-8 lg:mt-0">
            <div className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-orange-500 ">
              <h3 className="text-xl font-semibold text-gray-900 ">
                Order history
              </h3>
              <ol className="relative ms-3 border-s border-gray-200 dark:border-orange-500">
                {/* Order History Items */}
                {[
                  {
                    status: "Delivered",
                    date: "March 24, 2024",
                    time: "11:32 AM",
                    description: "Package delivered to recipient address",
                  },
                  {
                    status: "Out for Delivery",
                    date: "March 24, 2024",
                    time: "8:00 AM",
                    description: "Package is out for delivery",
                  },
                  {
                    status: "In Transit",
                    date: "March 23, 2024",
                    time: "2:15 PM",
                    description: "Package arrived at local facility",
                  },
                  {
                    status: "Shipped",
                    date: "March 22, 2024",
                    time: "9:45 AM",
                    description: "Package has left the warehouse",
                  },
                  {
                    status: "Order Confirmed",
                    date: "March 21, 2024",
                    time: "3:20 PM",
                    description: "Order has been confirmed",
                  },
                ].map((item, index) => (
                  <li key={index} className="mb-6 ms-6">
                    <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900">
                      <svg
                        className="h-2.5 w-2.5 text-blue-800 dark:text-blue-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </span>
                    <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900">
                      {item.status}
                    </h3>
                    <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      {item.date} at {item.time}
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ol>

              <div class="gap-4 sm:flex sm:items-center">
                <button
                  type="button"
                  class="w-full rounded-lg  border border-gray-200 bg-white px-5  py-2.5 text-sm font-medium hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  Cancel the order
                </button>

                <a
                  href="/"
                  class="mt-4 flex w-full items-center justify-center rounded-lg  px-5 py-2.5 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0"
                >
                  Order details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackOrder;
