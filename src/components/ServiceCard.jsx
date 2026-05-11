import Reveal from './Reveal';

export default function ServiceCard({ icon, title, text, delay = 0 }) {
  return (
    <Reveal
      delay={delay}
      className="group glass-panel rounded-lg p-6 transition duration-300 hover:-translate-y-2 hover:border-gold/40 hover:bg-white/[0.075] hover:shadow-glow"
    >
      <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-xs font-semibold text-gold transition duration-300 group-hover:border-gold/70 group-hover:bg-gold/15">
        {icon}
      </div>
      <h3 className="text-lg font-semibold leading-snug text-ivory">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-muted">{text}</p>
    </Reveal>
  );
}
