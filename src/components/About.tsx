import { motion } from 'motion/react';

export default function About() {
  const values = [
    { title: 'Integrity', desc: 'Upholding absolute transparency and ethical rigor.' },
    { title: 'Excellence', desc: 'Highest standards of quality and technical precision.' },
    { title: 'Objectivity', desc: 'Independent valuations free from conflicts of interest.' },
    { title: 'Respect', desc: 'Honoring human dignity in all professional interactions.' },
    { title: 'Centricity', desc: 'Client satisfaction as our primary measure of success.' },
  ];

  const registrations = [
    { label: 'Trade Registration', value: 'BL/AA/2/0043265/2016' },
    { label: 'Trade License', value: 'BL/AA/14/673/4807645/2016' },
    { label: 'Tax ID (TIN)', value: '0088070938' },
  ];

  return (
    <section id="about" className="py-24 md:py-40 bg-earth-white dark:bg-earth-stone transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-earth-accent" />
              <span className="text-[9px] uppercase tracking-[0.5em] font-sans font-bold text-earth-accent">
                Executive Overview
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-serif text-earth-graphite dark:text-earth-beige mb-12 leading-tight text-balance">
              Strategic <br/> 
              <span className="italic font-light text-earth-accent">Financial Empowering.</span>
            </h2>
            
            <div className="space-y-8 font-sans text-earth-graphite/60 dark:text-earth-beige/50 leading-relaxed text-lg font-light mb-16">
              <p>
                Almeknun Asset Valuation and Consultancy PLC stands as a beacon of excellence in the Ethiopian valuation landscape. Our firm bridges the critical gap between tangible assets and their accurate reflection in financial statements.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-earth-graphite/5 dark:border-white/5">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-earth-accent mb-4 italic">Our Vision</h3>
                  <p className="text-sm font-light italic leading-relaxed">
                    To become the undisputed leader in the East African consultancy industry by setting the benchmark for excellence in asset valuation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-earth-accent mb-4 italic">Our Mission</h3>
                  <p className="text-sm font-light italic leading-relaxed">
                    To deliver quality, reliable, and up-to-date valuation services for all asset classes to clients across Ethiopia and beyond.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 border-y border-earth-graphite/5 dark:border-white/5 py-12">
              {values.map((v) => (
                <div key={v.title} className="flex flex-col">
                  <div className="text-earth-accent font-serif italic text-lg mb-2">{v.title}</div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-earth-graphite/40 dark:text-earth-beige/30 leading-tight">{v.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-12 space-y-12"
          >
            <div className="aspect-[16/10] bg-earth-beige dark:bg-earth-stone relative p-4 border border-earth-graphite/5 dark:border-white/5 overflow-hidden group rounded-sm shadow-xl shadow-earth-stone/5">
               <img 
                 src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" 
                 alt="Corporate Excellence"
                 className="w-full h-full object-cover grayscale opacity-60 dark:opacity-40 group-hover:scale-105 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-earth-accent/5 dark:bg-transparent" />
            </div>

            <div className="p-10 bg-earth-beige/20 dark:bg-earth-graphite/10 border border-earth-graphite/5 dark:border-white/5 rounded-sm">
              <h4 className="text-[9px] uppercase tracking-[0.5em] font-sans font-bold text-earth-graphite/40 dark:text-earth-beige/30 mb-8 border-b border-earth-graphite/5 pb-4">
                Institutional Credentials
              </h4>
              <div className="space-y-6">
                {registrations.map(reg => (
                  <div key={reg.label} className="flex justify-between items-center group">
                    <span className="text-[10px] uppercase tracking-widest text-earth-graphite/60 dark:text-earth-beige/40 italic">{reg.label}</span>
                    <span className="text-[11px] font-mono font-medium text-earth-accent">{reg.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
