import { motion } from 'motion/react';
import { User, ShieldCheck, Cpu, Cog } from 'lucide-react';

interface Member {
  name: string;
  position: string;
  qualifications: string;
  icon: any;
}

export default function Team() {
  const team: Member[] = [
    {
      name: 'Ato Alemayehu Gebre',
      position: 'General Manager & Lead Valuator',
      qualifications: 'BSc Civil Engineering, BSc Industrial Engineering. 15+ years experience at PPESA, Ministry of Trade and Industry.',
      icon: ShieldCheck
    },
    {
      name: 'Ato Biniyam Yiheyis',
      position: 'Co-Founder & Senior Valuator',
      qualifications: 'BSc Management (Addis Ababa University). 12+ years experience in business and asset valuation.',
      icon: User
    },
    {
      name: 'Ato Biruk G/Michael',
      position: 'Co-Founder & Electrical Engineer',
      qualifications: 'Registered Electro-Mechanical & Electrical Engineer. 11+ years of specialized technical experience.',
      icon: Cpu
    },
    {
      name: 'Ato Temesgen Belete',
      position: 'Mechanical Expert',
      qualifications: 'BSc Mechanical Engineering. 15+ years experience in heavy equipment and project management.',
      icon: Cog
    }
  ];

  return (
    <section id="team" className="py-24 md:py-40 bg-earth-white dark:bg-earth-stone transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-earth-accent" />
              <span className="text-[9px] uppercase tracking-[0.5em] font-sans font-bold text-earth-accent">
                Core Leadership
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-earth-graphite dark:text-earth-beige mb-8 leading-tight">
              A Consortium of <br/> 
              <span className="italic font-light text-earth-accent">Seasoned Experts.</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-earth-graphite/40 dark:text-earth-beige/30 font-medium uppercase tracking-[0.3em] max-w-sm mb-4 leading-relaxed italic">
            Decades of collective experience in the Ethiopian valuation landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-earth-graphite/5 dark:bg-white/5 border border-earth-graphite/5 dark:border-white/5">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="bg-earth-white dark:bg-earth-stone p-10 flex flex-col group hover:bg-earth-beige/20 dark:hover:bg-earth-beige/5 transition-all duration-500"
            >
              <div className="w-12 h-12 bg-earth-beige/50 dark:bg-earth-graphite/50 flex items-center justify-center text-earth-accent mb-10 group-hover:bg-earth-accent group-hover:text-white transition-all rounded-full">
                <member.icon size={20} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-serif text-earth-graphite dark:text-earth-beige mb-2 italic">
                {member.name}
              </h3>
              <p className="text-[10px] uppercase tracking-widest font-bold text-earth-accent mb-6">
                {member.position}
              </p>
              
              <p className="text-[12px] text-earth-graphite/60 dark:text-earth-beige/40 font-sans leading-relaxed font-light">
                {member.qualifications}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-earth-beige/30 dark:bg-earth-graphite/10 border border-earth-graphite/5 dark:border-white/5 text-center rounded-sm">
           <p className="text-xs text-earth-graphite/50 dark:text-earth-beige/50 font-sans tracking-wide">
             Almeknun also maintains an extensive network of **Associate Consultants** in Banking, Economics, and Forensic Accounting.
           </p>
        </div>
      </div>
    </section>
  );
}
