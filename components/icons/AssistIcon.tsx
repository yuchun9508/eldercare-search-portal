import React from 'react';

type AssistIconProps = {
  className?: string;
  width?: number | string;
  height?: number | string;
};

export default function AssistIcon({
  className = '',
  width = 96,
  height = 96,
}: AssistIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 32 36"
      fill="none"
    >
      <path
        d="M13 28H19V23H24V17H19V12H13V17H8V23H13V28ZM0 36V12L16 0L32 12V36H0ZM4 32H28V14L16 5L4 14V32Z"
        fill="currentColor"
      />
    </svg>
  );
}
