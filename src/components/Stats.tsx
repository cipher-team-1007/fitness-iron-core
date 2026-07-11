import { useCountUp } from '../hooks/useCountUp';

const STATS = [
  { end: 500, suffix: '+', label: 'Members Trained' },
  { end: 12, suffix: '', label: 'Years Open' },
  { end: 3, suffix: '', label: 'National Champions' },
  { end: 24, suffix: '/7', label: 'Access' },
];

function StatItem({ stat, index }: { stat: (typeof STATS)[number]; index: number }) {
  const { ref, display } = useCountUp({
    end: stat.end,
    suffix: stat.suffix,
    duration: 2.2,
  });

  return (
    <div
      className={`flex flex-col items-center text-center px-6 py-12 lg:py-16 ${
        index !== 0 ? 'lg:border-l border-ash-200' : ''
      }`}
    >
      <span
        ref={ref}
        className="font-display text-6xl sm:text-7xl lg:text-8xl text-bone leading-none tabular-nums"
      >
        {display}
      </span>
      <span className="mt-3 text-[11px] sm:text-xs font-grotesk font-medium uppercase tracking-widest text-bone/50">
        {stat.label}
      </span>
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative bg-ink border-y border-ash-200">
      <div className="max-w-edge mx-auto grid grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={i % 2 === 1 ? 'border-l border-ash-200' : ''}
          >
            <div className={i >= 2 ? 'border-t lg:border-t-0 border-ash-200' : ''}>
              <StatItem stat={stat} index={i} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
