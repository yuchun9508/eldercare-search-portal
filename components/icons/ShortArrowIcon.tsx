import React from 'react';

type ShortArrowIconProps = {
  className?: string;
  width?: number | string;
  height?: number | string;
};

export default function ShortArrowIcon({
  className = '',
  width = 96,
  height = 96,
}: ShortArrowIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
        fill="currentColor"
      />
    </svg>
  );
}
