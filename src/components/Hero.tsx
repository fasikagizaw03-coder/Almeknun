import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-earth-white dark:bg-earth-stone overflow-hidden transition-colors duration-500">
      {/* Soft Ethereal Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-earth-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-earth-accent-light/5 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-px bg-earth-accent" />
              <span className="text-[9px] uppercase tracking-[0.5em] font-sans font-bold text-earth-accent">
                Strategic Valuation Mastery
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-serif text-earth-graphite dark:text-earth-beige leading-[0.95] mb-12 tracking-tight">
              Honest <br/> 
              <span className="italic font-light text-earth-accent/80 dark:text-earth-accent-light/80">Asset Intelligence.</span>
            </h1>
            
            <p className="font-sans text-lg text-earth-graphite/60 dark:text-earth-beige/50 leading-relaxed max-w-xl mb-12 font-light">
              We define the true market essence of complex assets through a lens of clarity, integrity, and international technical precision. Partnering with elite enterprises to secure institutional trust across Ethiopia.
            </p>
            
            <div className="flex flex-wrap items-center gap-10">
              <a 
                href="#expertise"
                className="bg-earth-accent dark:bg-earth-accent-light text-white dark:text-earth-stone px-12 py-5 text-[10px] uppercase tracking-[0.3em] font-sans font-bold hover:brightness-110 transition-all rounded-sm"
              >
                Our Services
              </a>
              <a 
                href="#contact" 
                className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-earth-graphite/80 dark:text-earth-beige/80 hover:text-earth-accent transition-all"
              >
                <span>Scoping Request</span>
                <span className="w-8 h-px bg-earth-graphite/20 dark:bg-earth-beige/20 group-hover:w-12 group-hover:bg-earth-accent transition-all duration-300" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 hidden lg:flex justify-end"
          >
            <div className="relative w-full max-w-md aspect-[3/4] rounded-sm overflow-hidden shadow-2xl shadow-earth-stone/5">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
                alt="Architecture"
                className="w-full h-full object-cover grayscale dark:opacity-80 contrast-110 transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-earth-accent/10 dark:bg-earth-stone/20" />
              
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-earth-white/10 dark:bg-earth-stone/30 backdrop-blur-md border-t border-earth-white/20 dark:border-white/5">
                 <div className="text-[8px] uppercase tracking-[0.4em] font-bold text-earth-accent mb-2">Technical Compliance</div>
                 <div className="text-xs text-earth-graphite dark:text-earth-beige font-serif italic leading-relaxed">
                   Delivering IVS & IFRS compliant reporting for sustainable fiscal clarity.
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 dark:opacity-20"
      >
        <span className="text-[8px] uppercase tracking-[0.4em] font-bold text-earth-graphite dark:text-earth-beige">Discovery</span>
        <div className="w-px h-12 bg-gradient-to-b from-earth-accent to-transparent" />
      </motion.div>
    </section>
  );
}
