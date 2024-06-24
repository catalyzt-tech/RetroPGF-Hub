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
  description:
    'Community-driven platform for project creators to submit their project ideas and get feedback.',
  openGraph: {
    type: 'website',
    url: 'https://retropgfhub.com',
    title: 'RetroPGF Hub',
    description:
      'Community-driven platform for project creators to submit their project ideas and get feedback.',
    siteName: 'retropgfhub.com',
    images: [
      {
        url: 'https://retropgfhub.com/cover-landing.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RetroPGF Hub',
    site: 'https://retropgfhub.com',
    creator: 'Catalyzt.tech',
    // images: ['https://retropgfhub.com/cover-landing.png'],
    images: {
      url: 'https://retropgfhub.com/cover-landing.png',
      alt: 'RetroPGF Hub',
    },
  },
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
