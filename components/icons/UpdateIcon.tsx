export default function UpdateIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_38_41)">
        <path
          d="M44 32V52L61 62.08L64.08 56.96L50 48.6V32H44ZM84 40V12L73.44 22.56C66.96 16.04 57.96 12 48 12C28.12 12 12 28.12 12 48C12 67.88 28.12 84 48 84C67.88 84 84 67.88 84 48H76C76 63.44 63.44 76 48 76C32.56 76 20 63.44 20 48C20 32.56 32.56 20 48 20C55.72 20 62.72 23.16 67.8 28.2L56 40H84Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_38_41">
          <rect width="96" height="96" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
