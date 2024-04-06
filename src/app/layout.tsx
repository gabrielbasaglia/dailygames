
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/header/Header'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daly Games - Descubra jogos incriveis!',
  description: 'Mais de 1000 jogos separados e organizados para você!',
  keywords: 'jogos, games, jogos online, jogos gratis, jogos de pc, jogos de console',
  openGraph: {
    images: [`${process.env.PROJECT_URL}/preview.png`],
  },
  robots: {
    follow: true,
    index: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
    }
  
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
