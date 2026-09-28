import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

export function CivilIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="52" height="52" aria-hidden="true" {...props}>
      <g fill="currentColor">
        <circle cx="12" cy="7.5" r="4.5" />
        <path d="M3.5 20c0-4.4 3.8-7.5 8.5-7.5s8.5 3.1 8.5 7.5c0 .8-.7 1.5-1.5 1.5H5c-.8 0-1.5-.7-1.5-1.5z" />
      </g>
    </svg>
  );
}

export function ImposteurIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="52" height="52" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.5 10C1.5 7.2 3.7 5.5 6.5 5.5c2.2 0 3.6 1 5.5 1s3.3-1 5.5-1c2.8 0 5 1.7 5 4.5 0 4.3-2.7 8-6 8-2 0-3-1.6-4.5-1.6S9.5 18 7.5 18c-3.3 0-6-3.7-6-8zM5 10.8a2.5 1.8 0 1 0 5 0a2.5 1.8 0 1 0-5 0zm9 0a2.5 1.8 0 1 0 5 0a2.5 1.8 0 1 0-5 0z"
      />
    </svg>
  );
}

export function MrWhiteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="52" height="52" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2c-4.4 0-7.5 3.4-7.5 7.8v10.1c0 .9 1 1.4 1.7.8l1.3-1.1 1.6 1.4c.5.4 1.2.4 1.6 0l1.3-1.1 1.3 1.1c.4.4 1.1.4 1.6 0l1.6-1.4 1.3 1.1c.7.6 1.7.1 1.7-.8V9.8C19.5 5.4 16.4 2 12 2zM7.9 10a1.4 1.6 0 1 0 2.8 0a1.4 1.6 0 1 0-2.8 0zm5.4 0a1.4 1.6 0 1 0 2.8 0a1.4 1.6 0 1 0-2.8 0z"
      />
    </svg>
  );
}
