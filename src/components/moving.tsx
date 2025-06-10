import React from 'react'
import { motion } from 'framer-motion'

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
];

const Moving = () => {
  return (
    <motion.section
      className="mb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        Distinguished Librarians
      </h2>

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
  );
};

export default Moving;//make it better 


