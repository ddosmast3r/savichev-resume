'use client'

import { motion } from 'framer-motion'

const About = () => {
  const stats = [
    { label: 'Лет опыта', value: '4+' },
    { label: 'Проектов', value: '20+' },
    { label: 'Технологий', value: '15+' },
    { label: 'Сертификатов', value: '3' },
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
            Обо мне
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
              className="inline-block ml-2"
            >
              👨‍💻
            </motion.span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-miku-cyan to-miku-teal mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-miku-cyan mb-4">
                Профессиональный путь
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                SRE Engineer с опытом работы в финансовом секторе, специализирующийся на 
                эксплуатации высоконагруженных систем и автоматизации процессов DevOps.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                В настоящее время работаю в компании <span className="text-miku-light font-semibold">ФИНАМ</span>, 
                где занимаюсь сопровождением критически важных финансовых систем, 
                настройкой мониторинга и решением инцидентов.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Имею магистерскую степень по направлению &quot;Прикладная информатика&quot; 
                с красным дипломом (средний балл 4.96) и активно изучаю современные 
                технологии DevOps и SRE.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass p-6 rounded-xl text-center group cursor-pointer"
                >
                  <div className="text-3xl font-bold text-miku-cyan group-hover:text-miku-light transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Key Skills */}
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-miku-light mb-4">
                Ключевые навыки
              </h3>
              <div className="space-y-3">
                {[
                  'Эксплуатация высоконагруженных систем',
                  'CI/CD автоматизация (TeamCity)',
                  'Контейнеризация (Docker)',
                  'Мониторинг (Grafana, Prometheus, Zabbix)',
                  'Работа с базами данных (PostgreSQL)',
                  'Администрирование Linux систем'
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-miku-cyan rounded-full animate-pulse"></div>
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About