import { Navbar, Hero } from "@/components/landing";

export default function Home() {
  return (
    <div className="relative">
      <div
        className="top-0 left-0 z-[10] absolute w-full h-[200px] rotate-180"
        style={{
          maskImage: "linear-gradient(transparent, black 85%)",
          backgroundColor: "rgb(165 122 201 / 10%)",
        }}
      />
      <section
        style={{
          backgroundImage:
            "radial-gradient(circle at 60% 10%, #ff00002e, #fff0 11%), radial-gradient(circle at 70% 15%, #ab40ff2e, #faf3ff03 10%, #fff0)",
        }}
      >
        <Navbar />
        <Hero />
      </section>
    </div>
  );
}
