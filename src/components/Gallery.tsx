import { Reveal } from './Reveal';

const IMAGES = [
  {
    src: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Black and white gym floor with power racks, dramatic lighting, chalk dust in the air',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=700',
    alt: 'Black and white close-up of loaded barbell with chalk, dramatic lighting',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=700',
    alt: 'Black and white deadlift action shot, dramatic lighting, chalk dust in the air',
    span: '',
  },
  {
    src: '/dumbbell-rack.png',
    alt: 'Black and white dumbbell rack, dramatic lighting',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1638324/pexels-photo-1638324.jpeg?auto=compress&cs=tinysrgb&w=700',
    alt: 'Black and white gym interior with heavy equipment, dramatic lighting',
    span: '',
  }
];

export function Gallery() {
  return (
    <section className="relative bg-ink py-24 lg:py-36">
      <div className="max-w-edge mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-12 h-[2px] bg-blood" />
                <span className="text-xs font-grotesk font-medium uppercase tracking-widest text-bone/60">
                  The Facility
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display uppercase text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-bone leading-[0.85] tracking-tightest">
                The Gym<br />
                <span className="text-stroke-bone">Floor</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-sm lg:text-base font-grotesk text-bone/60 leading-relaxed">
              4,000 sq ft of competition-grade equipment. Eight power racks, twelve
              barbells, a deadlift platform, and more plates than you can load in a session.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] lg:auto-rows-[280px] gap-3 lg:gap-4">
          {IMAGES.map((img, i) => (
            <Reveal key={i} delay={(i % 4) * 0.08} className={img.span}>
              <div className={`group relative overflow-hidden bg-ash-100 h-full ${img.span}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover grayscale contrast-120 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/0 transition-colors duration-500 pointer-events-none" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
