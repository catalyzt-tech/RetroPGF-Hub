import type { Metadata } from 'next'
import { Inter, Rubik } from 'next/font/google'
import './globals.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Toaster } from 'react-hot-toast'
import { GlobalProvider } from './provider/globalContext'
import Footer from './component/Footer'

const interFont = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

const rubikFont = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rubik',
})

export const metadata: Metadata = {
  title: 'RetroPGF Hub',
  description: '| All things RetroPGF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.variable} ${rubikFont.variable} `}>
        <Toaster />
        <GlobalProvider>{children}</GlobalProvider>
        <Footer />
      </body>
    </html>
  )
}
