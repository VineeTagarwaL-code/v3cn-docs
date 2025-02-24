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
      <section>
        <Navbar />
        <Hero />
      </section>
    </div>
  );
}
