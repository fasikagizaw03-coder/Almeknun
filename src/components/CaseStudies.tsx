import { motion } from 'motion/react';
import { Briefcase, ArrowUpRight } from 'lucide-react';

interface CaseStudy {
  client: string;
  challenge: string;
  solution: string;
  outcome: string;
  category: string;
}

export default function CaseStudies() {
  const caseStudies: CaseStudy[] = [
    {
      client: 'Yasbin General Trading PLC',
      category: 'IFRS revaluation',
      challenge: 'Outdated asset bookkeeping failing to meet modern reporting standards.',
      solution: 'Comprehensive audit and revaluation of all PP&E.',
      outcome: '25% increase in recognized equity value.'
    },
    {
      client: 'NOC Ethiopia Share Company',
      category: 'Share Capitalization',
      challenge: 'Complex share structures requiring definitive valuation.',
      solution: 'Rigorous business valuation and share pricing analysis.',
      outcome: 'Transparent equity distribution for growth.'
    },
    {
      client: 'Arbaminch University',
      category: 'Litigation Support',
      challenge: 'High-stakes court litigation involving disputed assets.',
      solution: 'Forensic valuation of university infrastructure.',
      outcome: 'Definitive, court-accepted valuation ruling.'
    }
  ];

  return (
    <section id="case-studies" className="py-24 md:py-40 bg-earth-beige/20 dark:bg-earth-stone transition-colors duration-500 border-b border-earth-graphite/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-earth-accent" />
              <span className="text-[9px] uppercase tracking-[0.5em] font-sans font-bold text-earth-accent">
                Market Evidence
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-earth-graphite dark:text-earth-beige mb-12 leading-tight">
              Selected <br/> 
              <span className="italic font-light text-earth-accent">Audit Histories.</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-earth-graphite/40 dark:text-earth-beige/30 font-medium uppercase tracking-[0.3em] max-w-sm mb-4 leading-relaxed italic">
             Evidential results for Ethiopia's leading institutional enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-earth-white dark:bg-earth-graphite/10 p-12 hover:bg-earth-beige/30 dark:hover:bg-earth-beige/5 transition-all duration-500 flex flex-col h-full group rounded-sm"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-10 h-10 border border-earth-accent/20 flex items-center justify-center text-earth-accent rounded-full">
                  <Briefcase className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <span className="text-[8px] uppercase tracking-[0.35em] font-bold text-earth-accent/40 border border-earth-accent/10 px-3 py-1 italic rounded-full">
                  {study.category}
                </span>
              </div>

              <h3 className="text-2xl font-serif text-earth-graphite dark:text-earth-beige mb-10 group-hover:text-earth-accent transition-colors leading-tight italic font-light">
                {study.client}
              </h3>

              <div className="space-y-10 flex-1">
                <div>
                  <h4 className="text-[8px] uppercase tracking-[0.4em] text-earth-graphite/20 dark:text-earth-beige/20 font-bold mb-3">The Challenge</h4>
                  <p className="text-[13px] text-earth-graphite/60 dark:text-earth-beige/40 font-sans leading-relaxed font-light">
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-[8px] uppercase tracking-[0.4em] text-earth-graphite/20 dark:text-earth-beige/20 font-bold mb-3">Strategic Execution</h4>
                  <p className="text-[13px] text-earth-graphite/60 dark:text-earth-beige/40 font-sans leading-relaxed italic border-l border-earth-accent/20 pl-6 font-light">
                    {study.solution}
                  </p>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-earth-graphite/10 dark:border-white/5 flex justify-between items-end">
                <div>
                  <h4 className="text-[8px] uppercase tracking-[0.4em] text-earth-accent/60 font-bold mb-2">Metrics</h4>
                  <p className="text-lg text-earth-graphite dark:text-earth-beige font-serif italic">
                    {study.outcome}
                  </p>
                </div>
                <ArrowUpRight className="w-6 h-6 text-earth-accent opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
