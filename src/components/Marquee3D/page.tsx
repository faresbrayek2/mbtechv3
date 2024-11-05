import Marquee from "../core/marquee";

const logos = [
  {
    name: "Microsoft",
    img: "https://i.ibb.co/svVhkcC/image-original-10.jpg?w=500&auto=format&fit=crop",
  },
  {
    name: "Apple",
    img: "https://i.ibb.co/NSJhDyF/image-original-4.jpg?w=500&auto=format&fit=crop",
  },
  {
    name: "Google",
    img: "https://i.ibb.co/FHXzqdV/image.png?w=500&auto=format&fit=crop",
  },
  {
    name: "Facebook",
    img: "https://i.ibb.co/5RV2g4Z/Screenshot-2024-05-26-141908.png?w=500&auto=format&fit=crop",
  },
  {
    name: "LinkedIn",
    img: "https://i.ibb.co/hHFnLCR/Screenshot-2024-05-26-131923.png?w=500&auto=format&fit=crop",
  },
];

const Marquee3D = () => {
  return (
    <div className="relative bg-transparent flex h-full w-96 mx-auto flex-col items-center justify-center gap-4 overflow-hidden  px-20 ">
      <div className="flex flex-row gap-4 [perspective:300px]">
        <Marquee
          className="h-96 justify-center overflow-hidden [--duration:60s] [--gap:1rem]"
          vertical
          style={{
            transform:
              "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
          }}
        >
          {logos.map((data, idx) => (
            <img
              key={idx}
              src={data.img}
              alt={data.name}
              className="mx-auto h-full w-3/4 cursor-pointer rounded-xl border border-neutral-300 transition-all duration-300 hover:ring-1 hover:ring-neutral-300"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Marquee3D;
