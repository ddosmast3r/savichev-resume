'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Header = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Дмитрий Савичев'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-miku-dark/20 to-miku-gray/30" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-4"
      >
        {/* Profile image with glow effect */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mx-auto w-48 h-48 rounded-full bg-gradient-to-r from-miku-cyan to-miku-teal mb-8 animate-glow flex items-center justify-center p-2"
        >
          <div className="w-44 h-44 rounded-full overflow-hidden bg-miku-gray">
            <img 
              src="/image/avatar.png" 
              alt="Дмитрий Савичев"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name with typewriter effect */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-4 neon-glow"
        >
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="text-miku-cyan"
          >
            |
          </motion.span>
        </motion.h1>

        {/* Job title */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="text-2xl md:text-3xl text-miku-light mb-6 font-light"
        >
          SRE Engineer Middle
        </motion.h2>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {['DevOps', 'Monitoring', 'Automation', 'CI/CD'].map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="glass px-4 py-2 rounded-full text-miku-cyan font-medium cursor-pointer"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* Location and contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="text-gray-300 space-y-2"
        >
          <p className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-miku-cyan rounded-full animate-pulse"></span>
            Санкт-Петербург, м. Академическая
          </p>
          <p className="text-miku-light">26 лет • Готов к переезду и командировкам</p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-miku-cyan rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-miku-cyan rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-miku-cyan/20 rounded-lg"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              width: `${30 + i * 10}px`,
              height: `${30 + i * 10}px`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </header>
  )
}

export default Header