import SVGIcon, { IconSize } from './ui/SVGIcon';

type FeatureCardProps = {
  icon: React.ComponentType;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="bg-white p-10 rounded-2xl shadow-sm text-center">
      <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-8">
        <SVGIcon icon={Icon} size={IconSize.LARGE} className="text-tertiary" />
      </div>
      <h3 className="text-2xl font-medium text-primary mb-4">{title}</h3>
      <p className="text-neutral-700">{description}</p>
    </div>
  );
}
