'use client';
import { assets, personalInfo, statsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  ArrowRight,
  ExternalLink,
  Mail,
  Sparkles,
  Code2,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

const Header = () => {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-6 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>Available for Full-time Roles & Freelance Projects</span>
        </motion.div>

        {/* Profile Avatar with Gradient Border */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
          className="relative mb-6"
        >
          <div className="relative p-1 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 shadow-xl shadow-indigo-500/20">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800">
              <Image
                src={assets.profile_img}
                alt={personalInfo.name}
                width={128}
                height={128}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 bg-white dark:bg-slate-900 rounded-full p-1.5 shadow-md border border-slate-200 dark:border-slate-800">
            <Code2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-2 text-base sm:text-xl font-medium text-slate-700 dark:text-slate-300 mb-3"
        >
          <span>Hi, I&apos;m</span>
          <span className="font-bold text-slate-900 dark:text-white">{personalInfo.name}</span>
          <Image
            src={assets.hand_icon}
            alt="Waving hand"
            width={24}
            height={24}
            className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse"
          />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6"
        >
          Crafting Modern Web Apps with{' '}
          <span className="text-gradient">Code, Design &amp; Innovation</span>
        </motion.h1>

        {/* Subtitle / Bio */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8"
        >
          Junior Developer at <span className="font-semibold text-slate-800 dark:text-slate-200">Moodscope AI</span> &amp; B.Tech in IT graduate (2024) from <span className="font-semibold text-slate-800 dark:text-slate-200">YCCE, Nagpur</span>.
          Passionate about building responsive full-stack web applications, scalable databases (PostgreSQL, MongoDB, MySQL), and intelligent AI solutions (OpenCV, Deep Learning, OCR).
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm shadow-md hover:shadow-indigo-500/25 transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 font-medium text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
          >
            <span>Contact Me</span>
            <Mail className="w-4 h-4 text-indigo-500" />
          </a>

          <div className="flex items-center gap-1.5">
            <a
              href="/sample-resume.pdf"
              download="Prathamesh_Vijaywar_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              title="Download PDF Resume"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
            <a
              href={personalInfo.resumeDrive}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Resume on Google Drive"
              title="View on Google Drive"
              className="p-3 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-indigo-600 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Social Links Pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-3 p-1.5 px-4 rounded-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/70 dark:border-slate-800 shadow-sm mb-12"
        >
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mr-1">Find me:</span>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-1.5 rounded-full text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-1.5 rounded-full text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="p-1.5 rounded-full text-slate-600 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Send Email"
            className="p-1.5 rounded-full text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-card dark:shadow-card-dark"
        >
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center p-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight">
                {stat.number}
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
