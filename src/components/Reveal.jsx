import { useReveal } from '../hooks/useReveal';

export default function Reveal({ as: Tag = 'div', className = '', children, delay = 0, id }) {
  const { ref, isVisible } = useReveal();

  return (
    <Tag
      id={id}
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
}
