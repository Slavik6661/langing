import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-premium">
        <SectionTitle
          align="center"
          eyebrow="Услуги"
          title="Что мы делаем"
          text="Собираем юридические, финансовые, операционные и бытовые задачи релокации в одну управляемую дорожную карту."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} delay={(index % 3) * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
