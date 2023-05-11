import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Favicon from '/public/favicon.png'
import Logo from '/public/logo.svg'
import LogoNoXml from '/public/logo-no-xml.svg'
import LogoSimple from '/public/logo-simple.svg'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <main className="flex min-h-screen flex-row items-center justify-between p-24">
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
    </>
  )
}

export default HomePage
