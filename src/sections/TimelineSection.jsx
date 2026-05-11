import FeatureCard from '../components/FeatureCard';
import SectionTitle from '../components/SectionTitle';
import StepCard from '../components/StepCard';
import Reveal from '../components/Reveal';
import { processSteps, timingCards } from '../data/steps';

export default function TimelineSection() {
  return (
    <section id="timeline" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-premium">
        <SectionTitle
          eyebrow="Сроки и процесс"
          title="Компания в Индонезии от 1 недели до 1 месяца"
          text="Срок зависит от типа компании, состава учредителей, лицензий, банковских процедур и выбранной структуры. Мы заранее показываем реалистичный план и ведем процесс до результата."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {timingCards.map((card, index) => (
            <FeatureCard key={card.title} {...card} compact delay={index * 80} />
          ))}
        </div>

        <div className="relative mt-12 grid gap-6 sm:mt-16 lg:grid-cols-5 lg:gap-5">
          <Reveal className="absolute left-[17px] top-4 hidden h-[calc(100%-2rem)] w-px origin-top bg-gradient-to-b from-gold via-emerald to-transparent sm:block lg:left-0 lg:right-0 lg:top-[18px] lg:mx-auto lg:h-px lg:w-full lg:bg-gradient-to-r" />
          {processSteps.map((step, index) => (
            <StepCard key={step.title} index={index + 1} {...step} delay={index * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
