import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';

const audience = [
  {
    title: 'Предпринимателям',
    text: 'Кто хочет открыть компанию в Индонезии, принимать платежи, работать легально и не разбираться в бюрократии самостоятельно.',
  },
  {
    title: 'Действующему бизнесу',
    text: 'Компаниям, которые переносят часть операций, офис, производство или юридическую структуру в Индонезию.',
  },
  {
    title: 'Онлайн-проектам',
    text: 'IT, e-commerce, маркетинговым, образовательным и сервисным командам, которым нужны счета, платежные системы и понятная налоговая модель.',
  },
  {
    title: 'Командам сотрудников',
    text: 'Бизнесам, которые перевозят сотрудников, оформляют документы, жилье, рабочие процессы и адаптацию на месте.',
  },
  {
    title: 'Семьям',
    text: 'Тем, кто переезжает надолго и хочет закрыть вопросы виз, ВНЖ, школ, детских садов, страховок и жилья.',
  },
  {
    title: 'Инвесторам и экспатам',
    text: 'Тем, кто планирует жить, покупать или арендовать недвижимость, запускать активы и выстраивать легальное присутствие.',
  },
];

export default function AudienceSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="container-premium">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionTitle
            eyebrow="Кому подходит"
            title="Кто может воспользоваться нашей услугой"
            text="Мы помогаем тем, кто хочет переехать, открыть бизнес или перевести команду в Индонезию без хаоса в документах, счетах, визах и бытовых задачах."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {audience.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 80}
                className="group glass-panel relative overflow-hidden rounded-lg p-6 transition duration-300 hover:-translate-y-1.5 hover:border-gold/45 hover:bg-white/[0.075]"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full border border-gold/15 transition duration-500 group-hover:scale-125 group-hover:border-gold/35" />
                <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-emerald/35 bg-emerald/10 text-xs font-semibold text-gold">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="max-w-full break-words text-lg font-semibold leading-snug text-ivory">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-full break-words text-sm leading-7 text-muted">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
