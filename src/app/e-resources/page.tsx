"use client"

import { useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { ArrowLeft, Search, Filter, ExternalLink, BookOpen, Users, Globe, Database, Zap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const databases = [
  {
    id: 1,
    name: "JSTOR",
    category: "Multidisciplinary",
    description:
      "Digital library with thousands of academic journals, books, and primary sources across multiple disciplines including arts, sciences, and humanities.",
    features: ["Full-text articles", "Historical archives", "Primary sources", "Citation tools"],
    subjects: ["Arts & Humanities", "Social Sciences", "Science & Mathematics", "Business & Economics"],
    logo: "/placeholder.svg?height=80&width=200&text=JSTOR",
    url: "https://www.jstor.org",
    color: "from-red-500 to-red-600",
    stats: { articles: "12M+", journals: "3,000+", books: "75,000+" },
  },
  {
    id: 2,
    name: "PubMed",
    category: "Medical & Life Sciences",
    description:
      "Comprehensive database of biomedical literature from MEDLINE, life science journals, and online books, maintained by the National Center for Biotechnology Information.",
    features: ["MEDLINE citations", "Free full-text articles", "Clinical trials", "Systematic reviews"],
    subjects: ["Medicine", "Nursing", "Dentistry", "Veterinary Science", "Health Sciences"],
    logo: "/placeholder.svg?height=80&width=200&text=PubMed",
    url: "https://pubmed.ncbi.nlm.nih.gov",
    color: "from-blue-500 to-blue-600",
    stats: { articles: "35M+", journals: "5,200+", books: "270,000+" },
  },
  {
    id: 3,
    name: "IEEE Xplore",
    category: "Engineering & Technology",
    description:
      "Premier digital library providing access to IEEE publications, conference proceedings, and standards in electrical engineering, computer science, and electronics.",
    features: ["IEEE standards", "Conference papers", "Technical magazines", "Educational courses"],
    subjects: ["Electrical Engineering", "Computer Science", "Electronics", "Telecommunications"],
    logo: "/placeholder.svg?height=80&width=200&text=IEEE+Xplore",
    url: "https://ieeexplore.ieee.org",
    color: "from-indigo-500 to-indigo-600",
    stats: { articles: "5M+", conferences: "1,900+", standards: "1,800+" },
  },
  {
    id: 4,
    name: "ScienceDirect",
    category: "Science & Technology",
    description:
      "Elsevier's leading platform providing access to scientific, technical, and medical research literature with advanced search and discovery tools.",
    features: ["Full-text articles", "Reference linking", "Citation alerts", "Research analytics"],
    subjects: ["Physical Sciences", "Engineering", "Life Sciences", "Health Sciences", "Social Sciences"],
    logo: "/placeholder.svg?height=80&width=200&text=ScienceDirect",
    url: "https://www.sciencedirect.com",
    color: "from-orange-500 to-orange-600",
    stats: { articles: "16M+", journals: "2,500+", books: "39,000+" },
  },
  {
    id: 5,
    name: "SpringerLink",
    category: "Multidisciplinary",
    description:
      "Comprehensive online collection of scientific, technological, and medical literature including journals, books, series, protocols, and reference works.",
    features: ["Open access content", "Book chapters", "Protocol methods", "Reference works"],
    subjects: ["Medicine", "Engineering", "Computer Science", "Mathematics", "Business"],
    logo: "/placeholder.svg?height=80&width=200&text=SpringerLink",
    url: "https://link.springer.com",
    color: "from-green-500 to-green-600",
    stats: { articles: "13M+", journals: "3,000+", books: "300,000+" },
  },
  {
    id: 6,
    name: "Wiley Online Library",
    category: "Multidisciplinary",
    description:
      "Extensive collection of online resources covering life, health, and physical sciences, social science, and the humanities with innovative research tools.",
    features: ["Enhanced PDFs", "Data visualization", "Author profiles", "Research metrics"],
    subjects: ["Chemistry", "Physics", "Medicine", "Psychology", "Business"],
    logo: "/placeholder.svg?height=80&width=200&text=Wiley+Online",
    url: "https://onlinelibrary.wiley.com",
    color: "from-purple-500 to-purple-600",
    stats: { articles: "7M+", journals: "1,600+", books: "23,000+" },
  },
  {
    id: 7,
    name: "Taylor & Francis Online",
    category: "Social Sciences & Humanities",
    description:
      "Platform hosting journals and books across humanities, social sciences, behavioral sciences, and science, technology, and medicine.",
    features: ["CrossRef linking", "Usage statistics", "Social sharing", "Mobile optimization"],
    subjects: ["Education", "Psychology", "Sociology", "History", "Literature"],
    logo: "/placeholder.svg?height=80&width=200&text=Taylor+Francis",
    url: "https://www.tandfonline.com",
    color: "from-teal-500 to-teal-600",
    stats: { articles: "4M+", journals: "2,700+", books: "130,000+" },
  },
  {
    id: 8,
    name: "SAGE Publications",
    category: "Social Sciences",
    description:
      "Leading publisher of journals, books, and digital media for academic, educational, and professional markets in social sciences and humanities.",
    features: ["Video abstracts", "Data supplements", "Author guidelines", "Peer review"],
    subjects: ["Education", "Psychology", "Sociology", "Political Science", "Communication"],
    logo: "/placeholder.svg?height=80&width=200&text=SAGE+Journals",
    url: "https://journals.sagepub.com",
    color: "from-pink-500 to-pink-600",
    stats: { articles: "1.4M+", journals: "1,000+", books: "4,000+" },
  },
  {
    id: 9,
    name: "Oxford Academic",
    category: "Multidisciplinary",
    description:
      "Oxford University Press's collection of academic journals covering a wide range of subject areas from medicine and life sciences to arts and humanities.",
    features: ["Open access options", "Special collections", "Author services", "Librarian tools"],
    subjects: ["Medicine", "Law", "Literature", "History", "Philosophy"],
    logo: "/placeholder.svg?height=80&width=200&text=Oxford+Academic",
    url: "https://academic.oup.com",
    color: "from-blue-700 to-blue-800",
    stats: { articles: "2.5M+", journals: "450+", books: "20,000+" },
  },
  {
    id: 10,
    name: "Cambridge Core",
    category: "Academic Publishing",
    description:
      "Cambridge University Press's platform providing access to academic content including journals, books, and other scholarly literature across all disciplines.",
    features: ["Advanced search", "Citation export", "Content alerts", "Usage reports"],
    subjects: ["Law", "Medicine", "Engineering", "Humanities", "Social Sciences"],
    logo: "/placeholder.svg?height=80&width=200&text=Cambridge+Core",
    url: "https://www.cambridge.org/core",
    color: "from-gray-600 to-gray-700",
    stats: { articles: "1.8M+", journals: "380+", books: "50,000+" },
  },
]

const categories = [
  "All",
  "Multidisciplinary",
  "Medical & Life Sciences",
  "Engineering & Technology",
  "Science & Technology",
  "Social Sciences & Humanities",
  "Social Sciences",
  "Academic Publishing",
]

export default function EResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const filteredDatabases = databases.filter((db) => {
    const matchesCategory = selectedCategory === "All" || db.category === selectedCategory
    const matchesSearch =
      db.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      db.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      db.subjects.some((subject) => subject.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-orange-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Header */}
      <motion.header
        className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Button>
          </Link>
          <div className="text-sm text-gray-500 italic">Kenneth Dike Library E-Resources</div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
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
            <Database className="w-4 h-4 mr-2" />
            Digital Resources Portal
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Electronic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-600">
              Resources
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Access over 10 million electronic volumes through our comprehensive collection of academic databases,
            journals, and digital libraries supporting research across all disciplines
          </p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">10M+</div>
              <div className="text-sm text-gray-600">Electronic Volumes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">15,000+</div>
              <div className="text-sm text-gray-600">Academic Journals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Databases</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">24/7</div>
              <div className="text-sm text-gray-600">Access Available</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search databases, subjects, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg border-gray-200 focus:border-green-500 focus:ring-green-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="h-12 px-4 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-green-500 bg-white"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-gray-600 text-center">
              Showing <span className="font-semibold text-green-600">{filteredDatabases.length}</span> databases
              {selectedCategory !== "All" && (
                <span>
                  {" "}
                  in <span className="font-semibold">{selectedCategory}</span>
                </span>
              )}
              {searchTerm && (
                <span>
                  {" "}
                  matching "<span className="font-semibold">{searchTerm}</span>"
                </span>
              )}
            </p>
          </div>
        </motion.div>

        {/* Databases Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {filteredDatabases.map((database, index) => (
            <DatabaseCard key={database.id} database={database} index={index} />
          ))}
        </motion.div>

        {/* No Results */}
        {filteredDatabases.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Database className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No databases found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search terms or category filter</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
              }}
              className="bg-green-600 hover:bg-green-700"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}

        {/* Access Information */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-green-600 to-orange-600 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <Globe className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Access Information</h2>
            <p className="text-xl mb-6 opacity-90">
              Most databases require University of Ibadan network access. Some resources like JSTOR allow off-campus
              access with institutional login.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <Users className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">On-Campus Access</h3>
                <p className="text-sm opacity-90">Direct access through UI network</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <Zap className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Off-Campus Access</h3>
                <p className="text-sm opacity-90">VPN or institutional login required</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <Award className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Support Available</h3>
                <p className="text-sm opacity-90">Contact ICT & Systems Division</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function DatabaseCard({ database, index }: { database: any; index: number }) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      {/* Header with Logo and Category */}
      <div className={`bg-gradient-to-r ${database.color} p-6 text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
              <img src={database.logo || "/placeholder.svg"} alt={`${database.name} logo`} className="h-12 w-auto" />
            </div>
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
              {database.category}
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-2">{database.name}</h3>
          <p className="text-white/90 leading-relaxed">{database.description}</p>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-white/5 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {Object.entries(database.stats).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-2xl font-bold text-gray-900">{value as string}</div>
              <div className="text-xs text-gray-500 capitalize">{key}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <Zap className="h-4 w-4 mr-2 text-green-600" />
            Key Features
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {database.features.map((feature: string, i: number) => (
              <motion.div
                key={i}
                className="flex items-center text-sm text-gray-600"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                {feature}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subjects */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <BookOpen className="h-4 w-4 mr-2 text-orange-600" />
            Subject Areas
          </h4>
          <div className="flex flex-wrap gap-2">
            {database.subjects.map((subject: string, i: number) => (
              <motion.span
                key={i}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {subject}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Access Button */}
        <motion.a
          href={database.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button className={`w-full bg-gradient-to-r ${database.color} hover:opacity-90 text-white shadow-lg group`}>
            <span>Access Database</span>
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </motion.a>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-200 transition-colors duration-300 pointer-events-none"></div>
    </motion.div>
  )
}
