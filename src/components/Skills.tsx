'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillCategories = [
    {
      title: 'DevOps & Infrastructure',
      icon: '⚙️',
      skills: [
        { name: 'Docker', level: 85, color: '#0db7ed' },
        { name: 'Linux (Debian)', level: 80, color: '#fcc624' },
        { name: 'TeamCity', level: 75, color: '#000000' },
        { name: 'Ansible', level: 70, color: '#ee0000' },
        { name: 'CI/CD', level: 80, color: '#00dddd' },
      ]
    },
    {
      title: 'Monitoring & Logging',
      icon: '📊',
      skills: [
        { name: 'Grafana', level: 85, color: '#f46800' },
        { name: 'Prometheus', level: 75, color: '#e6522c' },
        { name: 'Zabbix', level: 70, color: '#c40000' },
        { name: 'Graylog', level: 65, color: '#ff3633' },
      ]
    },
    {
      title: 'Databases & APIs',
      icon: '🗄️',
      skills: [
        { name: 'PostgreSQL', level: 80, color: '#336791' },
        { name: 'SQL', level: 85, color: '#00dddd' },
        { name: 'Postman', level: 75, color: '#ff6c37' },
        { name: 'BloomRpc', level: 65, color: '#00aa00' },
      ]
    },
    {
      title: 'Tools & Systems',
      icon: '🔧',
      skills: [
        { name: 'Git', level: 85, color: '#f1502f' },
        { name: 'Jira', level: 80, color: '#0052cc' },
        { name: 'Confluence', level: 75, color: '#172b4d' },
        { name: 'VS Code', level: 90, color: '#007acc' },
        { name: 'Bitbucket', level: 70, color: '#0052cc' },
      ]
    }
  ]

  const certifications = [
    {
      title: 'Docker + Ansible',
      subtitle: 'с нуля, деплой и управление Swarm',
      year: '2022',
      platform: 'Stepik',
    },
    {
      title: 'Введение в Linux',
      subtitle: 'Основы администрирования',
      year: '2022',
      platform: 'Stepik',
    },
    {
      title: 'ИТ компетенции - DevOps',
      subtitle: 'от Газпром',
      year: '2023',
      platform: 'Газпром',
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
            Навыки и технологии
            <motion.span
              animate={{ rotate: [0, 20, -20, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
              className="inline-block ml-2"
            >
              🚀
            </motion.span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-miku-cyan to-miku-teal mx-auto"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl"
            >
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold text-miku-light">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 group-hover:text-miku-cyan transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    
                    <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full rounded-full relative"
                        style={{ 
                          background: hoveredSkill === skill.name 
                            ? `linear-gradient(90deg, ${skill.color}, #00dddd)`
                            : `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`
                        }}
                      >
                        <motion.div
                          animate={{ 
                            x: ['-100%', '100%'],
                            opacity: hoveredSkill === skill.name ? [0, 1, 0] : 0
                          }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="absolute inset-0 bg-white/30"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-miku-light mb-4">
              Использование ИИ в работе 🤖
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Активно применяю технологии искусственного интеллекта для оптимизации 
              рабочих процессов, автоматизации обработки запросов и улучшения качества 
              технической документации.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['ChatGPT 4.0', 'Claude 3.5', 'GitHub Copilot', 'Cursor AI'].map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-gradient-to-r from-miku-cyan to-miku-teal text-black px-6 py-3 rounded-full font-semibold cursor-pointer"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Сертификаты
            <motion.span
              animate={{ rotate: [0, 15, -15, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block ml-2"
            >
              🏆
            </motion.span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, rotateY: -90 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotateX: 5 }}
                className="glass p-6 rounded-xl text-center group cursor-pointer perspective-1000"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  📜
                </div>
                <h4 className="font-semibold text-miku-cyan mb-2 group-hover:text-miku-light transition-colors">
                  {cert.title}
                </h4>
                <p className="text-gray-400 text-sm mb-3">{cert.subtitle}</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>{cert.platform}</span>
                  <span>{cert.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills