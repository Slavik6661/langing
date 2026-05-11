import Reveal from './Reveal';

export default function StepCard({ index, title, text, delay = 0 }) {
  return (
    <Reveal delay={delay} className="relative pl-12 lg:pl-0 lg:pt-14">
      <div className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-graphite text-sm font-semibold text-gold shadow-glow lg:left-1/2 lg:top-0 lg:-translate-x-1/2">
        {index}
      </div>
      <div className="glass-panel h-full rounded-lg p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/40 lg:text-center">
        <h3 className="text-lg font-semibold text-ivory">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
      </div>
    </Reveal>
  );
}
