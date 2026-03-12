import React from 'react';

type HealthAndSafetyIconProps = {
  className?: string;
  width?: number | string;
  height?: number | string;
};

export default function HealthAndSafetyIcon({
  className = '',
  width = 96,
  height = 96,
}: HealthAndSafetyIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 96 96"
      fill="none"
    >
      <g clipPath="url(#clip0_35_28)">
        <path
          d="M42 52H32V40H42V30H54V40H64V52H54V62H42V52ZM48 8L16 20V44.36C16 64.56 29.64 83.4 48 88C66.36 83.4 80 64.56 80 44.36V20L48 8ZM72 44.36C72 60.36 61.8 75.16 48 79.68C34.2 75.16 24 60.4 24 44.36V25.56L48 16.56L72 25.56V44.36Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_35_28">
          <rect width="96" height="96" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
