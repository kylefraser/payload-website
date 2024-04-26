import Header from '../../blocks/global/Header'
import Footer from '../../blocks/global/Footer'
import { Providers } from './providers'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ scrollbarGutter: 'stable' }}>
      <body className="bg-white dark:bg-[#090D01] text-black dark:text-white">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
