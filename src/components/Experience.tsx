'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const Experience = () => {
  const [activeJob, setActiveJob] = useState(0)

  const experiences = [
    {
      id: 0,
      company: 'ФИНАМ',
      position: 'Младший инженер',
      period: 'Сентябрь 2022 — настоящее время',
      duration: '3 года',
      location: 'Санкт-Петербург',
      website: 'www.finam.ru',
      type: 'Финансовый сектор',
      description: 'Управляющая, инвестиционная компания (управление активами)',
      responsibilities: [
        'Сопровождение и эксплуатация высоконагруженных систем',
        'Решение пользовательских инцидентов через систему Jira',
        'Ночные дежурства по установленному графику',
        'Анализ и выявление причин инцидентов с тестировщиками',
        'Развёртывание микросервисов и автоматизация CI/CD (TeamCity)',
        'Подготовка технической документации',
        'Настройка мониторинга и логирования системы',
        'Постоянная поддержка и мониторинг ИС'
      ],
      achievements: [
        'Успешно завершил стажировку с переходом на должность "Младший инженер"',
        'Завершил обучение в магистратуре с красным дипломом (средний балл 4.96)',
        'Получаю положительные отзывы за коммуникативные навыки и работу в команде'
      ],
      technologies: ['TeamCity', 'Jira', 'Docker', 'Linux', 'Monitoring', 'CI/CD']
    },
    {
      id: 1,
      company: 'ООО Практик',
      position: 'Системный инженер',
      period: 'Сентябрь 2021 — Август 2022',
      duration: '1 год',
      location: 'Санкт-Петербург',
      website: 'standart7.com',
      type: 'IT, системная интеграция',
      description: 'Системная интеграция, автоматизации технологических и бизнес-процессов',
      responsibilities: [
        'Плановое техническое обслуживание контрольно-кассовой техники',
        'Городские и межгородские командировки на объекты',
        'Техническая поддержка ККТ',
        'Работа с ОФД, налоговой',
        'Выезд, установка, настройка ККТ',
        'Обучение работе на ККТ',
        'Ремонт ККТ в офисе или на объекте'
      ],
      achievements: [
        'За короткий срок изучил базовые принципы работы с ККТ',
        'Планировал рабочее время и организовывал удобный маршрут',
        'Ездил в межгородские командировки (Луга, Петрозаводск, Тверь, Москва)',
        'Получал благодарность от клиентов за быстрое выполнение заявки',
        'Сохранил хорошие отношения с коллегами'
      ],
      technologies: ['ККТ', 'Налоговая', 'ОФД', 'Техподдержка', 'Командировки']
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
            Опыт работы
            <motion.span
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block ml-2"
            >
              💼
            </motion.span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-miku-cyan to-miku-teal mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">4 года профессионального опыта</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Company selector */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.button
                  key={exp.id}
                  onClick={() => setActiveJob(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                    activeJob === index
                      ? 'glass border-2 border-miku-cyan'
                      : 'bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700'
                  }`}
                >
                  <div className="space-y-2">
                    <h3 className={`font-semibold text-lg ${
                      activeJob === index ? 'text-miku-cyan' : 'text-white'
                    }`}>
                      {exp.company}
                    </h3>
                    <p className="text-gray-400 text-sm">{exp.position}</p>
                    <p className="text-miku-light text-xs">{exp.duration}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Job details */}
          <motion.div
            key={activeJob}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="glass p-8 rounded-2xl">
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {experiences[activeJob].position}
                  </h3>
                  <span className="text-miku-cyan font-medium">
                    {experiences[activeJob].period}
                  </span>
                </div>
                
                <div className="space-y-2 mb-6">
                  <h4 className="text-xl text-miku-light font-semibold">
                    {experiences[activeJob].company}
                  </h4>
                  <p className="text-gray-400">{experiences[activeJob].description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span>📍 {experiences[activeJob].location}</span>
                    <span>🌐 {experiences[activeJob].website}</span>
                    <span>🏢 {experiences[activeJob].type}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {experiences[activeJob].technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="px-3 py-1 bg-miku-cyan/20 text-miku-cyan text-sm rounded-full border border-miku-cyan/30"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-8">
                <h5 className="text-lg font-semibold text-miku-light mb-4">
                  Обязанности:
                </h5>
                <div className="space-y-3">
                  {experiences[activeJob].responsibilities.map((resp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-miku-cyan rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{resp}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h5 className="text-lg font-semibold text-miku-light mb-4">
                  Достижения:
                </h5>
                <div className="space-y-3">
                  {experiences[activeJob].achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="flex items-start space-x-3"
                    >
                      <span className="text-miku-cyan text-lg flex-shrink-0">🏆</span>
                      <span className="text-gray-300">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience