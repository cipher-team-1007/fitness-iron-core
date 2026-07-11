import { Reveal } from './Reveal';
import { Dumbbell, Zap, User, Building2 } from 'lucide-react';

const PROGRAMS = [
  {
    icon: Dumbbell,
    title: 'Powerlifting',
    desc: 'Squat, bench, deadlift. Periodised programming built around the big three, with peaking blocks for meet day. We coach the technique that moves the most weight safely.',
    img: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Competition Prep',
  },
  {
    icon: Zap,
    title: 'Strength & Conditioning',
    desc: 'Build raw power and work capacity. Heavy carries, sled drags, explosive lifts and conditioning circuits that translate to any sport or physical job.',
    img: 'https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Athlete Development',
  },
  {
    icon: User,
    title: 'Personal Coaching',
    desc: 'One-on-one sessions with a dedicated coach. Individualised programming, form correction, and accountability for lifters who want to fast-track their progress.',
    img: 'https://images.pexels.com/photos/6450204/pexels-photo-6450204.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: '1-on-1',
  },
  {
    icon: Building2,
    title: 'Open Gym',
    desc: 'Full access to the floor, racks, plates, and platforms. Come in, load the bar, and train on your own terms. 24/7 keycard access for members.',
    img: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: '24/7 Access',
  },
];

export function Programs() {
  return (
    <section id="programs" className="relative bg-ink py-24 lg:py-36">
      <div className="max-w-edge mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-12 h-[2px] bg-blood" />
            <span className="text-xs font-grotesk font-medium uppercase tracking-widest text-bone/60">
              What We Do
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display uppercase text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-bone leading-[0.85] tracking-tightest mb-16">
            Four Ways<br />
            <span className="text-stroke-bone">To Get Stronger</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ash-200">
          {PROGRAMS.map((program, i) => (
            <Reveal key={program.title} delay={i * 0.1}>
              <article className="group relative bg-ink overflow-hidden h-full">
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <img
                    src={program.img}
                    alt={`Black and white ${program.title} training action shot, dramatic lighting`}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent pointer-events-none" />
                  <span className="absolute top-4 left-4 text-[10px] font-grotesk font-bold uppercase tracking-widest text-bone bg-ink/60 backdrop-blur px-3 py-1.5 rounded-[2px] border border-ash-300">
                    {program.tag}
                  </span>
                </div>
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="flex items-center justify-center w-12 h-12 border border-ash-300 rounded-[2px] text-blood group-hover:bg-blood group-hover:text-bone group-hover:border-blood transition-all duration-300">
                      <program.icon size={22} strokeWidth={2} />
                    </span>
                    <h3 className="font-display uppercase text-3xl lg:text-4xl text-bone tracking-tight">
                      {program.title}
                    </h3>
                  </div>
                  <p className="text-sm lg:text-base font-grotesk text-bone/60 leading-relaxed max-w-md">
                    {program.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
