import { motion } from 'motion/react';
import biniyamPhoto from '../team/biniyam.png';
import alexPhoto from '../team/biniyam.png';
import temesgenPhoto from '../team/biniyam.png';
import birukPhoto from '../team/biniyam.png';

interface Member {
  name: string;
  position: string;
  qualifications: string;
  image: string;
}

export default function Team() {
  const team: Member[] = [
    {
      name: 'Ato Alemayehu Gebre',
      position: 'General Manager & Lead Valuator',
      qualifications: 'BSc Civil Engineering, BSc Industrial Engineering. 15+ years experience at PPESA, Ministry of Trade and Industry.',
      image: alexPhoto
    },
    {
      name: 'Ato Biniyam Yiheyis',
      position: 'Co-Founder & Senior Valuator',
      qualifications: 'BSc Management (Addis Ababa University). 12+ years experience in business and asset valuation.',
      image: biniyamPhoto
    },
    {
      name: 'Ato Biruk G/Michael',
      position: 'Co-Founder & Electrical Engineer',
      qualifications: 'Registered Electro-Mechanical & Electrical Engineer. 11+ years of specialized technical experience.',
      image: birukPhoto
    },
    {
      name: 'Ato Temesgen Belete',
      position: 'Mechanical Expert',
      qualifications: 'BSc Mechanical Engineering. 15+ years experience in heavy equipment and project management.',
      image: temesgenPhoto
    }
  ];

  return (
    <section id="team" className="py-24 md:py-40 bg-earth-white dark:bg-earth-stone transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12 text-balance">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-earth-accent" />
              <span className="text-[9px] uppercase tracking-[0.5em] font-sans font-bold text-earth-accent">
                Core Leadership
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-earth-graphite dark:text-earth-beige mb-8 leading-tight text-balance">
              A Consortium of <br/> 
              <span className="italic font-light text-earth-accent">Seasoned Experts.</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-earth-graphite/40 dark:text-earth-beige/30 font-medium uppercase tracking-[0.3em] max-w-sm mb-4 leading-relaxed italic md:text-right">
            Decades of collective experience in the Ethiopian valuation landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group flex flex-col"
            >
              <div className="aspect-[4/5] mb-8 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-1000 bg-earth-beige relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-earth-accent/10 opacity-60 group-hover:opacity-0 transition-opacity duration-1000" />
              </div>
              
              <h3 className="text-2xl font-serif text-earth-graphite dark:text-earth-beige mb-2 italic leading-tight">
                {member.name}
              </h3>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-earth-accent mb-6 leading-tight">
                {member.position}
              </p>
              
              <p className="text-[13px] text-earth-graphite/50 dark:text-earth-beige/40 font-sans leading-relaxed font-light">
                {member.qualifications}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-10 bg-earth-beige/30 dark:bg-earth-graphite/10 border border-earth-graphite/5 dark:border-white/5 text-center rounded-sm">
           <p className="text-xs text-earth-graphite/50 dark:text-earth-beige/50 font-sans tracking-wide">
             Almeknun also maintains an extensive network of **Associate Consultants** in Banking, Economics, and Forensic Accounting.
           </p>
        </div>
      </div>
    </section>
  );
}
