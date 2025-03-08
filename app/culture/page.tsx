"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function CulturePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <Image
          src="/culture4.png"
          alt="SC ST Cultural Celebration"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            Rich Cultural Heritage of SC ST Communities
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Celebrating traditions, arts, and identity spanning generations
          </motion.p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">Celebration and Ritual</h2>
            <p className="text-gray-700 mb-4">
              The preparations for the Karma Festival begin about a week to ten days before the main event. Young women sow seven types of grains in sand brought from the river, which they nurture for 7-9 days.
            </p>
            <p className="text-gray-700">
              On the day of the festival, a branch of the Karam tree is planted in the courtyard or akhra. Devotees gather with hibiscus flowers, and the priest worships the Karam Raja. The festival features traditional dances and songs, known as Karma Naach, which are performed with great enthusiasm
            </p>
          </motion.div>
          <motion.div
            className="relative h-72 md:h-96 rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/culture3.png"
              alt="/images/cultural-identity.jpg"
              fill
              className="object-cover object-top"
            />
          </motion.div>
        </div>
      </section>

      {/* Traditions Section */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-red-700 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Living Traditions
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {traditions.map((tradition, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                  <Image
                    src={tradition.image}
                    alt={tradition.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-semibold text-red-700 mb-2">{tradition.title}</h3>
                <p className="text-gray-600">{tradition.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Art & Crafts Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">Cultural Significance</h2>
            <p className="text-gray-700 mb-4">
              The Karma Festival holds immense cultural and spiritual significance. It serves as a celebration of tradition, community, and spirituality, highlighting the interconnectedness of these elements.
            </p>
            <p className="text-gray-700">
              The festival is a platform for families and neighbors to strengthen bonds through shared meals, stories, and laughter, enhancing the social fabric and allowing for the transmission of cultural wisdom from one generation to the next
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 gap-4 flex-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {arts.map((art, index) => (
              <div key={index} className="relative h-40 md:h-56 rounded-md overflow-hidden shadow-md">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <p className="text-white p-3 font-medium">{art.title}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cultural Festivals */}
      <section className="py-16 px-4 bg-red-700 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Karam Festival & Celebrations
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-16">
            {festivals.map((festival, index) => (
              <motion.div
                key={index}
                className="flex gap-6 items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-white">
                  <Image
                    src={festival.image}
                    alt={festival.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{festival.name}</h3>
                  <p className="text-red-100">{festival.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contemporary Relevance */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-red-700 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Contemporary Cultural Expressions
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Today, SC ST cultural expressions are finding new platforms and recognition, blending traditional elements with modern contexts.
          </motion.p>
        </div>

        <div className="relative h-96 rounded-xl overflow-hidden mb-8">
          <Image
            src="/culture3.png"
            alt="Contemporary Cultural Expressions"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-700/70 to-transparent flex items-center">
            <div className="p-8 md:p-12 max-w-md">
              <h3 className="text-2xl font-bold text-white mb-4">Evolving Traditions</h3>
              <p className="text-white/90">
                As times change, the Karma Festival has adapted to contemporary challenges. Some celebrations now focus on environmental awareness, advocating for sustainable practices. Artists incorporate elements of the festival into their creations, infusing creativity and innovation into tradition. This evolution demonstrates the festival&apos;s ability to remain relevant while preserving its timeless values
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-red-50 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-red-700 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Experience the Cultural Richness
          </motion.h2>
          <motion.p
            className="text-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Learn more about the vibrant cultural traditions of SC ST communities through events, workshops, and cultural exchange programs.
          </motion.p>
          <motion.button
            className="bg-red-700 text-white px-8 py-3 rounded-md font-medium hover:bg-red-800 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Explore Upcoming Events
          </motion.button>
        </div>
      </section>
    </div>
  )
}

// Sample data for the page content
const traditions = [
  {
    title: "Community Building",
    description: "The Karma Festival is a vibrant tapestry that weaves together nature, community, and spirituality. It stands as a testament to the rich cultural heritage of West Bengal and other regions where it is celebrated. As a celebration of harvest and community, it continues to inspire unity and cultural pride among its participants, ensuring its longevity for generations to come.",
    image: "/culture2.png"
  },
  {
    title: "Belief in Nature Spirits",
    description: "Karam tree symbolises fertility, prosperity and everything that is auspicious. During the festival, the branch of the Karam tree is carried by the Karma dancers accompanied by singing and dancing. Smeared with milk and rice beer, this branch is raised in the middle of the spot where the group performs dance..",
    image: "/tree.png"
  },
  {
    title: "Music & Dance",
    description: "Traditional dances and songs are performed throughout the day.",
    image: "/dance.png"
  }
]

const arts = [
  {
    title: "",
    image: "/culture5.png"
  },
  {
    title: "",
    image: "/culture6.png"
  },
  {
    title: "",
    image: "/culture7.png"
  },
  {
    title: "",
    image: "/culture11.png"
  }
]

const festivals = [
  {
    name: "Planting of the Karam Brunch",
    description: "A branch of the Karam tree is planted in the courtyard",
    image: "/tree.png"
  },
  {
    name: "Worship and Offering",
    description: "The priest performs rituals to worship Karam-Devta, accompanied by offerings of flowers and grains",
    image: "/culture9.png"
  },
  {
    name: "Dancing and Singing",
    description: "Traditional dances and songs are performed throughout the day",
    image: "/dance.png"
  },
  {
    name: "Community Fest",
    description: "The festival concludes with a community feast and the immersion of the Karam branch in a river or pond.",
    image: "/culture10.png"
  }
]