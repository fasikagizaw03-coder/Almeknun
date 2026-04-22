import { motion } from 'motion/react';
import { Search, TrendingUp, Calculator } from 'lucide-react';

export default function Methodology() {
  const approaches = [
    {
      title: 'Market Analysis',
      icon: Search,
      concept: 'COMPARATIVE CLARITY',
      methods: ['Direct Sales Comparison', 'Guideline Transaction', 'Market Multiples']
    },
    {
      title: 'Income Modeling',
      icon: TrendingUp,
      concept: 'FUTURISTIC INSIGHT',
      methods: ['Discounted Cash Flow (DCF)', 'Yield Capitalization', 'Profit Attribution']
    },
    {
      title: 'Cost Principles',
      icon: Calculator,
      concept: 'ASSET SUBSTANCE',
      methods: ['Replacement Cost New', 'Reproduction Cost', 'Depreciated Analysis']
    }
  ];

  return (
    <section id="methodology" className="py-24 md:py-40 bg-earth-white dark:bg-earth-stone transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-earth-accent" />
              <span className="text-[9px] uppercase tracking-[0.5em] font-sans font-bold text-earth-accent">
                Analytical Framework
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-earth-graphite dark:text-earth-beige mb-12 leading-tight">
              A Science of <br/> 
              <span className="italic font-light text-earth-accent">Absolute Value.</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-earth-graphite/40 dark:text-earth-beige/30 font-medium uppercase tracking-[0.3em] max-w-sm mb-4 leading-relaxed italic">
            Adhering to the IVSC benchmarks for globally defensible valuation outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {approaches.map((approach, i) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group"
            >
              <div className="bg-earth-beige dark:bg-earth-graphite/10 p-12 lg:p-16 border border-earth-graphite/5 dark:border-white/5 group-hover:border-earth-accent/30 transition-all duration-700 rounded-sm">
                <div className="flex justify-between items-start mb-12">
                   <approach.icon className="w-8 h-8 text-earth-accent" strokeWidth={1} />
                   <div className="text-[8px] font-sans font-bold tracking-[0.4em] text-earth-accent/40 group-hover:text-earth-accent transition-colors uppercase italic">
                      {approach.concept}
                   </div>
                </div>
                
                <h3 className="text-2xl font-serif text-earth-graphite dark:text-earth-beige mb-8 italic">{approach.title}</h3>
                
                <div className="space-y-6 pt-10 border-t border-earth-graphite/10 dark:border-white/5">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-earth-graphite/30 dark:text-earth-beige/20 font-bold block">Technical Procedures</span>
                  <ul className="space-y-4">
                    {approach.methods.map((m) => (
                      <li key={m} className="flex items-center gap-4 text-xs text-earth-graphite/60 dark:text-earth-beige/40 font-sans tracking-wide group-hover:text-earth-graphite dark:group-hover:text-earth-beige transition-colors">
                        <div className="w-1 h-1 rounded-full bg-earth-accent/40 group-hover:scale-125 transition-transform" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
