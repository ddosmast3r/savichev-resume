'use client'

import { motion } from 'framer-motion'

const Education = () => {
  const education = [
    {
      degree: 'Магистр',
      year: '2023',
      university: 'Санкт-Петербургский государственный университет аэрокосмического приборостроения',
      faculty: 'Институт технологий предпринимательства',
      specialization: 'Прикладная информатика (Корпоративные информационные системы)',
      gpa: '4.96',
      honors: 'Красный диплом',
      location: 'Санкт-Петербург',
      type: 'Очная форма обучения'
    },
    {
      degree: 'Бакалавр',
      year: '2021',
      university: 'Санкт-Петербургский государственный университет аэрокосмического приборостроения',
      faculty: 'Институт технологий предпринимательства и права',
      specialization: 'Прикладная информатика (в экономике)',
      gpa: '',
      honors: '',
      location: 'Санкт-Петербург',
      type: 'Очная форма обучения'
    }
  ]

  const additionalInfo = [
    {
      title: 'Языки',
      icon: '🌐',
      content: 'Русский — родной'
    },
    {
      title: 'Водительские права',
      icon: '🚗',
      content: 'Категория B'
    },
    {
      title: 'Формат работы',
      icon: '💼',
      content: 'Полный день, удаленная работа'
    }
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Образование
            <motion.span
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
              className="inline-block ml-2"
            >
              🎓
            </motion.span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-miku-cyan to-miku-teal mx-auto"></div>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-miku-cyan to-miku-teal"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true }}
                className={`relative ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:ml-16'}`}
              >
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="absolute left-6 lg:left-8 w-4 h-4 bg-miku-cyan rounded-full border-4 border-miku-gray z-10 animate-pulse"
                />
                
                <div className="ml-16 lg:ml-0">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass p-8 rounded-2xl"
                  >
                    {/* Year badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="inline-block bg-gradient-to-r from-miku-cyan to-miku-teal text-black px-4 py-1 rounded-full text-sm font-bold mb-4"
                    >
                      {edu.year}
                    </motion.div>
                    
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-miku-light mb-2">
                          {edu.degree}
                        </h3>
                        <h4 className="text-lg text-white font-semibold mb-2">
                          {edu.university}
                        </h4>
                        <p className="text-miku-cyan mb-2">{edu.faculty}</p>
                        <p className="text-gray-300 mb-4">{edu.specialization}</p>
                      </div>
                      
                      {edu.gpa && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="lg:ml-8 flex-shrink-0"
                        >
                          <div className="text-center glass px-4 py-3 rounded-xl">
                            <div className="text-2xl font-bold text-miku-cyan">{edu.gpa}</div>
                            <div className="text-xs text-gray-400">Средний балл</div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-miku-cyan rounded-full"></span>
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-miku-cyan rounded-full"></span>
                        {edu.type}
                      </span>
                      {edu.honors && (
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-miku-accent rounded-full animate-pulse"></span>
                          <span className="text-miku-accent font-semibold">{edu.honors}</span>
                        </span>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Дополнительная информация
          </h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {additionalInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotateY: 5 }}
                className="glass p-6 rounded-xl text-center group cursor-pointer w-64 max-w-full"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="text-3xl mb-4 group-hover:scale-110 transition-transform"
                >
                  {info.icon}
                </motion.div>
                <h4 className="font-semibold text-miku-cyan mb-2 group-hover:text-miku-light transition-colors">
                  {info.title}
                </h4>
                <p className="text-gray-300 text-sm">{info.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Development */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-miku-light mb-4">
              Профессиональное развитие 📚
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Постоянно изучаю новые технологии и подходы в области DevOps и SRE. 
              Активно участвую в профессиональном сообществе и слежу за трендами в индустрии.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Continuous Learning',
              'Tech Communities',
              'Best Practices',
              'Industry Trends',
              'Open Source'
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-r from-miku-teal to-miku-cyan text-black px-4 py-2 rounded-full font-medium cursor-pointer"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education