type FullRoundedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'accent';
};

const VARIANT_CLASSES: Record<string, string> = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
  tertiary: 'bg-tertiary text-white',
  accent: 'bg-accent text-tertiary',
};

export default function FullRoundedButton({
  children,
  variant = 'secondary',
  ...props
}: FullRoundedButtonProps) {
  const { className, ...rest } = props;

  return (
    <button
      {...rest}
      className={`px-9 py-3 font-semibold text-center text-nowrap rounded-full ${VARIANT_CLASSES[variant]} ${className || ''}`}
    >
      {children}
    </button>
  );
}
