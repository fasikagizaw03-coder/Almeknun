import { motion } from 'motion/react';

export default function Clients() {
  const clients = [
    { name: "NOC Ethiopia", logo: "https://www.nocethiopia.com.et/images/logo.png" },
    { name: "Midroc Ethiopia", logo: "https://midrocinvestmentgroup.com/static/media/logo.80b8d5a2.png" },
    { name: "Arba Minch University", logo: "https://upload.wikimedia.org/wikipedia/en/5/52/Arba_Minch_University_logo.png" },
    { name: "Yasbin General Trading", logo: null },
    { name: "Fourabiyam Trading", logo: null },
    { name: "Nigat Engineering", logo: null },
    { name: "Dagim Kennedy", logo: null },
    { name: "Albinhab Import Export", logo: null },
    { name: "Biniyam Abebe Import", logo: null }
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
          className="flex whitespace-nowrap gap-24 md:gap-40 items-center"
          animate={{ x: [0, -2000] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {doubledClients.map((client, i) => (
            <div key={i} className="flex items-center gap-6 group">
              {client.logo ? (
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="h-8 md:h-12 w-auto grayscale brightness-0 dark:brightness-0 dark:invert opacity-20 group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-100 dark:group-hover:invert-0 transition-all duration-700 object-contain"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-earth-graphite/10 dark:border-white/10 flex items-center justify-center text-[10px] font-bold text-earth-graphite/20 dark:text-earth-beige/10 group-hover:border-earth-accent group-hover:text-earth-accent transition-all">
                  {client.name.charAt(0)}
                </div>
              )}
              <span 
                className="text-lg md:text-2xl font-serif text-earth-graphite/30 dark:text-earth-beige/20 group-hover:text-earth-accent dark:hover:text-earth-accent-light transition-colors cursor-default tracking-[0.1em] italic font-light"
              >
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
