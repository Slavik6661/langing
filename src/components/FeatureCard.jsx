import Reveal from './Reveal';

export default function FeatureCard({ title, text, delay = 0, compact = false }) {
  return (
    <Reveal
      delay={delay}
      className={`group glass-panel rounded-lg transition duration-300 hover:-translate-y-1.5 hover:border-emerald/50 hover:bg-white/[0.075] ${
        compact ? 'p-4' : 'p-6'
      }`}
    >
      <div className="mb-5 h-1 w-10 rounded-full bg-gradient-to-r from-gold to-emerald transition duration-300 group-hover:w-16" />
      <h3 className="font-semibold text-ivory">{title}</h3>
      {text && <p className="mt-3 text-sm leading-7 text-muted">{text}</p>}
    </Reveal>
  );
}
