import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EliteAuto - Premium Car Company',
  description: 'Experience the future of automotive excellence with EliteAuto. Premium vehicles, cutting-edge technology, and unmatched performance.',
  keywords: 'luxury cars, premium vehicles, automotive, car dealership, sports cars',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                EliteAuto
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
                <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
                <a href="#models" className="hover:text-blue-400 transition-colors">Models</a>
                <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
              </div>
              <div className="md:hidden">
                <button className="text-white">
                  <div className="space-y-1">
                    <div className="w-6 h-0.5 bg-white"></div>
                    <div className="w-6 h-0.5 bg-white"></div>
                    <div className="w-6 h-0.5 bg-white"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                  EliteAuto
                </div>
                <p className="text-gray-400">
                  Premium automotive excellence since 2010. Experience the future of driving.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Models</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Sport Series</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Luxury Series</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Electric Series</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">SUV Series</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Sales</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Maintenance</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Financing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Insurance</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <div className="space-y-2 text-gray-400">
                  <p>1-800-ELITEAUTO</p>
                  <p>info@eliteauto.com</p>
                  <p>123 Luxury Drive</p>
                  <p>Beverly Hills, CA 90210</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 EliteAuto. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}