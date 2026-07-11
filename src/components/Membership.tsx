import { Reveal } from './Reveal';
import { Check } from 'lucide-react';

const TIERS = [
  {
    name: 'Basic',
    price: '1,500',
    period: '/month',
    desc: 'Full access to the floor. Train on your own terms.',
    features: [
      '24/7 keycard gym access',
      'All equipment & racks',
      'Locker room & showers',
      'No coaching included',
    ],
    popular: false,
    cta: 'Get Basic',
  },
  {
    name: 'Pro',
    price: '3,500',
    period: '/month',
    desc: 'Open gym plus structured programming and class access.',
    features: [
      'Everything in Basic',
      'Powerlifting Club sessions',
      'Strength & Conditioning classes',
      'Monthly programming sheet',
      'Body composition check',
    ],
    popular: true,
    cta: 'Get Pro',
  },
  {
    name: 'Elite',
    price: '6,500',
    period: '/month',
    desc: 'Personal coaching, meet prep, and full individualised programming.',
    features: [
      'Everything in Pro',
      '2 personal coaching sessions/week',
      'Individualised periodised program',
      'Meet day prep & handling',
      'Priority rack reservation',
      'Nutrition guidance',
    ],
    popular: false,
    cta: 'Get Elite',
  },
];

export function Membership() {
  return (
    <section id="membership" className="relative bg-ink py-24 lg:py-36 border-t border-ash-200">
      <div className="max-w-edge mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-12 h-[2px] bg-blood" />
            <span className="text-xs font-grotesk font-medium uppercase tracking-widest text-bone/60">
              Membership
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display uppercase text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-bone leading-[0.85] tracking-tightest mb-16">
            Pick Your<br />
            <span className="text-stroke-bone">Level</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.1}>
              <article
                className={`relative h-full p-8 lg:p-10 flex flex-col ${
                  tier.popular
                    ? 'bg-blood text-bone lg:scale-[1.03] lg:z-10 lg:shadow-2xl'
                    : 'bg-ash-50 text-bone border-t border-b border-l border-r border-ash-200'
                } ${i === 0 ? 'lg:border-r-0' : ''} ${i === 2 ? 'lg:border-l-0' : ''}`}
              >
                {tier.popular && (
                  <span className="absolute top-0 right-0 bg-ink text-bone text-[10px] font-grotesk font-bold uppercase tracking-widest px-4 py-2 rounded-bl-[2px]">
                    Most Popular
                  </span>
                )}

                <h3
                  className={`font-display uppercase text-4xl lg:text-5xl tracking-tight leading-none ${
                    tier.popular ? 'text-bone' : 'text-bone'
                  }`}
                >
                  {tier.name}
                </h3>

                <p
                  className={`mt-3 text-sm font-grotesk leading-relaxed ${
                    tier.popular ? 'text-bone/80' : 'text-bone/50'
                  }`}
                >
                  {tier.desc}
                </p>

                <div className="mt-8 mb-8 flex items-baseline gap-1">
                  <span className="text-xs font-grotesk font-medium text-bone/60">₹</span>
                  <span className="font-display text-6xl lg:text-7xl tracking-tight leading-none">
                    {tier.price}
                  </span>
                  <span
                    className={`text-sm font-grotesk ${
                      tier.popular ? 'text-bone/80' : 'text-bone/50'
                    }`}
                  >
                    {tier.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-10 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={16}
                        strokeWidth={2.5}
                        className={`mt-0.5 shrink-0 ${
                          tier.popular ? 'text-bone' : 'text-blood'
                        }`}
                      />
                      <span
                        className={`text-sm font-grotesk ${
                          tier.popular ? 'text-bone/90' : 'text-bone/70'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block text-center py-4 text-sm font-grotesk font-bold uppercase tracking-widest rounded-[2px] transition-all duration-200 active:scale-95 ${
                    tier.popular
                      ? 'bg-ink text-bone hover:bg-bone hover:text-ink'
                      : 'bg-bone text-ink hover:bg-blood hover:text-bone'
                  }`}
                >
                  {tier.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-center text-xs font-grotesk text-bone/40">
            All prices in INR. No joining fee. First session free. Cancel anytime —
            no lock-in contracts.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
