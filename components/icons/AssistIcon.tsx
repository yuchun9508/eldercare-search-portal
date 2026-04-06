export default function AssistIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="36"
      viewBox="0 0 32 36"
      fill="none"
      className={className}
    >
      <path
        d="M13 28H19V23H24V17H19V12H13V17H8V23H13V28ZM0 36V12L16 0L32 12V36H0ZM4 32H28V14L16 5L4 14V32Z"
        fill="currentColor"
      />
    </svg>
  );
}
