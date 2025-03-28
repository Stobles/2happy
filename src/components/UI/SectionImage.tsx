import Image from "next/image";

const SectionImage = () => {
  return (
    <Image
      className="absolute w-[992px] h-[112px] top-[-64px] right-0 z-[-1]"
      width={992}
      height={112}
      src="/images/section-logo.png"
      alt="section-logo"
    />
  );
};

export default SectionImage;
