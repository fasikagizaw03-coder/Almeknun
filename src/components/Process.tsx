import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    { title: 'Project Scoping', time: 'Phase 01', desc: 'Detailed definition of assets and specific audit parameters.' },
    { title: 'Intelligence Gathering', time: 'Phase 02', desc: 'On-site verification, physical inspection, and market handle.' },
    { title: 'Master Valuation', time: 'Phase 03', desc: 'Advanced financial modeling and IVSC compliance check.' },
    { title: 'Executive Review', time: 'Phase 04', desc: 'Internal multi-tier quality assurance and technical audit.' },
    { title: 'Final Reporting', time: 'Phase 05', desc: 'Delivery of defensible analysis and fiscal documentation.' },
  ];

  return (
    <section id="process" className="py-24 md:py-40 bg-earth-beige/30 dark:bg-earth-stone transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-px bg-earth-accent" />
          <span className="text-[9px] uppercase tracking-[0.5em] font-sans font-bold text-earth-accent">
            Engagement Model
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl font-serif text-earth-graphite dark:text-earth-beige mb-24 leading-tight">
          A Grounded <br/> 
          <span className="italic font-light text-earth-accent">System Flow.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-earth-white dark:bg-earth-graphite/10 border border-earth-graphite/5 dark:border-white/5 hover:bg-earth-accent/5 transition-colors group flex flex-col rounded-sm"
            >
              <div className="text-earth-accent font-serif italic text-xl mb-8 group-hover:-translate-y-1 transition-transform">{step.time}</div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-earth-graphite dark:text-earth-beige">{step.title}</h3>
              <p className="text-[12px] text-earth-graphite/40 dark:text-earth-beige/30 leading-relaxed font-sans group-hover:text-earth-graphite/60 dark:group-hover:text-earth-beige/50 transition-colors font-light">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
