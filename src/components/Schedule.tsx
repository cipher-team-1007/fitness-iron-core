import { Reveal } from './Reveal';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const SLOTS = [
  { time: '06:00 – 08:00', label: 'Early Bird Open Gym', coach: 'Open Floor' },
  { time: '08:00 – 09:30', label: 'Powerlifting Technique', coach: 'Rajeev' },
  { time: '10:00 – 11:30', label: 'Strength & Conditioning', coach: 'Imran' },
  { time: '16:00 – 17:30', label: 'Hypertrophy / Bodybuilding', coach: 'Priya' },
  { time: '18:00 – 19:30', label: 'Powerlifting Club', coach: 'Rajeev' },
  { time: '19:30 – 21:00', label: 'Strongman Saturday*', coach: 'Vikram' },
];

export function Schedule() {
  return (
    <section id="schedule" className="relative bg-ash-50 py-24 lg:py-36">
      <div className="max-w-edge mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-12 h-[2px] bg-blood" />
            <span className="text-xs font-grotesk font-medium uppercase tracking-widest text-bone/60">
              Weekly Timetable
            </span>
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <Reveal delay={0.1}>
            <h2 className="font-display uppercase text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-bone leading-[0.85] tracking-tightest">
              Class<br />
              <span className="text-blood">Schedule</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-sm lg:text-base font-grotesk text-bone/60 leading-relaxed">
              Structured sessions six days a week. Sunday is open floor only —
              come in, load the bar, and train on your own terms.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="overflow-x-auto scrollbar-hide -mx-5 sm:-mx-8 lg:-mx-12 px-5 sm:px-8 lg:px-12">
            <table className="w-full border-collapse min-w-[760px]">
              <thead>
                <tr>
                  <th className="text-left p-4 text-[11px] font-grotesk font-bold uppercase tracking-widest text-bone/40 border-b border-ash-200">
                    Time
                  </th>
                  {DAYS.map((day) => (
                    <th
                      key={day}
                      className="text-left p-4 text-xs font-grotesk font-bold uppercase tracking-widest text-bone border-b border-ash-200"
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SLOTS.map((slot) => (
                  <tr key={slot.time} className="group">
                    <td className="p-4 text-xs font-grotesk font-medium text-bone/50 align-top border-b border-ash-100 whitespace-nowrap">
                      {slot.time}
                    </td>
                    {DAYS.map((day, dayIdx) => {
                      const isStrongman = slot.label.includes('*') && day === 'Sat';
                      const isRest = dayIdx === 5 && slot.time === '10:00 – 11:30';
                      const content = isRest ? 'Open Floor' : slot.label.replace(' *', '');
                      const coach = isRest ? '—' : isStrongman ? 'Vikram' : slot.coach;

                      return (
                        <td
                          key={day}
                          className="p-4 align-top border-b border-ash-100"
                        >
                          <div
                            className={`text-xs lg:text-sm font-grotesk font-medium leading-tight ${
                              isStrongman ? 'text-blood' : 'text-bone/80'
                            }`}
                          >
                            {content}
                          </div>
                          <div className="text-[10px] lg:text-xs font-grotesk text-bone/40 mt-1">
                            {coach}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 text-xs font-grotesk text-bone/40">
            * Strongman Saturday runs 19:30–21:00 only. All other slots are weekly.
            Open Floor = no coach, full gym access for members.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
