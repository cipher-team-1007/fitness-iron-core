import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

type UseCountUpOptions = {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
};

export function useCountUp({ end, duration = 2, suffix = '', prefix = '' }: UseCountUpOptions) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    let frame: number;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [inView, end, duration]);

  return { ref, display: `${prefix}${count.toLocaleString('en-IN')}${suffix}` };
}
