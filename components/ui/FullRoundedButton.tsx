type FullRoundedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  bgColor?: 'primary' | 'secondary' | 'tertiary' | 'accent';
  textColor?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'white';
};

export default function FullRoundedButton({
  children,
  bgColor = 'secondary',
  textColor = 'white',
  ...props
}: FullRoundedButtonProps) {
  const { className, ...rest } = props;

  return (
    <button
      {...rest}
      className={`px-9 py-3 bg-${bgColor} text-${textColor} font-semibold text-center text-nowrap rounded-full ${className || ''}`}
    >
      {children}
    </button>
  );
}
