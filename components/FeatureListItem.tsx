export default function FeatureListItem({
  icon: Icon,
  title,
}: {
  icon: React.ComponentType<{ width?: number; height?: number }>;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <Icon width={48} height={48} />
      <span className="text-primary text-lg text-nowrap">{title}</span>
    </div>
  );
}
