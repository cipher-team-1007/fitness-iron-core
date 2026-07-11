import { Instagram, Facebook, Youtube, MapPin, Phone } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Programs', href: '#programs' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'Membership', href: '#membership' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="relative bg-ink border-t border-ash-200 pt-20 pb-10">
      <div className="max-w-edge mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <span className="font-display text-3xl tracking-tight text-bone">GRAVITY</span>
              <span className="font-display text-3xl text-blood">/</span>
              <span className="font-display text-3xl tracking-tight text-bone">FITNESS</span>
            </div>
            <p className="text-sm font-grotesk text-bone/50 leading-relaxed max-w-xs">
              Patna's hardcore strength and powerlifting gym. Where the strongest
              come to get stronger.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-grotesk font-bold uppercase tracking-widest text-bone/40 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-grotesk text-bone/70 hover:text-blood transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-grotesk font-bold uppercase tracking-widest text-bone/40 mb-5">
              Find Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm font-grotesk text-bone/70">
                <MapPin size={16} className="text-blood shrink-0 mt-0.5" />
                <span>Ground Floor, Boring Road, Patna, Bihar 800001</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-grotesk text-bone/70">
                <Phone size={16} className="text-blood shrink-0 mt-0.5" />
                <a href="tel:+919876543210" className="hover:text-blood transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs font-grotesk font-bold uppercase tracking-widest text-bone/40 mb-5">
              Opening Hours
            </h4>
            <ul className="space-y-2 text-sm font-grotesk text-bone/70">
              <li className="flex justify-between gap-4">
                <span>Mon – Sat</span>
                <span className="text-bone/50">5:00 – 22:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="text-bone/50">8:00 – 14:00</span>
              </li>
              <li className="flex justify-between gap-4 pt-2 border-t border-ash-200">
                <span className="text-blood font-bold">Members</span>
                <span className="text-blood font-bold">24/7</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-ash-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs font-grotesk text-bone/40">
            © {new Date().getFullYear()} Gravity Fitness Gym, Patna. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 flex items-center justify-center border border-ash-300 rounded-[2px] text-bone/60 hover:bg-blood hover:text-bone hover:border-blood transition-all duration-200"
            >
              <Instagram size={18} strokeWidth={2} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 flex items-center justify-center border border-ash-300 rounded-[2px] text-bone/60 hover:bg-blood hover:text-bone hover:border-blood transition-all duration-200"
            >
              <Facebook size={18} strokeWidth={2} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="w-10 h-10 flex items-center justify-center border border-ash-300 rounded-[2px] text-bone/60 hover:bg-blood hover:text-bone hover:border-blood transition-all duration-200"
            >
              <Youtube size={18} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
