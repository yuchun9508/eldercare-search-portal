import Link from 'next/link';
import LongArrowIcon from './icons/LongArrowIcon';
import SVGIcon from './ui/SVGIcon';

type CategoryCardProps = {
  icon: React.ComponentType;
  title: string;
  description: string;
  link: string;
};

export default function CategoryCard({
  icon: Icon,
  title,
  description,
  link,
}: CategoryCardProps) {
  return (
    <div className="bg-secondary/5 p-10 rounded-2xl relative overflow-hidden">
      <div className="w-32 h-32 bg-secondary/5 rounded-full absolute -right-1/6 -top-1/6"></div>
      <SVGIcon icon={Icon} size="lg" className="block text-secondary" />
      <div className="mt-12 mb-8">
        <h3 className="text-2xl font-medium text-primary mb-4">{title}</h3>
        <p className="text-neutral-700">{description}</p>
      </div>
      <Link href={link}>
        <button className="text-secondary font-semibold inline-flex items-center gap-1">
          <span>查看更多</span>
          <SVGIcon icon={LongArrowIcon} />
        </button>
      </Link>
    </div>
  );
}
