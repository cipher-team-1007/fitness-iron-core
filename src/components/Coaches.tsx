import { Reveal } from './Reveal';

const COACHES = [
  {
    name: 'Rajeev Ranjan',
    specialty: 'Head Coach · Powerlifting',
    certs: 'SFI Level 3 Powerlifting Coach · National Referee',
    bio: 'Coached 3 national-level powerlifters. 20+ years under the bar. Squats 300kg.',
    img: 'https://images.pexels.com/photos/7030121/pexels-photo-7030121.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    name: 'Imran Sheikh',
    specialty: 'Strength & Conditioning',
    certs: 'NSCA Certified Strength & Conditioning Specialist',
    bio: 'Former state-level wrestler. Builds athletes who can move weight and move people.',
    img: 'https://images.pexels.com/photos/6974817/pexels-photo-6974817.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    name: 'Priya Kumari',
    specialty: 'Personal Coaching · Hypertrophy',
    certs: 'ACE Certified Personal Trainer · Precision Nutrition L1',
    bio: 'State bench press record holder (63kg class). Specialises in technique and muscle building.',
    img: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    name: 'Vikram Singh',
    specialty: 'Strongman · Conditioning',
    certs: 'Iron Athlete Certified · Kettlebell Specialist',
    bio: 'Carries yokes, flips tyres, and makes sure you can too. If it is heavy, he will make you move it.',
    img: 'https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
];

export function Coaches() {
  return (
    <section id="coaches" className="relative bg-ash-50 py-24 lg:py-36">
      <div className="max-w-edge mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-12 h-[2px] bg-blood" />
            <span className="text-xs font-grotesk font-medium uppercase tracking-widest text-bone/60">
              The Coaches
            </span>
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <Reveal delay={0.1}>
            <h2 className="font-display uppercase text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-bone leading-[0.85] tracking-tightest">
              Built By<br />
              <span className="text-blood">Coaches Who Lift</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-sm lg:text-base font-grotesk text-bone/60 leading-relaxed">
              Our coaches are not Instagram models. They are certified, competing,
              and have moved serious weight themselves. They coach because they love the iron.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {COACHES.map((coach, i) => (
            <Reveal key={coach.name} delay={i * 0.1}>
              <article className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-ash-100 mb-5">
                  <img
                    src={coach.img}
                    alt={`Black and white portrait of ${coach.name}, ${coach.specialty}`}
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-[10px] font-grotesk font-bold uppercase tracking-widest text-blood bg-ink/80 backdrop-blur px-2.5 py-1 rounded-[2px]">
                      {coach.specialty}
                    </span>
                  </div>
                </div>
                <h3 className="font-display uppercase text-2xl lg:text-3xl text-bone tracking-tight leading-none">
                  {coach.name}
                </h3>
                <p className="mt-2 text-xs font-grotesk text-bone/50 leading-relaxed">
                  {coach.certs}
                </p>
                <p className="mt-3 text-sm font-grotesk text-bone/70 leading-relaxed">
                  {coach.bio}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
