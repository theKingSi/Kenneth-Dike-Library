"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, DownloadCloud, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { toast } from "sonner"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

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
                  src="/logo/Ui_logo.png"
                  alt="UI Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
                <Image
                  src="/logo/Kdl_logo.png"
                  alt="KDL Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="ml-2 text-sm sm:text-lg font-bold text-gray-900">
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

          {/* Desktop Buttons with Dropdown */}
          <div className="hidden md:flex items-center space-x-4 relative group">
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-1">
                <span>Get Started</span>
                <ChevronDown className="w-4 h-4" />
              </Button>

              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-100 z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href="http://41.184.122.87:8080/"
                      className="block px-4 py-3 text-sm hover:bg-blue-50 transition-colors"
                    >
                      Register
                    </Link>
                    <Link
                      href="http://41.184.122.87:8080/record/opac"
                      className="block px-4 py-3 text-sm hover:bg-blue-50 transition-colors"
                    >
                      Search
                    </Link>
                      <Link
                      href="https://repository.ui.edu.ng/home"
                      className="block px-4 py-3 text-sm hover:bg-blue-50"
                    >
                      Institutional Repository
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white"
                onClick={handleDownload}
              >
                Download Guide
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden px-4 py-4 border-t border-gray-200 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full px-4 py-2 rounded-md hover:bg-blue-100 text-gray-800 font-medium shadow-sm"
              >
                {item.name}
              </Link>
            ))}

            {/* Get Started Dropdown */}
            <div className="mt-2 space-y-2">
              <Button
                className="w-full bg-blue-600 text-white justify-between"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <span>Get Started</span>
                <ChevronDown className="w-4 h-4" />
              </Button>

              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    className="bg-white rounded-md border border-gray-200 shadow-md"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href="http://41.184.122.87:8080/"
                      className="block px-4 py-3 text-sm hover:bg-blue-50"
                    >
                      Register
                    </Link>
                    <Link
                      href="http://41.184.122.87:8080/record/opac"
                      className="block px-4 py-3 text-sm hover:bg-blue-50"
                    >
                      Search
                    </Link>
                      <Link
                      href="https://repository.ui.edu.ng/home"
                      className="block px-4 py-3 text-sm hover:bg-blue-50"
                    >
                      Institutional Repository
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Download Guide Button */}
            <Button
              className="w-full bg-blue-600 text-white mt-2"
              onClick={handleDownload}
            >
              Download Guide
            </Button>
          </div>
        )}
      </div>
    </motion.header>
  )
}
