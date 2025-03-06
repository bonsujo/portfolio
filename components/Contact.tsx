"use client"

import { motion } from "framer-motion";

export const Contact =() =>{
    return(
        <section id="contact" className=" overflow-x-clip py-32 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center text-center"
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-7xl font-bold text-gray-300 mb-10"
          >
            Get in <span className="text-green-100/40">Touch</span>
          </motion.h2>
  
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-8 rounded-2xl w-full max-w-lg"
          >
            <form
              action="https://formspree.io/f/mqaebnza"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-left text-lg font-medium text-gray-200"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-2 p-4 w-full max-w-xl border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                  placeholder="John Doe"
                />
              </div>
  
              <div>
                <label
                  htmlFor="email"
                  className="block text-left text-lg font-medium text-gray-200"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="_replyto"
                  required
                  className="mt-2 p-4 w-full max-w-xl border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                  placeholder="you@example.com"
                />
              </div>
  
              <div>
                <label
                  htmlFor="message"
                  className="block text-left text-lg font-medium text-gray-200"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="mt-2 p-4 w-full max-w-xl h-40 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                  placeholder="Write your message here..."
                />
              </div>
  
              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-green-800 text-white font-medium text-lg rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </section>
    )

}