import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { label: 'Programs', href: '#programs' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'Membership', href: '#membership' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-ink/90 backdrop-blur-md border-b border-ash-200'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="max-w-edge mx-auto px-5 sm:px-8 lg:px-12 h-16 lg:h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group">
            <span className="font-display text-bone text-2xl lg:text-3xl tracking-tight leading-none">
              GRAVITY
            </span>
            <span className="font-display text-blood text-2xl lg:text-3xl leading-none">/</span>
            <span className="font-display text-bone text-2xl lg:text-3xl tracking-tight leading-none">
              FITNESS
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-grotesk font-medium uppercase tracking-widest text-bone/70 hover:text-bone transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center bg-blood text-bone px-5 py-2.5 text-xs font-grotesk font-bold uppercase tracking-widest rounded-[2px] hover:bg-bone hover:text-ink transition-all duration-200 active:scale-95"
            >
              Start Training
            </a>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-bone p-1"
              aria-label="Open menu"
            >
              <Menu size={24} strokeWidth={2} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-ink lg:hidden"
          >
            <div className="flex items-center justify-between h-16 px-5 border-b border-ash-200">
              <span className="font-display text-2xl tracking-tight">
                GRAVITY <span className="text-blood">/</span> FITNESS
              </span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-bone">
                <X size={28} strokeWidth={2} />
              </button>
            </div>
            <div className="flex flex-col px-5 pt-8 gap-1">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="font-display text-5xl tracking-tight py-4 border-b border-ash-100 text-bone hover:text-blood transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-8 bg-blood text-bone px-6 py-4 text-center text-sm font-grotesk font-bold uppercase tracking-widest rounded-[2px]"
              >
                Start Training
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
