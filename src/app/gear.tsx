import Image from "next/image";
import GearIcon from "./gear.svg";

export default function Gear() {
  return (
    <Image
      src={GearIcon}
      alt="Gear icon"
      className="fixed animate-spin-slow transition-all w-40 h-40 hover:w-60 hover:h-60 -left-16 -top-16 md:w-80 md:h-80 md:hover:w-96 md:hover:h-96 md:-left-32 md:-top-32 drop-shadow-xl "
    />
  );
}
