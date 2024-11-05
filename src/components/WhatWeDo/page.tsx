"use client";
import { ReactLenis } from "lenis/react";
import Marquee3D from "../Marquee3D/page";
export default function index(): JSX.Element {
  return (
    <ReactLenis root>
      <main className="bg-black">
        <div className="wrapper">
          <section className="text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              CSS Sticky Properties for <br /> Stacking Cards. Scroll down! 👇
            </h1>
          </section>
        </div>

        <section className="text-white   w-full bg-slate-950  ">
          <div className="flex justify-between px-16">
            <div className="grid gap-2">
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-green-500 h-72 w-[30rem] rounded-lg rotate-6 p-4 grid place-content-center gap-4">
                  <h1 className="text-2xl font-semibold">Image MouseTrail</h1>
                  <p>
                    An Mouse who is running with couple of images and the best
                    part is you can hide all the images when you don't move your
                    mouse. I hope you'll love it
                  </p>
                  <a
                    href="https://ui-layout.com/components/image-mousetrail"
                    target="_blank"
                    className="w-fit bg-black p-3 rounded-md cursor-pointer"
                  >
                    Click to View
                  </a>
                </article>
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-red-400 h-72 w-[30rem] rounded-lg p-4 grid place-content-center gap-4">
                  <h1 className="text-2xl font-semibold">
                    Progressive Carousel
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius consequatur explicabo assumenda odit necessitatibus
                    possimus ducimus aliquam. Ullam dignissimos animi officiis,
                    in sequi et inventore harum ipsam sed.
                  </p>
                  <a
                    href="https://ui-layout.com/components/progressive-carousel"
                    target="_blank"
                    className="w-fit bg-black p-3 rounded-md cursor-pointer"
                  >
                    Click to View
                  </a>
                </article>
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-orange-400 h-72 w-[30rem] p-4 rounded-lg -rotate-6 grid place-content-center gap-4">
                  <h1 className="text-2xl font-semibold">Responsive Drawer</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius consequatur explicabo assumenda odit necessitatibus
                    possimus ducimus aliquam. Ullam dignissimos animi officiis,
                    in sequi et inventore harum ipsam sed.
                  </p>
                  <a
                    href="https://ui-layout.com/components/drawer"
                    target="_blank"
                    className="w-fit bg-black p-3 rounded-md cursor-pointer"
                  >
                    Click to View
                  </a>
                </article>
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-blue-400 h-72 w-[30rem] p-4 rounded-lg grid place-content-center gap-4">
                  <h1 className="text-2xl font-semibold">Animated Globe</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius consequatur explicabo assumenda odit necessitatibus
                    possimus ducimus aliquam. Ullam dignissimos animi officiis,
                    in sequi et inventore harum ipsam sed.
                  </p>
                  <a
                    href="https://ui-layout.com/components/globe"
                    target="_blank"
                    className="w-fit bg-black p-3 rounded-md cursor-pointer"
                  >
                    Click to View
                  </a>
                </article>
              </figure>
            </div>
            <div className="sticky top-0 h-screen grid place-content-center">
              <Marquee3D />
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}
