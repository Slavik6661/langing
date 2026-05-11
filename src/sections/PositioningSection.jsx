import FeatureCard from "../components/FeatureCard";
import SectionTitle from "../components/SectionTitle";
import { positioningCards } from "../data/features";

export default function PositioningSection() {
  return (
    <section className="py-20 max-sm:py-10">
      <div className="container-premium">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionTitle
            eyebrow="Единая система"
            title="Один партнер для всего переезда"
            text="Мы берем на себя весь процесс: от регистрации компании и счетов до виз, жилья, офиса, страховок, школ, налогов и юридического сопровождения."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {positioningCards.map((card, index) => (
              <FeatureCard key={card.title} {...card} delay={index * 90} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
