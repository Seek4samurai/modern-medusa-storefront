import UnderlineLink from "@modules/common/components/underline-link"
import style from "../../../../styles/hero.module.css"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center text-center">
      <div className="text-black inset-1 z-1 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <div id={style.bubbles}>
          <Image
            id={style.bubblesImage1}
            src="/VectorBubble1.svg"
            alt="vector bubble"
            width={190}
            height={190}
            draggable="false"
          />
          <Image
            id={style.bubblesImage2}
            src="/VectorBubble2.svg"
            alt="vector bubble 2"
            width={120}
            height={120}
            draggable="false"
          />
        </div>
        <div className="flex flex-row mb-4">
          <Image
            src="/medusa-icon.svg"
            height="60px"
            width="60px"
            loading="eager"
            priority={true}
            quality={90}
            objectFit="contain"
            alt="medusa-icon"
            className="absolute inset-0"
            draggable="false"
          />
          <h1 className="text-6xl font-bold ml-2 drop-shadow-md shadow-black">
            Medusa Store
          </h1>
        </div>
        <p className="text-base-regular text-base max-w-[42rem] mb-6 drop-shadow-md shadow-black z-10">
          <div className="text-2xl">
            The Open Source Shopify Alternative <br />
          </div>
          <i className="text-zinc-700 text-xl z-10">
            Get all fashionable fits on Medusa merch store. Be it winter or
            summer, we got you covered!
          </i>
        </p>
        <UnderlineLink href="/store">Explore products</UnderlineLink>
      </div>
      <div id={style.medusaLogo} className="float-right mt-[6rem] mr-[5rem]">
        <Image
          src="/medusa-icon.svg"
          width={804}
          height={865.63}
          loading="eager"
          priority={true}
          quality={90}
          objectFit="cover"
          alt="medusa icon"
          className="absolute inset-0"
          draggable="false"
        />
      </div>
    </div>
  )
}

export default Hero
