import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* Background image with grayscale + contrast */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Black and white gym action shot, dramatic lighting, chalk dust in the air"
          className="w-full h-full object-cover object-center grayscale contrast-125 brightness-75"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-edge mx-auto px-5 sm:px-8 lg:px-12 flex flex-col justify-end pb-20 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="block w-12 h-[2px] bg-blood" />
          <span className="text-xs font-grotesk font-medium uppercase tracking-widest text-bone/80">
            Patna's Hardcore Strength Gym · Est. 2013
          </span>
        </motion.div>

        <h1 className="font-display uppercase leading-[0.85] tracking-tightest">
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[16vw] sm:text-[14vw] lg:text-[11vw] xl:text-[160px] text-bone"
          >
            Train Like
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[16vw] sm:text-[14vw] lg:text-[11vw] xl:text-[160px] text-blood"
          >
            It Matters
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <p className="max-w-md text-base sm:text-lg font-grotesk text-bone/70 leading-relaxed">
            No mirrors. No music videos. Just iron, chalk, and the sound of plates
            hitting the floor. This is where Patna's strongest come to get stronger.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#membership"
              className="bg-blood text-bone px-8 py-4 text-sm font-grotesk font-bold uppercase tracking-widest rounded-[3px] hover:bg-bone hover:text-ink transition-all duration-200 active:scale-95"
            >
              Start Training
            </a>
            <a
              href="#programs"
              className="text-bone/80 px-6 py-4 text-sm font-grotesk font-bold uppercase tracking-widest border border-ash-300 rounded-[3px] hover:border-bone hover:text-bone transition-all duration-200"
            >
              Programs
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-bone/50"
      >
        <span className="text-[10px] font-grotesk uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
