import FeatureCard from '../components/FeatureCard';
import ImagePlaceholder from '../components/ImagePlaceholder';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import { businessFeatures } from '../data/features';
import { images } from '../data/images';

export default function BusinessSection() {
  return (
    <section id="business" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-premium grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionTitle
            eyebrow="Инфраструктура"
            title="Бизнес-инфраструктура в Индонезии без хаоса"
            text="Мы помогаем не просто переехать, а выстроить рабочую систему: юридическое лицо, банковские счета, платежные инструменты, офис, команда, налоги и документы."
          />
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {businessFeatures.map((item, index) => (
              <FeatureCard key={item} title={item} compact delay={index * 70} />
            ))}
          </div>
        </div>
        <Reveal delay={160}>
          <ImagePlaceholder
            src={images.business}
            alt="Современное деловое пространство в Джакарте"
            label="Современное деловое пространство в Джакарте"
          />
        </Reveal>
      </div>
    </section>
  );
}
