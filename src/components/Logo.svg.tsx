import Image from "next/image";
export default function Logo() {
  return (
    <Image
      src={"/V-removebg-preview.png"}
      alt="Vercel Logo"
      width={72}
      height={16}
    />
  );
}
