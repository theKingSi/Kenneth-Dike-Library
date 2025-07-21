"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, DownloadCloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { toast } from "sonner"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "History", href: "/history" },
    { name: "Libraries", href: "/libraries" },
    { name: "Gallery", href: "/gallery" },
    { name: "E-resources", href: "/e-resources" },
    { name: "Contact", href: "/contact" },
  ]

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/Guide/LIBRARY GUIDE.docx"
    link.download = "LIBRARY GUIDE.docx"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    toast.success("Download Started", {
      description: "Your user guide is being downloaded.",
      icon: <DownloadCloud className="text-blue-600" />,
      duration: 4000,
    })
  }

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex items-center space-x-1">
                <Image
                  src="/logo/ui_logo.png"
                  alt="UI Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
                <Image
                  src="/logo/kdl_logo.png"
                  alt="KDL Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="ml-2 text-lg sm:text-xl font-bold text-gray-900">
                Kenneth Dike Library
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="block"
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="http://41.184.122.87:8080/">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get Started
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={handleDownload}
              >
                Download Guide
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-2 py-4 border-t border-gray-200">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <motion.span
                      className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                ))}

                <div className="flex flex-col space-y-2 mt-4 px-4 border-t border-gray-200 pt-4">
                  <Link href="http://41.184.122.87:8080/">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full justify-center">
                      Get Started
                    </Button>
                  </Link>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white w-full justify-center"
                    onClick={() => {
                      setIsMenuOpen(false)
                      setTimeout(() => {
                        handleDownload()
                      }, 300) // small delay to wait for animation/layout
                    }}
                  >
                    Download Guide
                  </Button>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
