import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

interface CaseStudy {
  client: string;
  category: string;
  challenge: string;
  solution: string;
  outcome: string;
  date: string;
  logo?: string;
}

export default function CaseStudies() {
  const caseStudies: CaseStudy[] = [
    {
      client: 'Yasbin General Trading PLC',
      category: 'IFRS Revaluation',
      date: 'November 2025',
      challenge: 'Outdated asset bookkeeping failing to meet modern reporting standards.',
      solution: 'Comprehensive audit and revaluation of all PP&E.',
      outcome: 'Validated equity growth.'
    },
    {
      client: 'Fourabiyam Trading PLC',
      category: 'IFRS Revaluation',
      date: 'November 2025',
      challenge: 'Requirement for accurate asset appraisal for financial reporting compliance.',
      solution: 'Full-scale industrial and real estate asset valuation.',
      outcome: 'Regulatory alignment.'
    },
    {
      client: 'NOC Ethiopia Share Company',
      category: 'Share Capitalization',
      date: 'November 2024',
      challenge: 'Complex share structures requiring definitive valuation.',
      solution: 'Rigorous business valuation and share pricing analysis.',
      outcome: 'Transparent equity.',
      logo: 'https://www.nocethiopia.com.et/images/logo.png'
    },
    {
      client: 'Midroc Ethiopia Share Company',
      category: 'Capitalization',
      date: 'November 2024',
      challenge: 'Strategic capitalization assessment for conglomerate operations.',
      solution: 'Enterprise-wide asset and equity valuation.',
      outcome: 'Market clarity.',
      logo: 'https://midrocinvestmentgroup.com/static/media/logo.80b8d5a2.png'
    },
    {
      client: 'Arbaminch University',
      category: 'Court Case Valuation',
      date: 'May 2023',
      challenge: 'High-stakes court litigation involving disputed assets.',
      solution: 'Forensic valuation of university infrastructure.',
      outcome: 'Definitive ruling.',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/52/Arba_Minch_University_logo.png'
    },
    {
      client: 'Dagim Kennedy General Trading',
      category: 'IFRS Revaluation',
      date: 'December 2024',
      challenge: 'Ensuring financial statements reflect fair market value.',
      solution: 'Detailed asset auditing and market-based revaluation.',
      outcome: 'Reporting accuracy.'
    },
    {
      client: 'Nigat Engineering & Trading',
      category: 'IFRS Revaluation',
      date: 'September 2024',
      challenge: 'Transitioning to international financial reporting standards.',
      solution: 'Full technical audit of engineering and plant assets.',
      outcome: 'IFRS Compliance.'
    },
    {
      client: 'Albinhab Import Export',
      category: 'Capitalization',
      date: 'November 2025',
      challenge: 'Consolidating asset base for institutional growth.',
      solution: 'Valuation of logistics and trade-related physical assets.',
      outcome: 'Strategic readiness.'
    },
    {
      client: 'Biniyam Abebe Import Export',
      category: 'IFRS Revaluation',
      date: 'November 2025',
      challenge: 'Precision requirements for cross-border trade assets.',
      solution: 'Accredited valuation of specialized transport and storage.',
      outcome: 'Asset transparency.'
    }
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % caseStudies.length);
  const prev = () => setIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);

  return (
    <section id="case-studies" className="py-24 md:py-40 bg-earth-beige/20 dark:bg-earth-stone transition-colors duration-500 border-b border-earth-graphite/5 dark:border-white/5 overflow-hidden">
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
          
          <div className="flex gap-4 mb-4">
            <button 
              onClick={prev}
              className="w-16 h-16 border border-earth-graphite/10 dark:border-white/10 flex items-center justify-center text-earth-graphite dark:text-earth-beige hover:border-earth-accent hover:text-earth-accent transition-all duration-300 rounded-sm"
              aria-label="Previous Case"
            >
              <ArrowLeft strokeWidth={1} />
            </button>
            <button 
              onClick={next}
              className="w-16 h-16 border border-earth-graphite/10 dark:border-white/10 flex items-center justify-center text-earth-graphite dark:text-earth-beige hover:border-earth-accent hover:text-earth-accent transition-all duration-300 rounded-sm"
              aria-label="Next Case"
            >
              <ArrowRight strokeWidth={1} />
            </button>
          </div>
        </div>

        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-earth-graphite/5 dark:bg-white/5"
            >
              <div className="bg-earth-white dark:bg-earth-graphite/10 p-12 lg:p-16 flex flex-col h-full group">
                <div className="flex justify-between items-start mb-16">
                  <div className="flex items-center gap-4">
                    {caseStudies[index].logo ? (
                      <div className="w-14 h-14 bg-earth-beige/30 dark:bg-earth-stone/50 p-2 flex items-center justify-center rounded-sm">
                        <img 
                          src={caseStudies[index].logo} 
                          alt={caseStudies[index].client}
                          className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 bg-earth-beige/50 dark:bg-earth-stone/50 flex items-center justify-center text-earth-accent rounded-sm italic font-serif text-xl border border-earth-graphite/5 transition-all group-hover:border-earth-accent">
                        {caseStudies[index].client.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-earth-accent block mb-2">{caseStudies[index].category}</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-earth-graphite/40 dark:text-earth-beige/30 font-sans">{caseStudies[index].date}</span>
                  </div>
                </div>

                <h3 className="text-4xl md:text-5xl font-serif text-earth-graphite dark:text-earth-beige mb-12 italic leading-tight">
                  {caseStudies[index].client}
                </h3>

                <div className="space-y-12 flex-1">
                  <div>
                    <h4 className="text-[9px] uppercase tracking-[0.5em] text-earth-accent font-bold mb-4 opacity-70 italic">The Challenge</h4>
                    <p className="text-lg text-earth-graphite/60 dark:text-earth-beige/50 font-sans leading-relaxed font-light">
                      {caseStudies[index].challenge}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-earth-white dark:bg-earth-graphite/20 p-12 lg:p-16 flex flex-col h-full border-l border-earth-graphite/5 dark:border-white/5">
                <div className="space-y-12 flex-1 pt-16">
                  <div>
                    <h4 className="text-[9px] uppercase tracking-[0.5em] text-earth-accent font-bold mb-4 opacity-70 italic">Strategic Execution</h4>
                    <p className="text-lg text-earth-graphite dark:text-earth-beige font-sans leading-relaxed italic border-l-2 border-earth-accent/20 pl-8 font-light">
                      {caseStudies[index].solution}
                    </p>
                  </div>
                  
                  <div className="pt-12 border-t border-earth-graphite/5 dark:border-white/5 flex justify-between items-end">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.5em] text-earth-graphite/30 dark:text-earth-beige/20 font-bold mb-4">Certified Outcome</h4>
                      <p className="text-3xl text-earth-graphite dark:text-earth-beige font-serif italic leading-none">
                        {caseStudies[index].outcome}
                      </p>
                    </div>
                    <ArrowUpRight className="w-12 h-12 text-earth-accent opacity-30" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="mt-12 flex items-center justify-center gap-2">
            {caseStudies.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1 transition-all duration-500 rounded-full ${i === index ? 'w-12 bg-earth-accent' : 'w-2 bg-earth-graphite/10 dark:bg-white/10'}`}
                aria-label={`Go to case ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
