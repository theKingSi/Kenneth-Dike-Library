"use client"

import { motion } from "framer-motion"
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-5 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">© {currentYear} Kenneth Dike Library. All rights reserved.</p>
        </motion.div>
    
   </footer>
  )
}
