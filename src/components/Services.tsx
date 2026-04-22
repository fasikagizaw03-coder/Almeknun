import { motion } from 'motion/react';
import { Building2, Factory, Landmark, LineChart, Cpu, FileCheck, ArrowRight } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  link: string;
}

export default function Services() {
  const services: Service[] = [
    {
      id: 'real-estate',
      title: 'Commercial & Residential Real Estate',
      description: 'Comprehensive valuation for high-rise commercial buildings, residential complexes, and large-scale urban plots adhering to IVS standards.',
      icon: Building2,
      link: '#expertise'
    },
    {
      id: 'industrial',
      title: 'Industrial Plant & Machinery',
      description: 'Technically rigorous auditing of manufacturing lines, factory equipment, and specialized heavy machinery for fiscal transparency.',
      icon: Factory,
      link: '#expertise'
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure & Utilities',
      description: 'Public sector asset registries, utility grid valuations, and civil engineering project audits for government share companies.',
      icon: Landmark,
      link: '#case-studies'
    },
    {
      id: 'business',
      title: 'Business Enterprise & Equity',
      description: 'Strategic share pricing, merger and acquisition scoping, and complete business enterprise value (BEV) assessments.',
      icon: LineChart,
      link: '#expertise'
    },
    {
      id: 'it-assets',
      title: 'IT & Technical Assets',
      description: 'Valuation of server infrastructures, specialized software systems, and high-tech digital enterprise assets.',
      icon: Cpu,
      link: '#expertise'
    },
    {
      id: 'intangibles',
      title: 'Intangible Assets & IP',
      description: 'Monetizing goodwill, brand equity, intellectual property, and proprietary technical processes for financial reporting.',
      icon: FileCheck,
      link: '#case-studies'
    }
  ];

  return (
    <section id="services" className="py-24 md:py-40 bg-earth-beige/20 dark:bg-earth-stone transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 text-balance">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-earth-accent" />
              <span className="text-[9px] uppercase tracking-[0.5em] font-sans font-bold text-earth-accent">
                Core Offerings
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-earth-graphite dark:text-earth-beige mb-8 leading-tight">
              Definitive <br/> 
              <span className="italic font-light text-earth-accent">Valuation Services.</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-earth-graphite/40 dark:text-earth-beige/30 font-medium uppercase tracking-[0.3em] max-w-sm mb-4 leading-relaxed italic">
            Tailored technical audit services designed for institutional integrity and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-earth-white dark:bg-earth-graphite/10 p-10 lg:p-12 border border-earth-graphite/5 dark:border-white/5 hover:border-earth-accent/30 transition-all duration-700 rounded-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-earth-beige/50 dark:bg-earth-stone/50 flex items-center justify-center text-earth-accent mb-10 group-hover:bg-earth-accent group-hover:text-white transition-all duration-500 rounded-sm">
                  <service.icon size={28} strokeWidth={1} />
                </div>
                
                <h3 className="text-2xl font-serif text-earth-graphite dark:text-earth-beige mb-6 italic leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-[13px] text-earth-graphite/50 dark:text-earth-beige/40 leading-relaxed font-sans font-light mb-8">
                  {service.description}
                </p>
              </div>

              <a 
                href={service.link}
                className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-earth-accent hover:text-earth-accent-light transition-colors group/link"
              >
                <span>View Details</span>
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
