"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Building,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Calendar,
  Users,
  BookOpen,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Header from "@/components/header"


const departments = [
  {
    name: "Readers Service",
    email: "reference@library.ui.edu.ng",
    phone: "+234 (0) 2 810 1101",
    head: "DR. BEATRICE A. FABUNMI",
    icon: BookOpen,
    color: "from-emerald-500 to-emerald-600",
  },
  {
    name: "Digital Services & ICT",
    email: "digital@library.ui.edu.ng",
    phone: "+234 (0) 2 810 1102",
    head: "DR. REUBEN A. OJO",
    icon: Globe,
    color: "from-cyan-500 to-cyan-600",
  },
  {
    name: "Special Collections",
    email: "archives@library.ui.edu.ng",
    phone: "+234 (0) 2 810 1103",
    head: "MRS. BOLARINWA M. ADEYEMI",
    icon: Building,
    color: "from-indigo-500 to-indigo-600",
  },
  {
    name: "Technical Services",
    email: "training@library.ui.edu.ng",
    phone: "+234 (0) 2 810 1104",
    head: "DR. ADETOUN A. OYELUDE",
    icon: Users,
    color: "from-pink-500 to-pink-600",
  },
]

const socialLinks = [
  { icon: Facebook, url: "https://www.facebook.com/LibraryKDLUI", color: "hover:text-blue-600" },
  { icon: Twitter, url: "https://x.com/LibraryKDLUI", color: "hover:text-sky-500" },
  { icon: Instagram, url: "https://instagram.com/uilibrary", color: "hover:text-pink-500" },
  { icon: Linkedin, url: "https://linkedin.com/company/uilibrary", color: "hover:text-blue-700" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    department: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    const result = await res.json()

    if (!res.ok) {
      console.error("Submission failed:", result.error)
      alert("There was an error sending your message. Please try again.")
    } else {
      alert("Message sent successfully!")
      setFormData({
        name: "",
        email: "",
        subject: "",
        department: "",
        message: "",
      })
    }
  } catch (error) {
    console.error("Unexpected error:", error)
    alert("An unexpected error occurred.")
  } finally {
    setIsSubmitting(false)
  }
}


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-orange-50 relative overflow-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-orange-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-4 h-4 rounded-full ${
              i % 3 === 0 ? "bg-green-300/20" : i % 3 === 1 ? "bg-orange-300/20" : "bg-blue-300/20"
            }`}
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1080),
            }}
            animate={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1080),
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}

        {/* Large Background Shapes */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-200/30 to-orange-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Header */}
      <Header />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Get in Touch
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-600">Us</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We're here to help you navigate your academic journey. Reach out to us for assistance, information, or just
            to say hello!
          </motion.p>

          {/* Live Clock */}
          <motion.div
            className="mt-8 inline-flex items-center px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Clock className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-gray-700 font-medium">
              Current Time:{" "}
              {currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
            </span>
          </motion.div>
        </motion.div>

       
        

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
              <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="pl-10 h-12 border-gray-200 focus:border-green-500 focus:ring-green-500"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10 h-12 border-gray-200 focus:border-green-500 focus:ring-green-500"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-green-500 bg-white"
                >
                  <option value="">Select a department</option>
                  <option value="reference">Reference & Information Services</option>
                  <option value="digital">Digital Services & ICT</option>
                  <option value="archives">Special Collections & Archives</option>
                  <option value="training">User Education & Training</option>
                  <option value="general">General Inquiry</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="h-12 border-gray-200 focus:border-green-500 focus:ring-green-500"
                  placeholder="Brief subject of your message"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-green-500 resize-none"
                  placeholder="Tell us how we can help you..."
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-gradient-to-r from-green-600 to-orange-600 hover:from-green-700 hover:to-orange-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  {isSubmitting ? (
                    <motion.div
                      className="flex items-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Zap className="h-5 w-5 mr-2" />
                      Sending...
                    </motion.div>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Departments & Social */}
          <div className="space-y-8">
            {/* Departments */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Department Contacts
              </motion.h2>

              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <motion.div
                    key={index}
                    className="p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                        animate={{
                          rotate: [0, 10, 0],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: index * 0.5,
                        }}
                      >
                        <dept.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                          {dept.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-1">Head: {dept.head}</p>
                        <p className="text-sm text-gray-500">{dept.email}</p>
                        <p className="text-sm text-gray-500">{dept.phone}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Media & Quick Actions */}
            <motion.div
              className="bg-gradient-to-br from-green-600 to-orange-600 rounded-3xl p-8 text-white shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-2xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Connect With Us
              </motion.h2>

              <motion.p
                className="text-white/90 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                Follow us on social media for updates, events, and library news.
              </motion.p>

              <motion.div
                className="flex space-x-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-6 w-6 text-white" />
                  </motion.a>
                ))}
              </motion.div>

              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  <Calendar className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">Book a Tour</p>
                </motion.div>
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  <Users className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">Join Events</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
