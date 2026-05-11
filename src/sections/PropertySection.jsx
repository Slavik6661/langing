import FeatureCard from '../components/FeatureCard';
import ImagePlaceholder from '../components/ImagePlaceholder';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import { propertyFeatures } from '../data/features';
import { images } from '../data/images';

export default function PropertySection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-premium grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <Reveal>
          <ImagePlaceholder
            src={images.property}
            alt="Виллы и жилье на Бали для релокации"
            label="Виллы и жилье на Бали для релокации"
          />
        </Reveal>
        <div>
          <SectionTitle
            eyebrow="Недвижимость"
            title="Жилье, офисы и площадки под задачи бизнеса"
            text="Подбираем и проверяем объекты для жизни, работы и производства: от вилл и апартаментов до офисов, складов и производственных помещений."
          />
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {propertyFeatures.map((item, index) => (
              <FeatureCard key={item} title={item} compact delay={index * 70} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
