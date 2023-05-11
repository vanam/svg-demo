import Image from 'next/image'


import favicon from '@/public/favicon.png'
import logo from '@/public/logo.svg'
import logoNoXml from '@/public/logo-no-xml.svg'
import logoSimple from '@/public/logo-simple.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
      <Image
        className="relative"
        src="/favicon.png"
        alt="Next.js Logo"
        width={30}
        height={15}
        priority
      />
      <Image
        className="relative"
        src={favicon}
        alt="Next.js Logo"
        width={30}
        height={15}
        priority
      />
      <Image
        className="relative"
        src="/logo.svg"
        alt="Next.js Logo"
        width={30}
        height={15}
        priority
      />
      <Image
        className="relative"
        src={logo}
        alt="Next.js Logo"
        width={30}
        height={15}
        priority
      />
      <Image
        className="relative"
        src="/logo-no-xml.svg"
        alt="Next.js Logo"
        width={30}
        height={15}
        priority
      />
      <Image
        className="relative"
        src={logoNoXml}
        alt="Next.js Logo"
        width={30}
        height={15}
        priority
      />
      <Image
        className="relative"
        src="/logo-simple.svg"
        alt="Next.js Logo"
        width={30}
        height={15}
        priority
      />
      <Image
        className="relative"
        src={logoSimple}
        alt="Next.js Logo"
        width={30}
        height={15}
        priority
      />
    </main>
  )
}
