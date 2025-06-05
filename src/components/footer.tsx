"use client"

import { motion } from "framer-motion"
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    "Quick Links": [
      { name: "Library Catalog", href: "#catalog" },
      { name: "E-Resources", href: "#e-resources" },
      { name: "Research Guides", href: "#research-guides" },
      { name: "Study Spaces", href: "#study-spaces" },
    ],
    Services: [
      { name: "Research Help", href: "#research-help" },
      { name: "Interlibrary Loan", href: "#ill" },
      { name: "Course Reserves", href: "#reserves" },
      { name: "Printing & Scanning", href: "#printing" },
    ],
    About: [
      { name: "Library Hours", href: "#hours" },
      { name: "Floor Plans", href: "#floor-plans" },
      { name: "Policies", href: "#policies" },
      { name: "Staff Directory", href: "#staff" },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Contact */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <img src="/Ui_logo.png" alt="Logo 1" className="w-8 h-8 object-contain" />
              <img src="/logo2.png" alt="Logo 2" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold text-white ml-2">Kenneth Dike Library</span>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">123 University Ave, Campus City, ST 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">library@ui.edu</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Facebook className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Twitter className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Instagram className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-blue-400">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">© {currentYear} UI Library. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
