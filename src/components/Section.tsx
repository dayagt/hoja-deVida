interface SectionProps {
  title: string;
  children: React.ReactNode;
  bgColor?: string;
}

export default function Section({ title, children, bgColor = '#ffffff' }: SectionProps) {
  return (
    <section className="p-4 mb-4 rounded" style={{ backgroundColor: bgColor }}>
      <h2 style={{ color: '#046c4e' }}>{title}</h2>
      {children}
    </section>
  );
}