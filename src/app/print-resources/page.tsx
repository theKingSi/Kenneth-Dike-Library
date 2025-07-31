"use client"

import { useState, useEffect } from "react"
import { Building2, BookOpen, MapPin, Users, Clock, Info, ChevronDown, Calendar, ArrowUp } from "lucide-react"
import Header from "@/components/header"
import { motion, useScroll, useSpring } from "framer-motion"
import Footer from "@/components/footer"

export default function PrintResourcesPage() {
  const [activeFloor, setActiveFloor] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToFloor = (floorIndex: number) => {
    const element = document.getElementById(`floor-${floorIndex}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setActiveFloor(floorIndex)
    }
  }

  const openingHours = {
    session: {
      weekdays: "Monday to Friday – 8:00 a.m - 10:00 p.m",
      saturday: "Saturday – 8:00 a.m - 1:00 p.m",
      sunday: "Sunday – 5:00 p.m - 10:00 p.m",
    },
    vacation: {
      weekdays: "Monday to Friday – 8:00 a.m - 6:00 p.m",
      saturday: "Saturday – 8:00 a.m - 1:00 p.m",
    },
  }

  const floorData = [
    {
      floor: "Ground Floor",
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      wings: [
        {
          wing: "West Wing",
          facilities: [
            "Circulation Desk",
            "Online Public Access Catalogue (OPAC) stand",
            "Exhibition Gallery",
            "Reprographic Unit",
            "Research Library",
            "Electronic Classroom",
            "Cataloguing Section",
            "Digitisation Chamber",
          ],
        },
        {
          wing: "East Wing",
          title: "General Reading Room",
          description:
            "The General Reading Room is mainly for consultation of reference work and reading of current work, current journals and newspapers. It is also used for 24 hours library services.",
          capacity: "600 readers at a time",
          collections: [
            "Undergraduate reference collection",
            "Current issues of journals on display",
            "Latest issues of newspapers",
            "General reading collection",
            "Recent accessions",
            "University calendars and prospectuses",
          ],
        },
      ],
    },
    {
      floor: "1st Floor",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      wings: [
        {
          wing: "West Wing",
          facilities: [
            "ICT and Systems Division",
            "Space for Internet Users with seating capacity of 70 users at a time",
            "Office of the Deputy University Librarian (DUL), ICT and Systems",
            "Server Room",
            "Head, Technical, Infrastructure and Internet Services' Office",
          ],
        },
        {
          wing: "East Wing",
          title: "Electronic Library",
          description:
            "Electronic Library with one hundred (100) Internet ready computers for the students to access electronic resources and surfing the Internet.",
          facilities: ["Chat Room"],
        },
      ],
    },
    {
      floor: "2nd Floor",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      wings: [
        {
          wing: "West Wing",
          facilities: [
            "Collection Development Librarian's Office",
            "Acquisition Librarian's Office",
            "Reading Room – Seating Capacity (70)",
            "Book Shelves",
            "Collection Development Technical Staff Office",
            "Collection Development Work Room",
          ],
          subjects: [
            { code: "R", area: "Medicine" },
            { code: "RA", area: "Public Aspects of Medicine, Public Health, Hygiene, Preventive Medicine, Toxicology" },
            { code: "RB", area: "Pathology" },
            { code: "RC", area: "Internal Medicine" },
            { code: "RD", area: "Surgery" },
            { code: "RE", area: "Ophthalmology" },
            { code: "RF", area: "Otorhinolaryngology (Ear, Nose and Throat)" },
            { code: "RG", area: "Gynecology and Obstetrics" },
            { code: "RJ", area: "Pediatrics" },
            { code: "RK", area: "Dentistry" },
            { code: "RM", area: "Therapeutics, Pharmacology" },
            { code: "RS", area: "Pharmacy and Material Medical" },
            { code: "RT", area: "Nursing" },
            { code: "S", area: "Agriculture" },
            { code: "SB", area: "Plant Culture" },
            { code: "SD", area: "Forestry" },
            { code: "SF", area: "Animal Culture" },
            { code: "SH", area: "Aquaculture, Fisheries, Angling" },
            { code: "SK", area: "Hunting Sports" },
            { code: "L", area: "Education" },
          ],
        },
        {
          wing: "East Wing",
          facilities: [
            "Reading Room (Seating Capacity (55))",
            "Book Shelves",
            "Office of the Deputy University Librarian (DUL) Special Collections",
          ],
          subjects: [
            { code: "A", area: "General Works" },
            { code: "AC", area: "Collections, Series, Collected Works" },
            { code: "AE", area: "Encyclopedia" },
            { code: "AM", area: "Museums" },
            { code: "AS", area: "Societies, Academics" },
            { code: "AZ", area: "General History of Scholarship and Learning" },
            { code: "B", area: "Philosophy (General)" },
            { code: "BC", area: "Logic" },
            {
              code: "BD",
              area: "Philosophical Works, Metaphysics, Epistemology, Theory of Knowledge, Methodology, Ontology, Cosmology",
            },
            { code: "BJ", area: "Ethics" },
            { code: "BL", area: "Religions, Mythology, Rationalism, Hinduism" },
            { code: "BM", area: "Judaism" },
            { code: "BP", area: "Islam and Bahai Faith" },
            { code: "BQ", area: "Buddhism" },
            { code: "BR", area: "Christianity" },
            { code: "BS", area: "Bible and Exegesis" },
            { code: "BT", area: "Doctrinal Theology" },
            { code: "BV", area: "Practical Theology" },
            { code: "BX", area: "Christian Dominations" },
            { code: "C", area: "Auxiliary Sciences of History (General)" },
            { code: "CB", area: "History of Civilization" },
            { code: "CD", area: "Diplomatic, Archives and Seals" },
            { code: "CT", area: "Biography" },
          ],
        },
      ],
    },
    {
      floor: "3rd Floor",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      wings: [
        {
          wing: "West Wing",
          facilities: ["Office of the University Librarian"],
        },
        {
          wing: "East Wing",
          facilities: ["Reading Room – Seating Capacity (55)", "Book Shelves"],
          subjects: [
            { code: "CC", area: "Archaeology" },
            { code: "QN", area: "Anthropology" },
            { code: "Q", area: "Science (General)" },
            { code: "QA", area: "Mathematics" },
            { code: "QC", area: "Physics" },
            { code: "QD", area: "Chemistry" },
            { code: "QE", area: "Geology" },
            { code: "QH", area: "Natural History – Biology" },
            { code: "QK", area: "Botany" },
            { code: "QL", area: "Zoology" },
            { code: "QM", area: "Human Anatomy" },
            { code: "QP", area: "Physiology" },
            { code: "QR", area: "Microbiology" },
            { code: "T", area: "Technology (General)" },
            { code: "TA", area: "Engineering (General) Civil Engineering" },
            { code: "TC", area: "Hydraulic Engineering" },
            { code: "TD", area: "Environment Technology Sanitary Engineering" },
            { code: "TE", area: "Highway Engineering Roads/Pavement" },
            { code: "TF", area: "Railroad Engineering and Operations" },
            { code: "TH", area: "Building Construction" },
            { code: "TJ", area: "Mechanical Engineering and Machinery" },
            { code: "TK", area: "Electrical Engineering Electronics, Nuclear Engineering" },
            { code: "TL", area: "Motor, Vehicles, Aeronautics, Astronautics" },
            { code: "TN", area: "Mining Engineering Metallurgy" },
            { code: "TP", area: "Chemical Technology" },
            { code: "TR", area: "Photography" },
            { code: "TS", area: "Manufacturer" },
            { code: "TT", area: "Handcrafts, Arts and Crafts" },
            { code: "TX", area: "Home Economics" },
          ],
        },
      ],
    },
    {
      floor: "4th Floor",
      color: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-50",
      wings: [
        {
          wing: "West Wing",
          facilities: ["Arabic Collection Section", "Maps Section", "Manuscripts Section"],
        },
        {
          wing: "East Wing",
          title: "Closed Access Collection (CAC)",
          description: "Covered all Subject Areas",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Navigation */}
      <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="glass rounded-2xl p-4 space-y-2">
          {floorData.map((floor, index) => (
            <button
              key={index}
              onClick={() => scrollToFloor(index)}
              className={`w-12 h-12 rounded-xl flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                activeFloor === index
                  ? "bg-white text-purple-600 shadow-lg scale-110"
                  : "text-white hover:bg-white/20 hover:scale-105"
              }`}
            >
              {index === 0 ? "G" : index}
            </button>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 animate-bounce-slow"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}


       {/* Header */}
            <motion.header
              className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Header />
            </motion.header>

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div
          className={`text-center transform transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="relative">
              <BookOpen className="h-20 w-20 text-white animate-float" />
              <div className="absolute inset-0 bg-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
            </div>
            <div className="relative">
              <Building2 className="h-20 w-20 text-white animate-float animation-delay-1000" />
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-30 animate-pulse animation-delay-1000"></div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text animate-gradient-shift">Print Resources</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Navigate through Kenneth Dike Library's comprehensive collection with our interactive floor guide
          </p>

          <button
            onClick={() => scrollToFloor(0)}
            className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
          >
            Explore Floors
            <ChevronDown className="inline-block ml-2 h-5 w-5 group-hover:animate-bounce" />
          </button>
        </div>
      </div>

      {/* Opening Hours Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
       
    

        {/* Floor Sections */}
        <div className="space-y-32">
          {floorData.map((floor, floorIndex) => (
            <div key={floorIndex} id={`floor-${floorIndex}`} className="scroll-mt-20">
              <div
                className={`glass rounded-3xl overflow-hidden transform hover:scale-[1.02] transition-all duration-700 ${floor.bgColor}/5`}
              >
                {/* Floor Header */}
                <div className={`bg-gradient-to-r ${floor.color} p-8 md:p-12 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-in-left">{floor.floor}</h2>
                        <div className="flex items-center gap-3">
                          <MapPin className="h-6 w-6" />
                          <span className="text-xl opacity-90">Interactive Floor Guide</span>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                          <Building2 className="h-12 w-12" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                </div>

                {/* Wings Content */}
                <div className="p-0">
                  <div className="grid lg:grid-cols-2">
                    {floor.wings.map((wing, wingIndex) => (
                      <div
                        key={wingIndex}
                        className={`p-8 md:p-12 ${wingIndex === 1 ? "lg:border-l border-white/20" : ""} hover:bg-white/5 transition-all duration-500`}
                      >
                        <div className="mb-8">
                          <div className="flex items-center gap-4 mb-6">
                            <div
                              className={`w-12 h-12 bg-gradient-to-r ${floor.color} rounded-xl flex items-center justify-center`}
                            >
                              <Building2 className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">{wing.wing}</h3>
                          </div>

                          {wing.title && (
                            <div className="mb-8">
                              <h4 className="text-xl font-semibold text-purple-300 mb-4">{wing.title}</h4>
                              {wing.description && (
                                <p className="text-gray-300 text-lg leading-relaxed mb-4">{wing.description}</p>
                              )}
                              {wing.capacity && (
                                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full">
                                  <Users className="h-4 w-4" />
                                  <span className="font-medium">{wing.capacity}</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>

                        {wing.facilities && (
                          <div className="mb-8">
                            <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                              Facilities
                            </h4>
                            <div className="grid gap-3">
                              {wing.facilities.map((facility, facilityIndex) => (
                                <div
                                  key={facilityIndex}
                                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
                                >
                                  <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                                    <span className="text-gray-200 group-hover:text-white transition-colors duration-300">
                                      {facility}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {wing.collections && (
                          <div className="mb-8">
                            <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                              Collections
                            </h4>
                            <div className="grid gap-3">
                              {wing.collections.map((collection, collectionIndex) => (
                                <div
                                  key={collectionIndex}
                                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:scale-105"
                                >
                                  <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                                    <span className="text-gray-200 group-hover:text-white transition-colors duration-300">
                                      {collection}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {wing.subjects && (
                          <div>
                            <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              Subject Areas
                            </h4>
                            <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
                              {wing.subjects.map((subject, subjectIndex) => (
                                <div
                                  key={subjectIndex}
                                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105"
                                >
                                  <div className="flex gap-4 items-start">
                                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-lg font-mono text-sm font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                      {subject.code}
                                    </div>
                                    <span className="text-gray-200 group-hover:text-white transition-colors duration-300 text-sm leading-relaxed">
                                      {subject.area}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-32">
          <div className="glass rounded-3xl p-8 md:p-12 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full mb-8">
              <Info className="h-6 w-6" />
              <span className="font-semibold">Additional Information</span>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                The Kenneth Dike Library operates a comprehensive classification system covering all major academic
                disciplines. Each floor is strategically organized to provide easy access to related subject areas and
                specialized collections.
              </p>
              <p>
                The library's Closed Access Collection (CAC) on the 4th floor ensures that at least one copy of every
                title acquired is preserved and available for consultation at all times, supporting both academic and
                professional accreditation programs.
              </p>
              <p>
                Special collections including Arabic materials, maps, and manuscripts are housed on the 4th floor,
                providing researchers with access to unique and historical resources.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer and ScrollToTop */}
      <Footer />
    </div>
  )
}
