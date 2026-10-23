'use client';
import { skillsData } from '@/assets/assets';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Server,
  Terminal,
  Wrench,
  CheckCircle,
  Sparkles,
  Brain,
} from 'lucide-react';

const categoryTabs = [
  { id: 'all', label: 'All Skills', icon: Sparkles },
  { id: 'frontend', label: 'Frontend', icon: Code },
  { id: 'backend', label: 'Backend & DB', icon: Server },
  { id: 'ai', label: 'AI, DL & Vision', icon: Brain },
  { id: 'languages', label: 'Languages', icon: Terminal },
  { id: 'tools', label: 'Tools & Platforms', icon: Wrench },
];

const categoryConfig = {
  frontend: {
    title: 'Frontend Development',
    description: 'Building modern, reactive, mobile-first, and accessible user interfaces.',
    icon: Code,
    gradient: 'from-blue-500 to-indigo-600',
  },
  backend: {
    title: 'Backend & Databases',
    description: 'PostgreSQL, MySQL, MSSQL, MongoDB, and robust Node.js/Express REST APIs.',
    icon: Server,
    gradient: 'from-indigo-600 to-purple-600',
  },
  ai: {
    title: 'AI, Deep Learning & Computer Vision',
    description: 'OpenCV image processing, deep learning neural networks, and OCR document extraction.',
    icon: Brain,
    gradient: 'from-cyan-500 to-blue-600',
  },
  languages: {
    title: 'Programming Languages',
    description: 'Writing clean, optimized, algorithm-driven code across paradigms.',
    icon: Terminal,
    gradient: 'from-purple-600 to-pink-600',
  },
  tools: {
    title: 'Tools, Platforms & Analytics',
    description: 'Workflow automation with n8n, Git, Postman API testing, and Tableau data analytics.',
    icon: Wrench,
    gradient: 'from-pink-600 to-rose-600',
  },
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categoriesToRender =
    activeTab === 'all'
      ? ['frontend', 'backend', 'ai', 'languages', 'tools']
      : [activeTab];

  return (
    <section id="skills" className="w-full py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 rounded-full border border-indigo-200/50 dark:border-indigo-800/50 mb-3"
          >
            Technical Arsenal
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Skills &amp; Proficiencies
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"
          />
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A comprehensive overview of technologies, frameworks, and engineering tools I leverage across full-stack development, database architecture, AI &amp; computer vision, and workflow automation.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoryTabs.map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/20'
                    : 'bg-white/70 dark:bg-slate-900/70 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <IconComponent className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categoriesToRender.map((categoryKey) => {
            const config = categoryConfig[categoryKey];
            const items = skillsData[categoryKey] || [];
            const Icon = config.icon;

            return (
              <motion.div
                key={categoryKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Category Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${config.gradient} text-white shadow-sm`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                      {config.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {config.description}
                    </p>
                  </div>
                </div>

                {/* Skill Bars */}
                <div className="space-y-4 mt-6">
                  {items.map((skill, index) => (
                    <div key={index} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-indigo-500" />
                          {skill.name}
                        </span>
                        <span className="text-indigo-600 dark:text-indigo-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
