export enum IconSize {
  XS = 'w-4 h-4',
  SMALL = 'w-5 h-5',
  LARGE = 'w-12 h-12',
}

type SVGIconProps = {
  icon: React.ComponentType<{ className?: string }>;
  size?: IconSize;
  className?: string;
};

export default function SVGIcon({
  icon: Icon,
  size = IconSize.XS,
  className = '',
}: SVGIconProps) {
  return <Icon className={`${className} ${size}`} />;
}
