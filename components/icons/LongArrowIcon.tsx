import React from 'react';

type LongArrowIconProps = {
  className?: string;
};

export default function LongArrowIcon({ className = '' }: LongArrowIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 12 9"
      fill="none"
    >
      <path
        d="M7.58333 8.16667L6.75208 7.35L9.43542 4.66667H0V3.5H9.43542L6.76667 0.816667L7.58333 0L11.6667 4.08333L7.58333 8.16667Z"
        fill="currentColor"
      />
    </svg>
  );
}
