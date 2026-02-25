"use client"

import { motion, cubicBezier } from "framer-motion"
import { Button } from "../ui/button"
import { dancingscript } from "@/app/fonts"
import Counter from "../ui/Counter"
import { Search, ShieldCheck, Users, GraduationCap, MapPin, Star } from "lucide-react"


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: cubicBezier(0.16, 1, 0.3, 1) } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white flex items-center pt-20 lg:pt-0">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Main Background */}
          <img 
            src="/hero-tutor.png" 
            alt="Tutoring Background"
            className="w-full h-full object-cover object-center opacity-40 lg:opacity-100"
          />
            {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent hidden lg:block" />
          <div className="absolute inset-0 bg-white/60 block lg:hidden" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
        
        {/* LEFT COLUMN: CONTENT */}
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
          
          

          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            Find the Perfect <br />
            <span className={`${dancingscript.className} text-blue-600`}>
              Home Tutor
            </span>
            <br /> in Dehradun
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-lg text-lg leading-relaxed text-slate-700 font-medium">
            Expert 1-on-1 personalized learning at your doorstep. We match your child with 
            <span className="text-blue-700 font-bold text-slate-900"> verified, top-rated educators </span> 
            tailored to their unique pace.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button className="h-14 px-8 bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 rounded-2xl text-base font-bold">
              Find a Tutor Now
            </Button>
            <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-300 bg-white/50 backdrop-blur-sm text-slate-700 hover:bg-white text-base font-semibold">
              Become a Tutor
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-6 items-center border-t border-slate-200/60 pt-8">
             <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-600"/>
                <span className="text-sm font-bold text-slate-600">Verified Profiles</span>
             </div>
             <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600"/>
                <span className="text-sm font-bold text-slate-600"><Counter value="500" />+ Tutors</span>
             </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: INTERACTIVE UI (Responsive Overlays) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mt-16 lg:mt-0 lg:ml-auto w-full max-w-[480px]"
        >
          {/* QUICK MATCH CARD (Glassmorphism Effect) */}
          <div className="relative z-20 rounded-[2.5rem] border border-white/40 bg-white/70 p-4 backdrop-blur-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)]">
            <div className="rounded-[2rem] bg-slate-50/50 p-6 border border-white/50">
              <div className="flex items-center justify-between mb-6">
                 <h3 className="font-bold text-slate-800 tracking-tight">Quick Match</h3>
                 <span className="text-[10px] font-bold bg-blue-600 text-white px-2 py-1 rounded-md uppercase tracking-wider">Live</span>
              </div>
              
              <div className="space-y-4">
                <div className="relative group">
                  <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                  <select className="w-full pl-11 pr-4 py-3.5 rounded-2xl border-none bg-white text-sm shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer">
                    <option>Select Grade & Curriculum </option>
                    <option >Class 4-6 (CBSE)</option>
                    <option>Class 7-8 (CBSE)</option>
                    <option>Class 9 – 10 (ICSE/CBSE)</option>
                    <option>Class 11 – 12 (JEE/NEET)</option>
                  </select>
                </div>
                
                <div className="relative group">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                  <input placeholder="Area in Dehradun" className="w-full pl-11 pr-4 py-3.5 rounded-2xl border-none bg-white text-sm shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>

                <Button className="w-full h-14 bg-slate-900 text-white hover:bg-black rounded-2xl gap-2 font-bold transition-all hover:shadow-xl">
                  <Search className="w-4 h-4" /> Search Tutors
                </Button>
              </div>

              <div className="mt-8 space-y-3">
                <TutorCard name="Anjali Sharma" subject="Mathematics & Physics" rating="4.9" img="https://i.pravatar.cc/150?u=1" delay={0.4} />
                <TutorCard name="Rahul Verma" subject="Chemistry Expert" rating="4.8" img="https://i.pravatar.cc/150?u=2" delay={0.5} />
              </div>
            </div>
          </div>

          {/* TOP RATED FLOATING BADGE */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 z-30 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-slate-50 min-w-[200px]"
          >
             <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-white shadow-inner">
                <Star fill="currentColor" size={24} />
             </div>
             <div>
                <p className="text-sm font-black text-slate-800 uppercase tracking-tighter">Top Rated</p>
                <p className="text-[10px] text-slate-500 font-bold">Verified by Doon Parents</p>
             </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

function TutorCard({ name, subject, rating, img, delay }: { name: string, subject: string, rating: string, img: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="flex items-center justify-between rounded-2xl bg-white/80 p-3 shadow-sm border border-white hover:shadow-md transition-all group cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <img src={img} className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-100" alt={name} />
        <div>
          <p className="text-sm font-bold text-slate-800">{name}</p>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">{subject}</p>
        </div>
      </div>
      <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
        <Star size={10} className="text-yellow-600" fill="currentColor" />
        <span className="text-[11px] font-black text-yellow-700">{rating}</span>
      </div>
    </motion.div>
  )
}