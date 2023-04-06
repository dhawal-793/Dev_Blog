import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'


export const metadata = {
  title: 'DevBlog',
  description: 'DevBlog: created by Developer, for the developers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark:bg-slate-800 dark:text-white'>
        <Navbar />
        <main className='min-h-[90vh]'>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
