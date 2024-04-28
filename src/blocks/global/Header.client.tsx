'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const HeaderTemplate = ({ data }: any) => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0 }}
      className="container mx-auto py-10 px-6 flex justify-between items-center"
    >
      <Link href={'/'}>
        <Image
          src={data?.settings?.logo?.url}
          width={data?.settings?.logo?.width}
          height={data?.settings?.logo?.height}
          alt={data?.settings?.logo?.alt}
          className="brightness-0 dark:brightness-100"
        />
      </Link>
      <nav>
        <ul className="flex flex-row gap-4 items-center">
          {data?.nav?.navLinks?.map((link: any, i: number) => (
            <li key={link.label}>
              <Link href={'/' + link.link}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}
