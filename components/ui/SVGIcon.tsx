type SVGIconProps = {
  icon: React.ComponentType<{ className?: string }>;
  size?: 'xs' | 'sm' | 'lg';
  className?: string;
};

const ICON_SIZES: Record<string, string> = {
  xs: 'w-4 h-4',
  sm: 'w-5 h-5',
  lg: 'w-12 h-12',
};

export default function SVGIcon({
  icon: Icon,
  size = 'xs',
  className = '',
}: SVGIconProps) {
  return <Icon className={`${ICON_SIZES[size]} ${className}`} />;
}
