type SectionEyebrowProps = {
  number: string;
  label: string;
  className?: string;
};

export default function SectionEyebrow({
  number,
  label,
  className = "",
}: SectionEyebrowProps) {
  return (
    <div className={`section-eyebrow ${className}`.trim()}>
      <span aria-hidden="true">{number}</span>
      <span>{label}</span>
    </div>
  );
}
