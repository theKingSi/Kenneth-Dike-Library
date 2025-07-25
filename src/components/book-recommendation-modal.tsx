"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { X, BookPlus, Star, User2, FileText, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface BookRecommendationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookRecommendationModal({ isOpen, onClose }: BookRecommendationModalProps) {
  const [bookFormData, setBookFormData] = useState({
    recommenderName: "",
    recommenderEmail: "",
    bookTitle: "",
    author: "",
    isbn: "",
    publisher: "",
    publicationYear: "",
    genre: "",
    reasonForRecommendation: "",
    targetAudience: "",
    priority: "medium",
  })
  const [isSubmittingBook, setIsSubmittingBook] = useState(false)

  const handleBookFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setBookFormData({
      ...bookFormData,
      [e.target.name]: e.target.value,
    })
  }

  const handleBookFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmittingBook(true)

    // Format the email content
    const emailContent = `
Book Recommendation Submission

Recommender Information:
- Name: ${bookFormData.recommenderName}
- Email: ${bookFormData.recommenderEmail}

Book Details:
- Title: ${bookFormData.bookTitle}
- Author: ${bookFormData.author}
- ISBN: ${bookFormData.isbn || "Not provided"}
- Publisher: ${bookFormData.publisher || "Not provided"}
- Publication Year: ${bookFormData.publicationYear || "Not provided"}
- Genre: ${bookFormData.genre}

Recommendation Details:
- Target Audience: ${bookFormData.targetAudience}
- Priority Level: ${bookFormData.priority}
- Reason for Recommendation: ${bookFormData.reasonForRecommendation}

Submitted on: ${new Date().toLocaleString()}
    `

    // Simulate sending email (in real implementation, this would call an API)
    console.log("Book recommendation email content:", emailContent)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmittingBook(false)

    // Reset form and close modal
    setBookFormData({
      recommenderName: "",
      recommenderEmail: "",
      bookTitle: "",
      author: "",
      isbn: "",
      publisher: "",
      publicationYear: "",
      genre: "",
      reasonForRecommendation: "",
      targetAudience: "",
      priority: "medium",
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <BookPlus className="h-6 w-6 text-white" />
            </motion.div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Recommend a Book</h2>
              <p className="text-gray-600">Help us expand our collection</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full hover:bg-gray-100">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Book Recommendation Form */}
        <form onSubmit={handleBookFormSubmit} className="space-y-6">
          {/* Recommender Information */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <User2 className="h-5 w-5 mr-2 text-blue-600" />
              Your Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <Input
                  type="text"
                  name="recommenderName"
                  value={bookFormData.recommenderName}
                  onChange={handleBookFormChange}
                  className="h-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                <Input
                  type="email"
                  name="recommenderEmail"
                  value={bookFormData.recommenderEmail}
                  onChange={handleBookFormChange}
                  className="h-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
          </div>

          {/* Book Information */}
          <div className="bg-blue-50 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-blue-600" />
              Book Details
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Book Title *</label>
                  <Input
                    type="text"
                    name="bookTitle"
                    value={bookFormData.bookTitle}
                    onChange={handleBookFormChange}
                    className="h-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter book title"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Author *</label>
                  <Input
                    type="text"
                    name="author"
                    value={bookFormData.author}
                    onChange={handleBookFormChange}
                    className="h-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter author name"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ISBN</label>
                  <Input
                    type="text"
                    name="isbn"
                    value={bookFormData.isbn}
                    onChange={handleBookFormChange}
                    className="h-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="ISBN (optional)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Publisher</label>
                  <Input
                    type="text"
                    name="publisher"
                    value={bookFormData.publisher}
                    onChange={handleBookFormChange}
                    className="h-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Publisher (optional)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Publication Year</label>
                  <Input
                    type="number"
                    name="publicationYear"
                    value={bookFormData.publicationYear}
                    onChange={handleBookFormChange}
                    className="h-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Year (optional)"
                    min="1000"
                    max={new Date().getFullYear()}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Genre *</label>
                <select
                  name="genre"
                  value={bookFormData.genre}
                  onChange={handleBookFormChange}
                  className="w-full h-10 px-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 bg-white"
                  required
                >
                  <option value="">Select a genre</option>
                  <option value="fiction">Fiction</option>
                  <option value="non-fiction">Non-Fiction</option>
                  <option value="academic">Academic/Textbook</option>
                  <option value="biography">Biography</option>
                  <option value="history">History</option>
                  <option value="science">Science</option>
                  <option value="technology">Technology</option>
                  <option value="arts">Arts & Literature</option>
                  <option value="business">Business</option>
                  <option value="health">Health & Medicine</option>
                  <option value="reference">Reference</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Recommendation Details */}
          <div className="bg-purple-50 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <MessageCircle className="h-5 w-5 mr-2 text-purple-600" />
              Recommendation Details
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience *</label>
                  <select
                    name="targetAudience"
                    value={bookFormData.targetAudience}
                    onChange={handleBookFormChange}
                    className="w-full h-10 px-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 bg-white"
                    required
                  >
                    <option value="">Select target audience</option>
                    <option value="undergraduate">Undergraduate Students</option>
                    <option value="graduate">Graduate Students</option>
                    <option value="faculty">Faculty & Researchers</option>
                    <option value="general">General Public</option>
                    <option value="all">All Library Users</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Priority Level</label>
                  <select
                    name="priority"
                    value={bookFormData.priority}
                    onChange={handleBookFormChange}
                    className="w-full h-10 px-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 bg-white"
                  >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Recommendation *</label>
                <textarea
                  name="reasonForRecommendation"
                  value={bookFormData.reasonForRecommendation}
                  onChange={handleBookFormChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 resize-none"
                  placeholder="Please explain why you think this book should be added to our collection. Include its relevance to academic programs, research value, or general interest..."
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 h-12 border-gray-300 hover:bg-gray-50 bg-transparent"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmittingBook}
              className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {isSubmittingBook ? (
                <motion.div
                  className="flex items-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Star className="h-5 w-5 mr-2" />
                  Submitting...
                </motion.div>
              ) : (
                <>
                  <BookPlus className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Submit Recommendation
                </>
              )}
            </Button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}
