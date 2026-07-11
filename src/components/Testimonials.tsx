import { Reveal } from './Reveal';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote:
      'I walked in unable to deadlift 100kg. Eighteen months later I pulled 227.5kg at the Bihar State Championships. Rajeev sir saw something in me I did not see in myself.',
    name: 'Aman Verma',
    detail: 'Member since 2022 · 227.5kg Deadlift PR',
    img: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      'This is not a gym where people stare at their phones between sets. Everyone here is working. The energy pushes you to load one more plate, every single time.',
    name: 'Sneha Rani',
    detail: 'Pro Member · 18 months training',
    img: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      'I tried three gyms in Patna before this one. The others had treadmills and mirrors. Gravity has racks, platforms, and coaches who actually know how to teach the lifts.',
    name: 'Deepak Kumar',
    detail: 'Elite Member · Squat 180kg / Bench 120kg',
    img: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      'After my knee surgery I thought I was done lifting. Priya built me back from the empty bar to a 140kg squat in ten months. The coaching here is on another level.',
    name: 'Rahul Anand',
    detail: 'Member since 2021 · Post-rehab comeback',
    img: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-ash-50 py-24 lg:py-36">
      <div className="max-w-edge mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-12 h-[2px] bg-blood" />
            <span className="text-xs font-grotesk font-medium uppercase tracking-widest text-bone/60">
              The Members
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display uppercase text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-bone leading-[0.85] tracking-tightest mb-16">
            What They<br />
            <span className="text-blood">Say</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.1}>
              <figure className="bg-ink border border-ash-200 p-8 lg:p-10 h-full flex flex-col">
                <Quote size={28} className="text-blood mb-6 shrink-0" strokeWidth={2} />
                <blockquote className="text-lg lg:text-xl font-grotesk text-bone/90 leading-relaxed flex-1">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-ash-200 flex items-center gap-4">
                  <img
                    src={t.img}
                    alt={`Black and white portrait of ${t.name}`}
                    className="w-12 h-12 object-cover rounded-full grayscale contrast-110 shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-display uppercase text-lg text-bone tracking-tight leading-none">
                      {t.name}
                    </div>
                    <div className="text-xs font-grotesk text-bone/50 mt-1">{t.detail}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
