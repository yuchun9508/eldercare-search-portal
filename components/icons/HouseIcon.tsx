import React from 'react';

type HouseIconProps = {
  className?: string;
  width?: number | string;
  height?: number | string;
};

export default function HouseIcon({
  className = '',
  width = 96,
  height = 96,
}: HouseIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 96 96"
      fill="none"
    >
      <g clipPath="url(#clip0_35_8)">
        <path
          d="M76 37.2V16H64V26.4L48 12L8 48H20V80H44V56H52V80H76V48H88L76 37.2ZM68 72H60V48H36V72H28V40.76L48 22.76L68 40.76V72Z"
          fill="currentColor"
        />
        <path
          d="M40 40H56C56 35.6 52.4 32 48 32C43.6 32 40 35.6 40 40Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_35_8">
          <rect width="96" height="96" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
