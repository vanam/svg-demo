import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Favicon from '/public/favicon.png'
import Logo from '/public/logo.svg'
import LogoNoXml from '/public/logo-no-xml.svg'
import LogoSimple from '/public/logo-simple.svg'

import { Image } from "@unpic/react";
import LogoComponent from 'src/components/LogoComponent/LogoComponent'

const HomePage = () => {
  // console.log(Logo)

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <main className="flex flex-row items-center justify-between p-24">
        <img
          src={Favicon}
          width={30}
          height={15}
        />

        <img
          src='/logo.svg'
          width={30}
          height={15}
        />
        {/* Unexpected token (1:1) */}
        {/* <Logo /> */}
        <img
          src='/logo-no-xml.svg'
          width={30}
          height={15}
        />
        {/* name.name.toLowerCase is not a function */}
        {/* <LogoNoXml /> */}
        <img
          src='/logo-simple.svg'
          width={30}
          height={15}
        />
        {/* Type 'FC<SVGProps<SVGSVGElement>>' is not assignable to type 'string' */}
        {/* index.d.ts(2203, 9): The expected type comes from property 'src' which is declared here on type 'DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>' */}
        <img
          src={LogoSimple}
          width={30}
          height={15}
        />
        <LogoSimple />

      </main>
      <main className="flex flex-row items-center justify-between p-24">
        {/* CDN version */}
        <Image
          src="https://cdn.shopify.com/static/sample-images/bath_grande_crop_center.jpeg"
          layout="constrained"
          width={30}
          height={15}
          alt="A lovely bath"
        />

        {/* local image */}
        <Image
          src="/logo.svg"
          layout="constrained"
          width={30}
          height={15}
        />

        {/* local image embeded */}
        <Image
          src={Favicon}
          layout="constrained"
          width={30}
          height={15}
        />

        <LogoComponent/>
    </main>
    </>
  )
}

export default HomePage
