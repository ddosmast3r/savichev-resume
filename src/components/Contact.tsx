'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = () => {
  const [hoveredContact, setHoveredContact] = useState<string | null>(null)

  const contactInfo = [
    {
      type: 'email',
      icon: '📧',
      label: 'Email',
      value: 'mistersavichev@yandex.ru',
      link: 'mailto:mistersavichev@yandex.ru',
      description: 'Предпочитаемый способ связи',
      color: '#00dddd'
    },
    {
      type: 'phone',
      icon: '📱',
      label: 'Телефон',
      value: '+7 (911) 152-26-25',
      link: 'tel:+79111522625',
      description: 'Для срочных вопросов',
      color: '#00aaaa'
    },
    {
      type: 'location',
      icon: '📍',
      label: 'Местоположение',
      value: 'Санкт-Петербург',
      link: 'https://maps.google.com/?q=Saint+Petersburg+Russia',
      description: 'м. Академическая',
      color: '#ff6b9d'
    }
  ]

  const socialLinks = [
    {
      name: 'Telegram',
      icon: '💬',
      url: 'https://t.me/Diimoooon',
      color: '#0088cc'
    }
  ]

  return (
    <footer className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Свяжитесь со мной
            <motion.span
              animate={{ rotate: [0, 20, -20, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
              className="inline-block ml-2"
            >
              👋
            </motion.span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-miku-cyan to-miku-teal mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Готов к новым вызовам и интересным проектам. 
            Открыт для предложений о работе и профессиональных обсуждений.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-miku-light mb-6">
                Контактная информация
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.type}
                    href={contact.link}
                    target={contact.type === 'location' ? '_blank' : undefined}
                    rel={contact.type === 'location' ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    onMouseEnter={() => setHoveredContact(contact.type)}
                    onMouseLeave={() => setHoveredContact(null)}
                    className="flex items-center p-4 rounded-xl transition-all duration-300 group cursor-pointer border border-transparent hover:border-miku-cyan/30 hover:glass"
                  >
                    <motion.div
                      animate={{ 
                        rotate: hoveredContact === contact.type ? [0, 10, -10, 10, 0] : 0,
                        scale: hoveredContact === contact.type ? 1.2 : 1 
                      }}
                      transition={{ duration: 0.5 }}
                      className="text-2xl mr-4"
                    >
                      {contact.icon}
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-miku-cyan group-hover:text-miku-light">
                          {contact.label}
                        </span>
                      </div>
                      <div className="text-white font-semibold mb-1">
                        {contact.value}
                      </div>
                      <div className="text-sm text-gray-400">
                        {contact.description}
                      </div>
                    </div>
                    
                    <motion.div
                      animate={{ x: hoveredContact === contact.type ? 5 : 0 }}
                      className="text-miku-cyan opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      →
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl"
            >
              <div className="flex items-center justify-center">
                <div className="flex items-center space-x-3">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-green-400 rounded-full"
                  />
                  <span className="text-miku-light font-semibold">
                    Открыт к предложениям
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="glass p-8 rounded-2xl">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-6xl mb-6"
              >
                🚀
              </motion.div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                Готов начать работу!
              </h3>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Ищу позицию SRE Engineer Middle в динамичной команде. 
                Готов к переезду, командировкам и удаленной работе.
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="mailto:mistersavichev@yandex.ru"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-miku-cyan to-miku-teal text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 hover:shadow-miku-cyan/30"
                  >
                    📧 Связаться
                  </motion.a>
                  
                  <motion.a
                    href="https://t.me/Diimoooon"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
                  >
                    💬 Telegram
                  </motion.a>
                  
                  <motion.a
                    href="/Резюме_SRE_Engineer_Junior_Middle_Дмитрий_Савичев_от_29_08_2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
                  >
                    📄 Резюме
                  </motion.a>
                </div>
                
                <div className="text-sm text-gray-400">
                  Отвечу в течение 24 часов
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-700/50 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © 2025 Дмитрий Савичев. Фанат Хацунэ Мику 💙
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Сделано с</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-miku-accent"
              >
                💙
              </motion.span>
              <span>и Next.js</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Contact