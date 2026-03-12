import React from 'react';

type AssuredWorkloadIconProps = {
  className?: string;
  width?: number | string;
  height?: number | string;
};

export default function AssuredWorkloadIcon({
  className = '',
  width = 96,
  height = 96,
}: AssuredWorkloadIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 96 96"
      fill="none"
    >
      <g clipPath="url(#clip0_38_47)">
        <path d="M28 40H20V68H28V40Z" fill="currentColor" />
        <path d="M52 40H44V68H52V40Z" fill="currentColor" />
        <path
          d="M88 24L48 4L8 24V32H88V24ZM25.88 24L48 12.96L70.12 24H25.88Z"
          fill="currentColor"
        />
        <path
          d="M8 76V84H57.6C56.76 81.44 56.32 78.76 56.16 76H8Z"
          fill="currentColor"
        />
        <path d="M76 49.04V40H68V53.04L76 49.04Z" fill="currentColor" />
        <path
          d="M80 56L64 64V74.2C64 84.28 70.84 93.72 80 96C89.16 93.72 96 84.28 96 74.2V64L80 56ZM77.12 84L69 75.88L73.24 71.64L77.12 75.52L86.76 66L91 70.24L77.12 84Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_38_47">
          <rect width="96" height="96" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
