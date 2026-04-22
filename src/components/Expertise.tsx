import { motion } from 'motion/react';
import { Home, Factory, Landmark, Briefcase, Settings, Database } from 'lucide-react';

export default function Expertise() {
  const assets = [
    { title: 'Real Estate & Property', icon: Home, desc: 'Urban & rural land, residential, commercial complexes, and industrial warehouses.' },
    { title: 'Plant & Machinery', icon: Factory, desc: 'Production lines, industrial plants, heavy equipment, and fleet assets.' },
    { title: 'Infrastructure & Civil Works', icon: Landmark, desc: 'Roads, bridges, dams, utility networks, and airport/port technical facilities.' },
    { title: 'Agricultural Resources', icon: Briefcase, desc: 'Plantations, standing crops, livestock, aquaculture, and forestry resources.' },
    { title: 'Business & Intangibles', icon: Settings, desc: 'Going concern valuations, goodwill, trademarks, patents, and proprietary tech.' },
    { title: 'Financial & Specialized', icon: Database, desc: 'Investment properties, easeholds, easements, and environmental assets.' },
  ];

  return (
    <section id="expertise" className="py-24 md:py-40 bg-earth-beige/10 dark:bg-earth-stone transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 text-balance">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-earth-accent" />
              <span className="text-[9px] uppercase tracking-[0.5em] font-sans font-bold text-earth-accent">
                Scope of Mastery
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-earth-graphite dark:text-earth-beige mb-8 leading-tight">
              Institutional <br/> 
              <span className="italic font-light text-earth-accent">Domain Spectrum.</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-earth-graphite/40 dark:text-earth-beige/30 font-medium uppercase tracking-[0.3em] max-w-sm mb-4 leading-relaxed italic">
            Certified technical auditing across the 6 major economic asset classes of Ethiopia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-earth-graphite/5 dark:bg-white/5 border border-earth-graphite/5 dark:border-white/5">
          {assets.map((asset, i) => (
            <motion.div
              key={asset.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-earth-white dark:bg-earth-stone p-12 hover:bg-earth-beige/50 dark:hover:bg-earth-beige/5 transition-all duration-500 group"
            >
              <div className="w-12 h-12 bg-earth-beige dark:bg-earth-graphite/50 flex items-center justify-center text-earth-accent mb-10 group-hover:bg-earth-accent group-hover:text-white transition-all rounded-sm">
                <asset.icon className="w-5 h-5" strokeWidth={1} />
              </div>
              
              <h3 className="text-2xl font-serif text-earth-graphite dark:text-earth-beige mb-6 italic">{asset.title}</h3>
              <p className="text-sm text-earth-graphite/50 dark:text-earth-beige/40 leading-relaxed font-sans font-light">
                {asset.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
