"use client"

import { motion } from "framer-motion"
import { Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LibraryHours() {
  const currentDay = new Date().toLocaleDateString("en-US", { weekday: "long" })
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Library Hours</h2>
            <p className="text-lg text-gray-600">We're here when you need us</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Today's Hours */}
            <motion.div
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Today's Hours</h3>
                  <p className="text-gray-600">{currentDay}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-900">Monday - Friday</span>
                  <span className="text-blue-600 font-semibold">8:00 AM - 10:00 PM</span>
                </div>
                 <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-900">Saturday</span>
                  <span className="text-blue-600 font-semibold">8:00 AM - 1:00 PM</span>
                </div>
                 <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-900">Sunday</span>
                  <span className="text-blue-600 font-semibold">5:00 PM - 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-900">Study Rooms</span>
                  <span className="text-blue-600 font-semibold">24/7</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-900">Research Help Desk</span>
                  <span className="text-blue-600 font-semibold">9:00 AM - 6:00 PM</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <span className="font-semibold">Currently Open</span> - Current time: {currentTime}
                </p>
              </div>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Quick Info</h3>
                  <p className="text-gray-600">Important updates</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Finals Week</h4>
                  <p className="text-sm text-blue-800">Extended 24/7 hours Dec 10-17</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">Holiday Schedule</h4>
                  <p className="text-sm text-yellow-800">Reduced hours Dec 23 - Jan 2</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">New Service</h4>
                  <p className="text-sm text-green-800">24/7 study rooms now available</p>
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white">View Full Schedule</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
