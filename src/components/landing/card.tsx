import Image from "next/image";

export const gradientStyles = {
  backgroundGradient: "linear-gradient(355deg, #A8A8A8 20.37%, #FFFFFF 81.25%)",
  buttonGradient:
    "linear-gradient(rgb(21 21 21) 0%, rgba(34, 34, 35, 0.6) 68.75%)",
  cardGradient:
    "linear-gradient(355deg, rgb(166, 131, 131) 20.37%, #993150 81.25%)",
};

type CardProps = {
  title: string;
  buttonText: string;
  gradient: string;
  iconSrc: string;
};

export const Card = ({ title, buttonText, gradient, iconSrc }: CardProps) => (
  <div
    className="flex flex-col justify-between p-4 rounded-2xl w-[300px] h-[200px]"
    style={{ backgroundImage: gradient }}
  >
    <div className="flex justify-between items-start w-full">
      <h1 className="font-medium text-white text-lg">{title}</h1>
      <Image src={iconSrc} alt="icon" width={32} height={32} className="mt-0" />
    </div>
    <button
      className="flex items-center gap-1 p-2 px-3 border border-[#5c58673d] rounded-2xl w-fit font-medium text-white hover:text-gray-300 text-sm"
      style={{ background: gradientStyles.buttonGradient }}
    >
      {buttonText}
    </button>
  </div>
);
