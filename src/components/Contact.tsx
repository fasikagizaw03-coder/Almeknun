import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40 bg-earth-white dark:bg-earth-stone transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-earth-accent" />
              <span className="text-[9px] uppercase tracking-[0.5em] font-sans font-bold text-earth-accent">
                Engagement Portal
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-serif text-earth-graphite dark:text-earth-beige mb-10 leading-tight">
              Request <br/> 
              <span className="italic font-light text-earth-accent">Technical Scoping.</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
              <div>
                <span className="text-[8px] uppercase tracking-[0.4em] text-earth-graphite/30 dark:text-earth-beige/20 font-bold mb-4 block italic">Head Office Address</span>
                <p className="text-[14px] font-serif text-earth-graphite dark:text-earth-beige leading-relaxed italic font-light">
                  Bole Sub-city, Wereda 03<br/>
                  Addis Ababa, Ethiopia
                </p>
              </div>
              <div>
                <span className="text-[8px] uppercase tracking-[0.4em] text-earth-graphite/30 dark:text-earth-beige/20 font-bold mb-4 block italic">Core Connect</span>
                <p className="text-[14px] font-serif text-earth-graphite dark:text-earth-beige leading-relaxed italic font-light">
                  Almeknun37@gmail.com
                </p>
              </div>
            </div>

            <div className="space-y-10 border-t border-earth-graphite/5 dark:border-white/5 pt-10">
               <div>
                  <span className="text-[8px] uppercase tracking-[0.4em] text-earth-accent font-bold mb-4 block italic">Ato Alemayehu Gebre — General Manager</span>
                  <p className="text-[14px] font-mono text-earth-graphite/60 dark:text-earth-beige/50">alemayehugebre29@gmail.com | +251-968430166</p>
               </div>
               <div>
                  <span className="text-[8px] uppercase tracking-[0.4em] text-earth-accent font-bold mb-4 block italic">Ato Biniyam Yiheyis — Co-Founder</span>
                  <p className="text-[14px] font-mono text-earth-graphite/60 dark:text-earth-beige/50">bentheaxum@gmail.com | +251-966831917</p>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-earth-beige/50 dark:bg-earth-graphite/10 border border-earth-graphite/5 dark:border-white/5 p-12 lg:p-16 relative overflow-hidden rounded-sm shadow-2xl shadow-earth-stone/5"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-earth-accent/5 blur-3xl -mr-16 -mt-16" />
            
            <form className="space-y-12 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[8px] uppercase tracking-[0.4em] text-earth-graphite/40 dark:text-earth-beige/30 font-bold italic">Contact Node</label>
                  <input type="text" placeholder="Individual / Organization" className="w-full bg-transparent border-b border-earth-graphite/10 dark:border-white/10 pb-4 font-serif text-xl italic focus:border-earth-accent outline-none transition-colors dark:text-earth-beige" />
                </div>
                <div className="space-y-4">
                  <label className="text-[8px] uppercase tracking-[0.4em] text-earth-graphite/40 dark:text-earth-beige/30 font-bold italic">Return Address</label>
                  <input type="email" placeholder="Email for Proposal" className="w-full bg-transparent border-b border-earth-graphite/10 dark:border-white/10 pb-4 font-serif text-xl italic focus:border-earth-accent outline-none transition-colors dark:text-earth-beige" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[8px] uppercase tracking-[0.4em] text-earth-graphite/40 dark:text-earth-beige/30 font-bold italic">Brief Project Parameters</label>
                <textarea rows={3} placeholder="Asset class, location, and purpose of valuation..." className="w-full bg-transparent border-b border-earth-graphite/10 dark:border-white/10 pb-4 font-serif text-xl italic focus:border-earth-accent outline-none transition-colors resize-none dark:text-earth-beige" />
              </div>
              <button className="w-full bg-earth-accent dark:bg-earth-accent-light text-white dark:text-earth-stone p-8 text-[9px] font-bold uppercase tracking-[0.4em] hover:brightness-110 transition-all rounded-sm shadow-lg shadow-earth-accent/20">
                Submit Formal Inquiry
              </button>
            </form>
          </motion.div>
        </div>

        <footer className="mt-40 pt-16 border-t border-earth-graphite/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-balance">
          <div className="flex flex-col gap-4 text-center md:text-left">
             <div className="text-3xl font-serif tracking-[0.2em] font-light text-earth-graphite dark:text-earth-beige">ALMEKNUN</div>
             <div className="text-[8px] font-bold uppercase tracking-[0.5em] text-earth-graphite/30 dark:text-earth-beige/20">
               ALMEKNUN ASSET VALUATION AND CONSULTANCY PLC © 2026<br/>
               ETB 150,000 Preliminary Scoping Fee Credits Applied.
             </div>
          </div>
          <div className="flex gap-10">
            <a href="#" className="text-[8px] uppercase tracking-[0.3em] text-earth-graphite/40 dark:text-earth-beige/30 hover:text-earth-accent dark:hover:text-earth-accent-light transition-colors font-bold italic">LinkedIn</a>
            <a href="#" className="text-[8px] uppercase tracking-[0.3em] text-earth-graphite/40 dark:text-earth-beige/30 hover:text-earth-accent dark:hover:text-earth-accent-light transition-colors font-bold italic">Instagram</a>
            <a href="#" className="text-[8px] uppercase tracking-[0.3em] text-earth-graphite/40 dark:text-earth-beige/30 hover:text-earth-accent dark:hover:text-earth-accent-light transition-colors font-bold italic">Proposal Validity: 60 Days</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
