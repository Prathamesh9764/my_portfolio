import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({ isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="about"
            className="w-full px-4 sm:px-[8%] md:px-[12%] py-16 scroll-mt-20"
        >
            {/* Introduction Heading */}
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center mb-2 text-lg font-Ovo"
            >
                Introduction
            </motion.h4>

            {/* About Me Heading */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-2xl sm:text-4xl md:text-5xl font-Ovo"
            >
                About Me
            </motion.h2>

            {/* Content Section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 my-10 sm:my-14"
            >
                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-60 sm:w-60 md:w-64 lg:w-80 rounded-3xl"
                >
                    <Image src={assets.user_image} alt="user" className="w-full rounded-3xl" />
                </motion.div>

                {/* Text and Cards Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex-1 px-2 sm:px-0"
                >
                    {/* About Me Text */}
                    <p className="mb-6 text-sm sm:text-base md:text-lg max-w-2xl font-Ovo leading-relaxed">
                        I am a B.Tech graduate in Information Technology (2024) from YCCE, Nagpur, passionate about web development, software development, and data analytics. I enjoy cycling and playing cricket in my free time.
                    </p>

                    {/* Info Cards */}
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-2xl"
                    >
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                                className="border border-gray-400 rounded-xl p-4 cursor-pointer hover:bg-lightHover dark:border-white dark:hover:bg-darkHover/50 transition-all duration-500 shadow-md"
                                key={index}
                            >
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-6 mt-2" />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                                <p className="text-gray-600 text-xs sm:text-sm dark:text-white/80">{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>

                    {/* Tools Heading */}
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                        className="mt-6 text-gray-700 font-Ovo dark:text-white/80 mb-4"
                    >
                        Tools I use
                    </motion.h4>

                    {/* Tools List */}
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.3 }}
                        className="flex flex-wrap items-center gap-3 sm:gap-5"
                    >
                        {toolsData.map((tool, index) => (
                            <motion.li
                                whileHover={{ scale: 1.1 }}
                                className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 border border-gray-500 rounded-lg cursor-pointer transition-all duration-500 hover:-translate-y-1"
                                key={index}
                            >
                                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>

    )
}
export default About
