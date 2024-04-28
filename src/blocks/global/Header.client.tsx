'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const HeaderTemplate = ({ data }: any) => {
  let settings = data.find((item: any) => item.globalType === 'settings')
  let nav = data.find((item: any) => item.globalType === 'nav')

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0 }}
      className="container mx-auto py-10 px-6 flex justify-between items-center"
    >
      <Link href={'/'}>
        <Image
          src={settings?.logo?.url}
          width={settings?.logo?.width}
          height={settings?.logo?.height}
          alt={settings?.logo?.alt}
          className="brightness-0 dark:brightness-100"
        />
      </Link>
      <nav>
        <ul className="flex flex-row gap-4 items-center">
          {nav?.navLinks?.map((link: any, i: number) => (
            <li key={link.label}>
              <Link href={'/' + link.link}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}
