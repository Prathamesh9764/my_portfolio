'use client';
import { assets, infoList, toolItems, personalInfo } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Briefcase,
  Code2,
  MapPin,
  Calendar,
  Heart,
  Download,
  CheckCircle2,
} from 'lucide-react';

const About = ({ isDarkMode }) => {
  return (
    <section id="about" className="w-full py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 rounded-full border border-indigo-200/50 dark:border-indigo-800/50 mb-3"
          >
            Introduction
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Image & Personal Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative group w-full max-w-sm">
              {/* Decorative Backdrop Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />

              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
                <Image
                  src={assets.user_image}
                  alt={personalInfo.name}
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay Card Details */}
                <div className="p-5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mb-3">
                    {personalInfo.role}
                  </p>

                  <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-indigo-500 shrink-0" />
                      <span>B.Tech in IT (2024), YCCE Nagpur</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                      <span>{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>Enjoys cycling &amp; playing cricket</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative, Cards, and Tools */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Story Paragraphs */}
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              <p>
                I am a driven software developer and a recent <strong className="text-slate-900 dark:text-white">B.Tech graduate in Information Technology (7.84 CGPA, Class of 2024)</strong> from <span className="text-indigo-600 dark:text-indigo-400 font-medium">Yeshwantrao Chavan College of Engineering (YCCE), Nagpur</span>.
              </p>
              <p>
                My passion lies in crafting high-impact digital experiences. I combine clean visual design with solid backend architecture, specializing in <span className="font-semibold text-slate-900 dark:text-white">React, Next.js, Node.js, PostgreSQL, and MongoDB</span>. Along with web development, I have built specialized solutions in <span className="font-semibold text-slate-900 dark:text-white">Computer Vision (OpenCV, YOLOv8), Deep Learning, and OCR document intelligence using Python.</span> 
              </p>
              <p>
                I have honed my practical engineering skills as a <strong className="text-slate-900 dark:text-white">Junior Developer and Software Developer Intern at Moodscope AI Pvt Ltd</strong>, alongside independent freelance client projects, delivering solutions that are responsive, accessible, and fast. When I am away from the screen, you will find me cycling around scenic routes or on the cricket pitch.
              </p>
            </div>

            {/* Quick Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {infoList.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/50 dark:border-indigo-800/50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    {index === 0 && <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />}
                    {index === 1 && <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />}
                    {index === 2 && <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />}
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Tools Section */}
            <div className="pt-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-2">
                <span>Tools &amp; Environment</span>
                <span className="w-8 h-[1px] bg-slate-300 dark:bg-slate-700" />
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {toolItems.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl border border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-800/80 hover:border-indigo-300 dark:hover:border-indigo-700/50 hover:-translate-y-0.5 transition-all duration-200 shadow-sm group"
                  >
                    <div className="w-8 h-8 relative shrink-0 flex items-center justify-center p-1 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 group-hover:scale-110 transition-transform">
                      <Image
                        src={tool.icon}
                        alt={tool.name}
                        width={26}
                        height={26}
                        className="object-contain max-h-6 max-w-6"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                        {tool.name}
                      </p>
                      <p className="text-[10px] text-slate-400 truncate">
                        {tool.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
