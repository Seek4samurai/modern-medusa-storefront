import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const FooterCTA = () => {
  return (
    <div className="bg-fuchsia-100 w-full mt-[100px]">
      <div className="content-container flex flex-col-reverse gap-y-8 small:flex-row small:items-center justify-between py-16 relative">
        <div>
          <h3 className="text-8xl font-bold">
            <span className="bg-fuchsia-400">Shop</span> the latest
            <br />
            styles
          </h3>
          <div className="mt-6 animate-bounce">
            <UnderlineLink href="/store">Explore products</UnderlineLink>
          </div>
        </div>

        <div className="relative w-full h-[500px] flex items-center aspect-square small:w-[35%] small:aspect-[28/36]">
          <video
            autoPlay
            loop
            muted
            src="/purplebg-girl-dancing.mp4"
            className="absolute rounded-xl drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  )
}

export default FooterCTA
