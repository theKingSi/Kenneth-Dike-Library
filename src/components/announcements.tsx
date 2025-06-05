"use client"

import { motion } from "framer-motion"
import { Calendar, ArrowRight, Zap, Users, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

const announcements = [
  {
    title: "Extended Hours During Finals Week",
    snippet: "The library will be open 24/7 from December 10-17 to support students during final examinations.",
    date: "December 5, 2024",
    category: "Hours",
    icon: Calendar,
    color: "from-blue-500 to-blue-600",
    href: "#announcement-1",
  },
  {
    title: "New Digital Archive Collection",
    snippet: "Explore our newly digitized historical manuscripts and rare books collection now available online.",
    date: "November 28, 2024",
    category: "Resources",
    icon: BookOpen,
    color: "from-purple-500 to-purple-600",
    href: "#announcement-2",
  },
  {
    title: "Research Workshop Series",
    snippet: "Join our weekly workshops on advanced research techniques and citation management tools.",
    date: "November 20, 2024",
    category: "Events",
    icon: Users,
    color: "from-green-500 to-green-600",
    href: "#announcement-3",
  },
]

export default function Announcements() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Zap className="w-4 h-4 mr-2" />
            Latest Updates
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Happening
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay connected with the latest news, events, and important updates from UI Library
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {announcements.map((announcement, index) => (
            <motion.article
              key={announcement.title}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${announcement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Icon */}
              <motion.div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${announcement.color} mb-6 shadow-lg`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <announcement.icon className="h-7 w-7 text-white" />
              </motion.div>

              {/* Category Badge */}
              <div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium mb-4">
                {announcement.category}
              </div>

              {/* Date */}
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                {announcement.date}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                {announcement.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">{announcement.snippet}</p>

              {/* Read More Link */}
              <motion.a
                href={announcement.href}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group/link"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Read full article
                <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
              </motion.a>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300"></div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button
           
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            View All Announcements
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
