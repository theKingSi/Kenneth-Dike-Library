import React from 'react'
import { motion } from 'framer-motion'

const librarians = [
  {
    name: "DR. MERCY ARIOMEREBI IROAGANACHI",
    title: "University Librarian",
    section: "",
    image: "Liba.jpg",
  },
  {
    name: "MR. C. O. OLA",
    title: "Deputy University Librarian",
    section: "",
    image: "DPT1.png",
  },
  {
    name: "DR. BEATRICE A. FABUNMI",
    title: "Deputy University Librarian",
    section: "Readers Section",
    image: "DPT6.png",
  },
  {
    name: "DR. ADETOUN A. OYELUDE",
    title: "Deputy University Librarian",
    section: "Technical Services",
    image: "DPT7.png",
  },
  {
    name: "DR. REUBEN A. OJO",
    title: "Deputy mUniversity Librarian",
    section: "ICT & Systems",
    image: "DPT8.png",
  },
  {
    name: "MRS. BOLARINWA M. ADEYEMI",
    title: "Deputy University Librarian",
    section: "Special Collections",
    image: "DPT4.png",
  },
  {
    name: "DR. GRACE A. AJUWON",
    title: "Deputy University Librarian",
    section: "Medical Library",
    image: "DPT5.PNG",
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
                 <p className="text-xs text-gray-500 italic">{librarian.section}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Moving;//make it better 


