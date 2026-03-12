export default function CategoryCard({
  icon: Icon,
  title,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
}) {
  return (
    <div className="bg-sky-500 border-8 border-white py-8 rounded-3xl shadow-md flex flex-col items-center">
      <Icon className="block text-primary" />
      <div className="text-xl font-semibold text-primary mt-4">{title}</div>
    </div>
  );
}
