"use client";
import React, { FormEvent, useLayoutEffect, useRef, useState } from "react";
import { MoveRight } from "lucide-react";
// import * as Toast from '@radix-ui/react-toast'
import { motion, useInView } from "framer-motion";

// import useNewsLetter, { ClientData } from '@/lab/hooks/useNewsLetter'
import Link from "next/link";

const pathArr = [
  "M 13.5 106.8 L 0 106.8 L 0 1.8 L 19.95 1.8 L 49.05 68.25 L 77.7 1.8 L 98.1 1.8 L 98.1 106.8 L 83.85 106.8 L 83.85 19.95 L 55.8 83.1 L 41.7 83.1 L 13.5 19.95 L 13.5 106.8 Z",
  "M 125.1 106.5 L 125.1 2.1 Q 130.288 1.507 137.965 1.061 A 409.679 409.679 0 0 1 138.15 1.05 Q 144.853 0.664 153.218 0.609 A 428.019 428.019 0 0 1 156 0.6 A 81.468 81.468 0 0 1 167.136 1.311 Q 172.785 2.092 177.389 3.733 A 33.906 33.906 0 0 1 185.55 7.875 A 25.066 25.066 0 0 1 192.394 14.861 Q 195.9 20.354 195.9 27.6 A 25.578 25.578 0 0 1 194.96 34.68 A 20.696 20.696 0 0 1 191.475 41.625 A 27.43 27.43 0 0 1 185.652 47.19 Q 182.587 49.392 178.65 51.15 A 45.325 45.325 0 0 1 185.604 54.24 Q 189.434 56.37 192.22 59.085 A 25.305 25.305 0 0 1 194.1 61.125 A 22.879 22.879 0 0 1 199.15 73.279 A 30.17 30.17 0 0 1 199.35 76.8 Q 199.35 90.772 188.534 99.192 A 34.466 34.466 0 0 1 188.1 99.525 A 37.021 37.021 0 0 1 177.035 105.091 Q 171.935 106.727 165.727 107.443 A 90.291 90.291 0 0 1 155.4 108 A 332.754 332.754 0 0 1 143.28 107.788 A 281.348 281.348 0 0 1 138.075 107.55 Q 129.9 107.1 125.1 106.5 Z M 156.45 58.2 L 139.35 58.2 L 139.35 95.25 A 141.274 141.274 0 0 0 149.756 96.024 A 172.742 172.742 0 0 0 156.45 96.15 A 60.344 60.344 0 0 0 164.222 95.681 Q 168.183 95.166 171.452 94.083 A 25.906 25.906 0 0 0 177.3 91.35 A 16.316 16.316 0 0 0 182.427 86.318 Q 184.429 83.136 184.742 78.975 A 21.004 21.004 0 0 0 184.8 77.4 A 17.592 17.592 0 0 0 183.492 70.501 Q 181.699 66.249 177.45 63.3 Q 172.009 59.525 163.116 58.544 A 60.931 60.931 0 0 0 156.45 58.2 Z M 139.35 12.9 L 139.35 47.1 L 155.85 47.1 A 45.99 45.99 0 0 0 163.401 46.519 Q 167.373 45.857 170.603 44.441 A 22.892 22.892 0 0 0 174.675 42.15 A 18.285 18.285 0 0 0 178.787 38.224 A 14.337 14.337 0 0 0 181.65 29.4 A 16.197 16.197 0 0 0 180.639 23.551 Q 179.009 19.306 174.75 16.575 A 24.964 24.964 0 0 0 168.02 13.629 Q 162.788 12.15 155.85 12.15 A 189.37 189.37 0 0 0 151.125 12.206 A 140.539 140.539 0 0 0 146.85 12.375 Q 142.8 12.6 139.35 12.9 Z",
  "M 299.1 106.8 L 284.85 106.8 L 284.85 14.4 L 252.6 14.4 L 252.6 1.8 L 331.35 1.8 L 331.35 14.4 L 299.1 14.4 L 299.1 106.8 Z",
  "M 409.35 106.8 L 346.35 106.8 L 346.35 1.8 L 409.35 1.8 L 409.35 14.1 L 360.6 14.1 L 360.6 46.05 L 402.6 46.05 L 402.6 58.05 L 360.6 58.05 L 360.6 94.5 L 409.35 94.5 L 409.35 106.8 Z",
  "M 496.95 5.4 L 492.6 17.4 Q 487.95 15.15 483.075 13.8 Q 478.2 12.45 471.6 12.45 A 31.759 31.759 0 0 0 459.743 14.633 A 29.971 29.971 0 0 0 454.425 17.4 A 31.75 31.75 0 0 0 444.877 27.272 A 40.467 40.467 0 0 0 442.5 31.65 Q 438.49 40.224 438.177 52.112 A 77.389 77.389 0 0 0 438.15 54.15 A 62.794 62.794 0 0 0 439.074 65.184 A 46.394 46.394 0 0 0 442.425 76.2 A 38.516 38.516 0 0 0 447.805 84.942 A 32.134 32.134 0 0 0 454.275 90.9 A 29.555 29.555 0 0 0 470.993 96.145 A 35.842 35.842 0 0 0 471.6 96.15 A 50.573 50.573 0 0 0 477.556 95.818 Q 480.574 95.459 483.173 94.715 A 28.92 28.92 0 0 0 484.35 94.35 Q 489.75 92.55 494.85 89.7 L 499.2 101.55 A 56.342 56.342 0 0 1 492.458 104.617 A 71.841 71.841 0 0 1 486.525 106.575 Q 479.859 108.47 471.159 108.592 A 86.123 86.123 0 0 1 469.95 108.6 A 48.576 48.576 0 0 1 455.962 106.649 A 41.941 41.941 0 0 1 445.8 102.075 A 42.901 42.901 0 0 1 430.985 86.407 A 52.374 52.374 0 0 1 429.45 83.475 Q 423.6 71.4 423.6 54.75 A 74.058 74.058 0 0 1 425.081 39.619 A 58.118 58.118 0 0 1 429.525 26.325 A 47.453 47.453 0 0 1 439.993 11.879 A 44.791 44.791 0 0 1 446.325 6.975 A 44.057 44.057 0 0 1 465.346 0.358 A 55.938 55.938 0 0 1 471.75 0 A 68.458 68.458 0 0 1 479.338 0.402 A 52.8 52.8 0 0 1 485.4 1.425 A 57.336 57.336 0 0 1 496.612 5.242 A 53.419 53.419 0 0 1 496.95 5.4 Z",
  "M 532.95 106.8 L 518.7 106.8 L 518.7 1.8 L 532.95 1.8 L 532.95 46.65 L 584.7 46.65 L 584.7 1.8 L 598.95 1.8 L 598.95 106.8 L 584.7 106.8 L 584.7 58.95 L 532.95 58.95 L 532.95 106.8 Z",
];

const Footer = () => {
  const container = useRef<HTMLDivElement>(null);
  // const [Send, cilentData] = useNewsLetter()
  const [openPopup, setOpenPopUp] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    visible: (i: any) => ({
      translateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.4,
        delay: i * 0.03,
      },
    }),

    hidden: { translateY: 200 },
  };
  const handleNewsLetterData = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);

    const clientEmail = formData.get("newsletter_email")!;

    // const data: ClientData = {
    //   email: clientEmail.toString(),
    // }

    // Send(data)
    setOpenPopUp(true);
    target.reset();
    if (setOpenPopUp) {
      setTimeout(() => {
        setOpenPopUp(false);
      }, 2000);
    }
  };

  return (
    <>
      {/* <Toast.Provider>
        <Toast.Provider swipeDirection="right">
          <Toast.Root
            className="ToastRoot"
            open={openPopup}
            onOpenChange={setOpenPopUp}
          >
            <Toast.Title className="ToastTitle">
              We Received Your Message, Thanks
            </Toast.Title>
            <Toast.Action
              className="ToastAction"
              asChild
              altText="Goto schedule to undo"
            >
              <button className="bg-white text-black px-3 py-1 rounded-lg">
                ok
              </button>
            </Toast.Action>
          </Toast.Root>
          <Toast.Viewport className="ToastViewport" />
        </Toast.Provider>
        <Toast.Viewport />
      </Toast.Provider> */}

      <div
        className="relative h-full sm:pt-14 pt-8 bg-[#f7f7f7] text-black"
        ref={container}
      >
        <div className="sm:container  px-4 mx-auto">
          <div className="md:flex justify-between w-full">
            <div>
              <h1 className="md:text-4xl text-2xl font-semibold">
                Let&lsquo;s do great work together
              </h1>
              <div className="pt-2 pb-6 md:w-99  ">
                <p className="md:text-2xl text-xl  py-4">
                  Sign up for our newsletter*
                </p>
                <div className=" hover-button relative bg-black flex justify-between items-center border-2 overflow-hidden  border-black rounded-full  text-white hover:text-black md:text-2xl">
                  <form
                    onSubmit={(e) => handleNewsLetterData(e)}
                    className="relative z-2 grid grid-cols-6  w-full h-full"
                  >
                    <input
                      type="email"
                      name="newsletter_email"
                      className="border-none bg-transparent  py-3 px-6  col-span-5"
                      placeholder="Your Email * "
                    />{" "}
                    <button
                      type="submit"
                      className="cursor-pointer w-full hover:bg-primaryColor bg-white text-white h-full cols-span-1"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        className="w-full h-[80%] "
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="#000"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="flex gap-10">
              <ul>
                <li className="text-2xl pb-2 text-black font-semibold">
                  SITEMAP
                </li>
                <li className="text-xl font-medium">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-xl font-medium">
                  <Link href="/about">About us</Link>
                </li>
                <li className="text-xl font-medium">
                  <Link href="/services">Our Services</Link>
                </li>

                <li className="text-xl font-medium">
                  <Link href="/projects">Projects</Link>
                </li>
                <li className="text-xl font-medium">
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li className="text-xl font-medium">
                  <Link href="/contact-us">Contact</Link>
                </li>
              </ul>
              <ul>
                <li className="text-2xl pb-2 text-black font-semibold">
                  SOCIAL
                </li>
                <li className="text-xl font-medium">
                  <a
                    href="https://www.linkedin.com/company/next-codez/"
                    target="_blank"
                    className="underline"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="text-xl font-medium">
                  <a
                    href="https://twitter.com/NextCodez"
                    target="_blank"
                    className="underline"
                  >
                    Twitter
                  </a>
                </li>
                <li className="text-xl font-medium">
                  <a
                    href="https://www.instagram.com/nextcodez/"
                    target="_blank"
                    className="underline"
                  >
                    Instagram
                  </a>
                </li>
                <li className="text-xl font-medium">
                  <a
                    href="https://www.facebook.com/nextcodezz"
                    target="_blank"
                    className="underline"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-y-2 flex justify-center items-center md:py-4 border-gray-200">
            <motion.svg
              width="776"
              ref={ref}
              height="137"
              viewBox="0 0 776 137"
              fill="none"
              className="sm:h-fit h-20 md:px-8 px-2 footer-logo w-full"
              xmlns="http://www.w3.org/2000/svg"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {pathArr.map((path, index) => (
                <motion.path
                  key={`path_${index}`}
                  custom={index}
                  variants={variants}
                  d={path}
                  fill="#3E7AEE"
                />
              ))}
            </motion.svg>
          </div>
          <div className="flex md:flex-row flex-col-reverse gap-3 justify-between py-2">
            <span className="font-medium">
              &copy; 2024 MB Tech. All Rights Reserved.
            </span>
            <a href="#" className="font-semibold">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
