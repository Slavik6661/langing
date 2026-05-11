import { useEffect, useState } from "react";
import Reveal from "../components/Reveal";
import { useReveal } from "../hooks/useReveal";

const stats = [
  {
    value: 50,
    label: "открытых бизнесов",
    text: "Помогли предпринимателям запустить работу в Индонезии.",
  },
  {
    value: 100,
    label: "зарегистрированных компаний",
    text: "Сопроводили оформление юридических лиц и документов.",
  },
  {
    value: 400,
    label: "сотрудников перевезено",
    text: "Организовали легальный переезд команд и ключевых специалистов.",
  },
  {
    value: 50,
    label: "семей получили поддержку",
    text: "Закрыли вопросы виз, жилья, школ, страховок и адаптации.",
  },
];

function AnimatedNumber({ start, target }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) {
      setValue(0);
      return undefined;
    }

    let frameId;
    const duration = 1400;
    const startedAt = performance.now();

    const tick = (time) => {
      const progress = Math.min((time - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(eased * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [start, target]);

  return (
    <span className="tabular-nums">
      {value}
      <span className="text-gold">+</span>
    </span>
  );
}

export default function StatsSection() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden py-16 sm:py-20"
    >
      <div className="absolute inset-x-0 top-1/2 -z-10 h-40 -translate-y-1/2 bg-gradient-to-r from-transparent via-gold/10 to-transparent blur-3xl" />
      <div className="container-premium">
        <Reveal className="glass-panel overflow-hidden rounded-xl">
          <div className="grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => (
              <div
                key={item.label}
                className="group relative min-h-[220px] overflow-hidden bg-ink/90 p-6 transition duration-500 hover:bg-ink sm:p-7"
                style={{
                  transform: isVisible ? "translateY(0)" : "translateY(18px)",
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: `${index * 110}ms`,
                }}
              >
                <div className="absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-gold/70 transition duration-700 group-hover:scale-x-100" />
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-gold/20 transition duration-700 group-hover:scale-125 group-hover:border-gold/40" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold/80 sm:tracking-[0.24em]">
                  Результат
                </p>
                <p className="mt-6 font-display text-6xl font-semibold leading-none text-ivory sm:text-7xl">
                  <AnimatedNumber start={isVisible} target={item.value} />
                </p>
                <h3 className="mt-5 max-w-full break-words text-lg font-semibold leading-6 text-ivory">
                  {item.label}
                </h3>
                <p className="mt-3 max-w-full break-words text-sm leading-6 text-muted">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
