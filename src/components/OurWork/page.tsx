// thanks to oliver: https://www.youtube.com/@olivierlarose1
"use client";
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
const projects = [
  {
    title: "Finvo",
    description: " Finvo - Your Ultimate Accounting Assistant.",
    src: "https://finvo.fr",
    link: "https://i.ibb.co/hHFnLCR/Screenshot-2024-05-26-131923.png?w=500&auto=format&fit=crop&q=60",
    color: "#5196fd",
  },
  {
    title: "Hero Circle",
    description:
      "Your platform to directly fund the people accelerating climate solutions worldwide.",
    src: "https://herocircle.app/",
    link: "https://i.ibb.co/5RV2g4Z/Screenshot-2024-05-26-141908.png?w=500&auto=format&fit=crop&q=60",
    color: "#0202cc",
  },
  {
    title: "Gourmet Gourmand",
    description: "Gourmet Gourmand - A Culinary Journey Through Tunisia.",
    src: "https://GourmetGourmand.tn",
    link: "https://i.ibb.co/FHXzqdV/image.png?w=500&auto=format&fit=crop&q=60",
    color: "#74285b",
  },
  {
    title: "Restaurants club",
    description: "Restaurant Management System.",
    src: "house.jpg",
    link: "https://i.ibb.co/NSJhDyF/image-original-4.jpg?w=500&auto=format&fit=crop&q=60",
    color: "#00b17a",
  },
  {
    title: "Riders App",
    description: "Food Delivery App.",
    src: "cactus.jpg",
    link: "https://i.ibb.co/svVhkcC/image-original-10.jpg?w=500&auto=format&fit=crop",
    color: "#004935",
  },
];
export default function index(): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <>
          <section className="text-white  h-[70vh]  w-full bg-slate-950  grid place-content-center ">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              Our Work <br /> . Scroll down! 👇
            </h1>
          </section>
        </>

        <section className="text-white   w-full bg-slate-950  ">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project?.link}
                src={project?.src}
                title={project?.title}
                color={project?.color}
                description={project?.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}
interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}
export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[25%] h-[450px] w-[70%] rounded-md p-10 origin-top`}
      >
        <h2 className="text-2xl text-center font-semibold">{title}</h2>
        <div className={`flex h-full mt-5 gap-10`}>
          <div className={`w-[40%] relative top-[10%]`}>
            <p className="text-2xl">{description}</p>
            <span className="flex items-center gap-2 pt-2">
              <a
                href={src}
                target="_blank"
                className="underline cursor-pointer"
              >
                See more
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div
            className={`relative w-[60%] h-full rounded-lg overflow-hidden `}
          >
            <motion.div
              className={`w-full h-full`}
              style={{ scale: imageScale }}
            >
              <Image
                fill={true}
                src={url}
                alt="image"
                sizes="(max-width: 768px) 100vw, 
               (max-width: 1200px) 50vw, 
               33vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
