import { useState } from 'react';
import { Reveal } from './Reveal';
import { supabase } from '../lib/supabase';
import { MapPin, Phone, Clock, Loader2, Check } from 'lucide-react';

const GOALS = [
  'Powerlifting / Competition',
  'Strength & Conditioning',
  'Personal Coaching',
  'General Fitness / Open Gym',
  'Post-Rehabilitation',
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState(GOALS[0]);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase.from('enquiries').insert({
      name: name.trim(),
      phone: phone.trim(),
      goal,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please call us directly.');
      return;
    }

    setStatus('success');
    setName('');
    setPhone('');
  };

  return (
    <section id="contact" className="relative bg-ink py-24 lg:py-36 border-t border-ash-200">
      <div className="max-w-edge mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-12 h-[2px] bg-blood" />
            <span className="text-xs font-grotesk font-medium uppercase tracking-widest text-bone/60">
              Get In Touch
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display uppercase text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-bone leading-[0.85] tracking-tightest mb-16">
            Start<br />
            <span className="text-blood">Training</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info + Map */}
          <Reveal delay={0.15}>
            <div className="flex flex-col gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={22} className="text-blood shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <div className="text-xs font-grotesk font-bold uppercase tracking-widest text-bone/50 mb-1">
                      Location
                    </div>
                    <div className="text-base font-grotesk text-bone leading-relaxed">
                      Ground Floor, Boring Road<br />
                      Patna, Bihar 800001
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={22} className="text-blood shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <div className="text-xs font-grotesk font-bold uppercase tracking-widest text-bone/50 mb-1">
                      Phone
                    </div>
                    <a
                      href="tel:+919876543210"
                      className="text-base font-grotesk text-bone hover:text-blood transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock size={22} className="text-blood shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <div className="text-xs font-grotesk font-bold uppercase tracking-widest text-bone/50 mb-1">
                      Hours
                    </div>
                    <div className="text-base font-grotesk text-bone leading-relaxed">
                      Mon–Sat: 5:00 AM – 10:00 PM<br />
                      Sun: 8:00 AM – 2:00 PM<br />
                      <span className="text-blood font-bold">Members: 24/7 Keycard Access</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative w-full h-64 lg:h-80 overflow-hidden border border-ash-200 grayscale">
                <iframe
                  title="Gravity Fitness Gym location on map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=85.1350%2C25.5940%2C85.1450%2C25.6040&layer=mapnik&marker=25.5990%2C85.1400"
                  className="w-full h-full grayscale contrast-125"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          {/* Right: Form */}
          <Reveal delay={0.25}>
            <form
              onSubmit={handleSubmit}
              className="bg-ash-50 border border-ash-200 p-8 lg:p-10 flex flex-col gap-6"
            >
              <div>
                <h3 className="font-display uppercase text-3xl lg:text-4xl text-bone tracking-tight mb-2">
                  Book Your Free Session
                </h3>
                <p className="text-sm font-grotesk text-bone/50">
                  Drop your details. We will call you within 24 hours to set up your first session.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-grotesk font-bold uppercase tracking-widest text-bone/60">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your full name"
                  className="bg-ink border border-ash-300 px-4 py-3.5 text-base font-grotesk text-bone placeholder:text-bone/30 focus:border-blood focus:outline-none transition-colors rounded-[2px]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-xs font-grotesk font-bold uppercase tracking-widest text-bone/60">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="+91 98765 43210"
                  className="bg-ink border border-ash-300 px-4 py-3.5 text-base font-grotesk text-bone placeholder:text-bone/30 focus:border-blood focus:outline-none transition-colors rounded-[2px]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="goal" className="text-xs font-grotesk font-bold uppercase tracking-widest text-bone/60">
                  Your Goal
                </label>
                <select
                  id="goal"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="bg-ink border border-ash-300 px-4 py-3.5 text-base font-grotesk text-bone focus:border-blood focus:outline-none transition-colors rounded-[2px] appearance-none cursor-pointer"
                >
                  {GOALS.map((g) => (
                    <option key={g} value={g} className="bg-ink text-bone">
                      {g}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="mt-2 bg-blood text-bone py-4 text-sm font-grotesk font-bold uppercase tracking-widest rounded-[2px] hover:bg-bone hover:text-ink transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'loading' && <Loader2 size={18} className="animate-spin" />}
                {status === 'success' && <Check size={18} strokeWidth={2.5} />}
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent — We Will Call You' : 'Send Enquiry'}
              </button>

              {status === 'error' && (
                <p className="text-sm font-grotesk text-blood">{errorMsg}</p>
              )}
              {status === 'success' && (
                <p className="text-sm font-grotesk text-bone/70">
                  Got it. Our team will reach out within 24 hours to book your free session.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
