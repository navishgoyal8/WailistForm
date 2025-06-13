import type { SVGProps } from 'react';

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.378 1.602a.75.75 0 00-.756 0L3.004 6.076A.75.75 0 002.25 6.75v10.5a.75.75 0 00.754.674l8.618 4.476a.75.75 0 00.756 0l8.618-4.476A.75.75 0 0021.75 17.25V6.75a.75.75 0 00-.754-.674L12.378 1.602zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
      <path d="M19.06 6.932a.75.75 0 00-1.06-.056L12 11.888l-6.002-5.012a.75.75 0 00-1.003 1.116l6.502 5.418a.75.75 0 001.002 0l6.502-5.418a.75.75 0 00.058-1.06z" />
    </svg>
  );
}
