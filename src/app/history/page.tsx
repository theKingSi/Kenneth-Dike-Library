"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring, useInView } from "framer-motion"
import { ArrowLeft, Calendar, User, Award, BookOpen, Clock, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const librarians = [
  {
    name: "Dr. Mercy Ariomerebi Iroaganachi",
    period: "1965-1982",
    title: "University Librarian",
    achievement: "Established the library's foundation and initial collection of 10,000 volumes",
    image: "Liba.jpg",
  },
  {
    name: "Prof. James Richardson",
    period: "1982-1995",
    title: "Head Librarian",
    achievement: "Introduced the first computerized catalog system and expanded to 500,000 volumes",
    image: "pic2.jpg",
  },
  {
    name: "Dr. Sarah Chen",
    period: "1995-2010",
    title: "Director of Library Services",
    achievement: "Led the digital transformation and established online databases",
    image: "pic3.jpg",
  },
  {
    name: "Dr. Michael Rodriguez",
    period: "2010-Present",
    title: "Chief Library Officer",
    achievement: "Modernized facilities and reached 2.5 million resources milestone",
    image: "pic8.jpg",
  },
    {
    name: "Dr. Margaret Thompson",
    period: "1965-1982",
    title: "Founding Head Librarian",
    achievement: "Established the library's foundation and initial collection of 10,000 volumes",
    image: "pic7.jpg",
  },
  {
    name: "Prof. James Richardson",
    period: "1982-1995",
    title: "Head Librarian",
    achievement: "Introduced the first computerized catalog system and expanded to 500,000 volumes",
    image: "pic4.jpg",
  },
  {
    name: "Dr. Sarah Chen",
    period: "1995-2010",
    title: "Director of Library Services",
    achievement: "Led the digital transformation and established online databases",
    image: "pic6.jpg",
  },
  {
    name: "Dr. Michael Rodriguez",
    period: "2010-Present",
    title: "Chief Library Officer",
    achievement: "Modernized facilities and reached 2.5 million resources milestone",
    image: "pic5.jpg",
  },
]

const milestones = [
  { year: "1965", event: "UI Library founded with 10,000 books", icon: BookOpen },
  { year: "1975", event: "First expansion completed, capacity doubled", icon: Award },
  { year: "1985", event: "Computer catalog system implemented", icon: User },
  { year: "1995", event: "Digital resources introduced", icon: Calendar },
  { year: "2005", event: "24/7 study spaces opened", icon: BookOpen },
  { year: "2015", event: "Major renovation and modernization", icon: Award },
  { year: "2020", event: "Virtual services expanded during pandemic", icon: User },
  { year: "2024", event: "2.5 million resources milestone reached", icon: Calendar },
]

const eras = [
  {
    title: "The Foundation Era",
    period: "1965-1980",
    description:
      "The UI Library was born from a vision of academic excellence. Founded in 1965 by Dr. Margaret Thompson, our library began as a modest collection housed in a single building. With just 10,000 volumes and a staff of five, it served a growing university community of 3,000 students. The early years were marked by rapid growth and community support. Local donors contributed rare books and manuscripts, while faculty members helped curate specialized collections. By 1975, the first major expansion doubled our capacity and introduced dedicated research spaces.",
    image: "img5.jpg",
    quote: "A library is not a luxury but one of the necessities of life.",
    quoteAuthor: "Dr. Margaret Thompson, Founding Head Librarian",
    stats: [
      { value: "10,000", label: "Initial Volumes" },
      { value: "5", label: "Staff Members" },
      { value: "3,000", label: "Students Served" },
    ],
  },
  {
    title: "The Expansion Era",
    period: "1980-1995",
    description:
      "Under the leadership of Prof. James Richardson, the library embraced significant growth and technological advancement. The introduction of computerized catalog systems in 1985 revolutionized how students and faculty accessed information. Gone were the days of manual card catalogs. This period saw the collection grow from 50,000 to over 500,000 volumes, with specialized collections in science, humanities, and social sciences. The library building was expanded twice during this era, adding study spaces, conference rooms, and the first computer lab for student use.",
    image: "img2.jpg",
    quote: "Technology is just a tool. In terms of getting information to people, it's how we use it that matters.",
    quoteAuthor: "Prof. James Richardson, Head Librarian (1982-1995)",
    stats: [
      { value: "500,000", label: "Volumes by 1995" },
      { value: "2", label: "Building Expansions" },
      { value: "15,000", label: "Students Served" },
    ],
  },
  {
    title: "The Digital Revolution",
    period: "1995-2010",
    description:
      "The 1990s brought the internet era, and Dr. Sarah Chen spearheaded our digital transformation. Online databases, electronic journals, and digital archives became integral parts of our services. By 2000, we had established partnerships with major academic publishers worldwide. This era saw the library transform from a traditional book repository to a hybrid information center. The introduction of 24/7 study spaces, digital literacy programs, and the first e-book collections fundamentally changed how the library served the university community.",
    image: "img1.jpg",
    quote: "The library is not just a repository of books but a gateway to the world's knowledge.",
    quoteAuthor: "Dr. Sarah Chen, Director of Library Services (1995-2010)",
    stats: [
      { value: "1M+", label: "Volumes by 2010" },
      { value: "50+", label: "Digital Databases" },
      { value: "30,000", label: "Students Served" },
    ],
  },
  {
    title: "The Modern Era",
    period: "2010-Present",
    description:
      "The 21st century has seen unprecedented growth and innovation. Dr. Michael Rodriguez's leadership has transformed the library into a modern learning hub. The 2015 renovation introduced collaborative spaces, maker labs, and state-of-the-art technology centers. Today, the UI Library serves over 45,000 users annually, houses 2.5 million resources, and operates 24/7 to support our diverse academic community. We continue to evolve, embracing new technologies while preserving our commitment to traditional scholarship.",
    image: "img8.webp",
    quote:
      "Libraries store the energy that fuels the imagination. They open up windows to the world and inspire us to explore and achieve.",
    quoteAuthor: "Dr. Michael Rodriguez, Chief Library Officer (2010-Present)",
    stats: [
      { value: "2.5M+", label: "Resources Today" },
      { value: "45,000+", label: "Annual Users" },
      { value: "24/7", label: "Access" },
    ],
  },
]

export default function HistoryPage() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-serif">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 origin-left z-50"
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
          <div className="text-sm text-gray-500 italic">UI Library Archives</div>
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
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            The <span className="text-blue-600">Chronicle</span> of UI Library
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light italic">
            Six decades of academic excellence, innovation, and unwavering commitment to knowledge
          </p>
        </motion.div>

        {/* Newspaper-style Masthead */}
        <div className="border-y-4 border-gray-900 py-4 mb-12">
          <div className="flex justify-between items-center">
            <div className="text-sm uppercase tracking-widest">Vol. 59, No. 1</div>
            <div className="text-sm uppercase tracking-widest">Est. 1965</div>
            <div className="text-sm uppercase tracking-widest">UI Library Historical Society</div>
          </div>
        </div>

        {/* Lead Story */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 leading-tight">
              From Humble Beginnings to Digital Excellence: The Remarkable Journey of UI Library
            </h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-blue-600 first-letter:mr-2 first-letter:float-left">
                When the doors of UI Library first opened in 1965, few could have imagined the remarkable journey that
                would unfold over the next six decades. What began as a modest collection of 10,000 books has
                transformed into one of the nation's premier academic libraries, housing over 2.5 million resources and
                serving as an intellectual hub for generations of scholars.
              </p>
              <p>
                The story of UI Library is one of vision, adaptation, and unwavering commitment to knowledge. Through
                changing technologies, expanding campus needs, and evolving educational paradigms, the library has
                remained at the heart of the university's academic mission.
              </p>
            </div>
          </div>
          <div>
            <motion.div
              className="relative h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src="img4.jpg"
                alt="Original Library Building 1965"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm rounded-b-lg">
                The original UI Library building as it appeared in 1965
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Era Articles */}
        {eras.map((era, index) => (
          <EraArticle key={index} era={era} index={index} />
        ))}

        {/* Timeline Section */}
        <motion.section
          className="mb-20 py-16 bg-gray-100 rounded-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Key Milestones</h2>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="flex items-center mb-8 last:mb-0"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-8">
                  <milestone.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-gray-800 font-medium">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Librarians Gallery */}
        <motion.section
  className="mb-20"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Distinguished Librarians</h2>

  <div className="overflow-hidden relative">
    <motion.div
      className="flex gap-8 w-max"
      animate={{ x: ['0%', '-50%'] }}
      transition={{
        repeat: Infinity,
        duration: 100,
        ease: "linear",
      }}
    >
      {[...librarians, ...librarians].map((librarian, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex-shrink-0 w-72"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-blue-100">
              <img
                src={librarian.image || "/placeholder.svg"}
                alt={librarian.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{librarian.name}</h3>
            <p className="text-blue-600 font-semibold mb-2">{librarian.title}</p>
            <p className="text-sm text-gray-500 mb-3">{librarian.period}</p>
            <p className="text-gray-700 leading-relaxed text-sm">{librarian.achievement}</p>
          </div>
        </div>
      ))}
    </motion.div>
  </div>
</motion.section>

        {/* Final Quote */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-20 py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-6xl text-blue-600 mb-6">"</div>
          <p className="text-2xl md:text-3xl italic text-gray-700 mb-6">
            The UI Library stands as a testament to our enduring belief that knowledge is the foundation of progress. As
            we look to the future, we remain committed to our mission of connecting minds to ideas, preserving our
            intellectual heritage, and fostering the discoveries of tomorrow.
          </p>
          <p className="text-lg font-semibold text-gray-900">— Dr. Michael Rodriguez, Chief Library Officer</p>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} UI Library Historical Archives. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ChevronUp className="h-6 w-6" />
      </motion.button>
    </div>
  )
}

function EraArticle({ era, index }: { era: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <motion.article
      ref={ref}
      className={`mb-24 pb-12 border-b border-gray-200 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className={`space-y-6 ${index % 2 === 1 ? "md:pl-12" : "md:pr-12"}`}>
          <div>
            <motion.div
              className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {era.period}
            </motion.div>
            <motion.h2
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {era.title}
            </motion.h2>
          </div>

          <motion.div
            className="text-lg leading-relaxed space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {era.description.split(". ").map((sentence: string, i: number) => (
              <p key={i}>{sentence + (i < era.description.split(". ").length - 1 ? "." : "")}</p>
            ))}
          </motion.div>

          <motion.div
            className="bg-gray-100 p-6 rounded-xl italic text-gray-700 border-l-4 border-blue-600 my-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="mb-2">"{era.quote}"</p>
            <p className="text-sm font-medium text-gray-600">— {era.quoteAuthor}</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {era.stats.map((stat: any, i: number) => (
              <div key={i} className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-xs text-gray-600 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            <motion.img
              src={era.image}
              alt={era.title}
              className="w-full rounded-lg shadow-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-lg">
              <p className="text-sm">
                {era.title} - {era.period}
              </p>
            </div>
          </div>

          <motion.div
            className="absolute -bottom-6 -right-6 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg"
            animate={{
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Clock className="h-8 w-8" />
          </motion.div>
        </motion.div>
      </div>
    </motion.article>
  )
}
