import FeatureCard from '../components/FeatureCard';
import ImagePlaceholder from '../components/ImagePlaceholder';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import { familyFeatures } from '../data/features';
import { images } from '../data/images';

export default function FamilySection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-premium grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionTitle
            eyebrow="Команды и семьи"
            title="Переезд сотрудников и семей без лишней нагрузки на бизнес"
            text="Помогаем с визами, ВНЖ, страховками, жильем, школами, детскими садами, документами и адаптацией на месте."
          />
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {familyFeatures.map((item, index) => (
              <FeatureCard key={item} title={item} compact delay={index * 70} />
            ))}
          </div>
        </div>
        <Reveal delay={160}>
          <ImagePlaceholder
            src={images.family}
            alt="Школьная среда в Индонезии для переезда семей"
            label="Школьная среда в Индонезии для переезда семей"
          />
        </Reveal>
      </div>
    </section>
  );
}
