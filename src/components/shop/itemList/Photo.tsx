import Image from "next/legacy/image";

type PhotoTypes = {
  src: string;
  alt: string;
};

export function Photo({ src, alt }: PhotoTypes) {
  return <Image src={src} alt={alt} />;
}
