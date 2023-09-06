
import { Navbar, Footer } from '@components'
import './globals.css'

export const metadata = {
  title: 'Flexibble',
  description: 'Showcase and Discover Remarkable Developer Projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
<Navbar />
      <main>
      <body>{children}</body>
      </main>
      <Footer/>
    </html>
  )
}
