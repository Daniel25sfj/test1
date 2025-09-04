import Image from "next/image";

export default function GotterBoysLogo() {
  return (
    <Image
      src="/logo.png"
      alt="g0TtErBoYs logo"
      width={180}
      height={40}
      style={{ imageRendering: "pixelated" }}
      priority
    />
  );
}
