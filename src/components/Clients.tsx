import { motion } from 'motion/react';

export default function Clients() {
  const clients = [
    "Yasbin General Trading",
    "NOC Ethiopia",
    "Midroc Ethiopia",
    "Arbaminch University",
    "Fourabiyam Trading",
    "Nigat Engineering",
    "Dagim Kennedy",
    "Albinhab Import Export",
    "Biniyam Abebe Import"
  ];

  const doubledClients = [...clients, ...clients];

  return (
    <section className="py-20 bg-earth-beige/30 dark:bg-earth-stone/50 border-y border-earth-graphite/5 dark:border-earth-beige/5 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-center justify-between opacity-50">
        <span className="text-[9px] uppercase tracking-[0.5em] font-sans font-bold text-earth-graphite dark:text-earth-beige">Institutional Partners</span>
        <div className="flex gap-3">
          <div className="w-1 h-1 rounded-full bg-earth-accent/30" />
          <div className="w-1 h-1 rounded-full bg-earth-accent" />
          <div className="w-1 h-1 rounded-full bg-earth-accent/30" />
        </div>
      </div>
      
      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap gap-16 md:gap-32 items-center"
          animate={{ x: [0, -1200] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          {doubledClients.map((client, i) => (
            <span 
              key={i} 
              className="text-xl md:text-3xl font-serif text-earth-graphite/30 dark:text-earth-beige/20 hover:text-earth-accent dark:hover:text-earth-accent-light transition-colors cursor-default tracking-[0.1em] italic font-light"
            >
              {client}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
