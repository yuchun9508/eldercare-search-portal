import React from 'react';

type FilterIconProps = {
  className?: string;
  width?: number | string;
  height?: number | string;
};

export default function FilterIcon({
  className = '',
  width = 96,
  height = 96,
}: FilterIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M8 18V12H10V14H18V16H10V18H8ZM0 16V14H6V16H0ZM4 12V10H0V8H4V6H6V12H4ZM8 10V8H18V10H8ZM12 6V0H14V2H18V4H14V6H12ZM0 4V2H10V4H0Z"
        fill="currentColor"
      />
    </svg>
  );
}
