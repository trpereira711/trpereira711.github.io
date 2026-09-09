"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col bg-black overflow-x-hidden min-h-screen">
      {/* Welcome / Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        
        {/* Top Brand / Avatar (Like Attekita's Top-Left) */}
        <div className="absolute top-8 left-6 md:top-14 md:left-12 flex items-center gap-4 z-20">
          {/* Avatar com borda colorida */}
          <div className="w-16 h-16 md:w-24 md:h-24 border-4 md:border-8 border-emerald-500 rounded-full bg-zinc-800 flex items-center justify-center text-emerald-500 font-bold text-xl md:text-3xl">
            TP
          </div>
          <div className="text-white font-bold text-xl tracking-wider hidden md:block">
            THIAGO<span className="text-emerald-500">.</span>DEV
          </div>
        </div>

        {/* Hero Content */}
        <div className="container px-6 relative z-10 w-full flex justify-center">
          <div className="max-w-4xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight"
            >
              Olá! Sou Thiago Roberto Pereira, <br className="hidden md:block" />
              <span className="text-emerald-500">Arquiteto de Software</span> e <br className="hidden md:block" /> Engenheiro Backend.
            </motion.div>

            {/* Links styled like Attekita's */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-wrap text-sm md:text-base text-emerald-500 gap-6 md:gap-8 pt-8"
            >
              <a href="https://linkedin.com/in/thiago-roberto-pereira" target="_blank" className="flex items-center hover:text-emerald-400 transition-colors">
                LinkedIn <ArrowUpRight className="ml-1 w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="https://github.com/trpereira711" target="_blank" className="flex items-center hover:text-emerald-400 transition-colors">
                GitHub <ArrowUpRight className="ml-1 w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#contato" className="flex items-center hover:text-emerald-400 transition-colors">
                Contato <ArrowUpRight className="ml-1 w-4 h-4 md:w-5 md:h-5" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Ticker / Marquee styled exactly like the Attekita's bottom bar */}
        <div className="bg-emerald-500 h-14 md:h-16 absolute left-0 right-0 bottom-0 flex items-center overflow-hidden z-20">
          <motion.div
            className="flex whitespace-nowrap text-black font-extrabold text-lg md:text-xl uppercase tracking-widest"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            {/* We duplicate the content to make the infinite scroll seamless */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 md:gap-12 px-4 md:px-6">
                <span>Java 21</span>
                <span>•</span>
                <span>Spring Boot</span>
                <span>•</span>
                <span>Microsserviços</span>
                <span>•</span>
                <span>AWS</span>
                <span>•</span>
                <span>Kafka</span>
                <span>•</span>
                <span>Arquitetura Hexagonal</span>
                <span>•</span>
                <span>DDD</span>
                <span>•</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Simple ambient background effect to replace particles for now */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-900/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-800/10 rounded-full blur-[100px]" />
        </div>
      </section>
    </main>
  );
}
