import { motion } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Check initial theme preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialIsDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    
    if (initialIsDark) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Cases', href: '#case-studies' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-earth-white/95 dark:bg-earth-stone/95 backdrop-blur-md py-4 border-earth-graphite/5 dark:border-earth-beige/5 shadow-sm' 
          : 'bg-transparent py-8 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <span className="text-3xl font-serif tracking-[0.1em] font-light text-earth-graphite dark:text-earth-beige">
            ALMEKNUN
          </span>
          <span className="text-[9px] tracking-[0.3em] font-sans font-semibold uppercase mt-0.5 text-earth-accent">
            Asset Valuation
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="text-[10px] uppercase tracking-[0.25em] font-sans font-medium text-earth-graphite/60 dark:text-earth-beige/50 hover:text-earth-accent dark:hover:text-earth-accent-light transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          
          <div className="w-px h-4 bg-earth-graphite/10 dark:bg-earth-beige/10 mx-2" />

          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-earth-graphite/5 dark:hover:bg-earth-beige/5 transition-colors text-earth-graphite dark:text-earth-beige"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} strokeWidth={1.5} /> : <Moon size={18} strokeWidth={1.5} />}
          </button>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-8 py-3 bg-earth-accent dark:bg-earth-accent-light text-white dark:text-earth-stone text-[10px] font-bold uppercase tracking-[0.2em] hover:brightness-110 transition-all duration-300 rounded-sm"
          >
            Inquiry
          </motion.a>
        </div>

        {/* Mobile Nav Actions */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 text-earth-graphite dark:text-earth-beige"
          >
            {isDark ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
          </button>
          
          <button 
            className="p-2 text-earth-graphite dark:text-earth-beige"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="absolute top-full left-0 w-full bg-earth-beige dark:bg-earth-stone border-b border-earth-graphite/10 dark:border-earth-beige/10 py-10 px-6 md:hidden flex flex-col space-y-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-light uppercase tracking-[0.3em] text-earth-graphite/80 dark:text-earth-beige/80 border-b border-earth-graphite/5 dark:border-earth-beige/5 pb-4"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
