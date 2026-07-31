import { useId } from 'react';

/**
 * Ipseity logo: layered stack mark + wordmark.
 *
 * The mark is filled with the accent gradient from our theme tokens; the
 * wordmark is set in our display face and inherits currentColor, so it picks
 * up ink / white per theme and surface.
 *
 * Scales off font-size — the mark is sized in `em`. Set the size at the call
 * site with a text utility, e.g. <Logo className="text-2xl" />.
 */
const Logo = ({ className = "", name = "Ipseity" }: { className?: string, name?: string }) => {
  const gradientId = `logo-mark-${useId()}`;

  return (
    <span className={`inline-flex items-center gap-[0.38em] font-display font-bold tracking-tight leading-none whitespace-nowrap ${className}`}>
      <svg
        viewBox="0 5.5 44 37"
        className="h-[1.02em] w-auto shrink-0"
        fill="none"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-accent-start, #FF4A2A)" />
            <stop offset="100%" stopColor="var(--color-accent-end, #FF6A3D)" />
          </linearGradient>
        </defs>
        <g fill={`url(#${gradientId})`}>
          <path d="m10.4993 16.5h-7.29875c-1.76731 0-3.20055 1.4327-3.20055 3.2v2.8h11c2.7614 0 5-2.2386 5-5s2.2386-5 5-5h19c2.2091 0 4-1.7909 4-4v-3h-22.5c-3.0376 0-5.5 2.46243-5.5 5.5 0 3.0376-2.4631 5.5-5.5007 5.5z"/>
          <path d="m10.4993 26.5h-7.29875c-1.76731 0-3.20055 1.4327-3.20055 3.2v2.8h11c2.7614 0 5-2.2386 5-5s2.2386-5 5-5h13c2.2091 0 4-1.7909 4-4v-3h-16.5c-3.0376 0-5.5 2.4624-5.5 5.5s-2.4631 5.5-5.5007 5.5z" opacity=".75"/>
          <path d="m10.4993 36.5h-7.29875c-1.76731 0-3.20055 1.4327-3.20055 3.2v2.8h11c2.7614 0 5-2.2386 5-5s2.2386-5 5-5h7.8c1.7673 0 3.2-1.4327 3.2-3.2v-3.8h-10.5c-3.0376 0-5.5 2.4624-5.5 5.5s-2.4631 5.5-5.5007 5.5z" opacity=".5"/>
        </g>
      </svg>
      <span>{name}</span>
    </span>
  );
};

export default Logo;
