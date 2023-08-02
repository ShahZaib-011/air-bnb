import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import Modal from './components/modals/Modal'
import RegisterModal from './components/modals/RegisterModal'
import ToastProvider from './providers/ToastProvider'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'YOYYOOYOYOYO',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          {/* <Modal actionLabel='Button' secondaryActionLabel='butto n two' title='Hello Modal' isOpen/> */}
          <ToastProvider/>
         <RegisterModal/>
          <Navbar />
        </ClientOnly>
        {children}</body>
    </html>
  )
}
