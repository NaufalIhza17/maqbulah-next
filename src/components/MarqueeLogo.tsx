import React from 'react';
import Image from 'next/image';

export default function MarqueeLogo() {
  return (
    <div className="flex flex-col overflow-hidden relative">
      <Image
        src="/renew/border-line.svg"
        alt="Border Line"
        width={1631}
        height={5}
        className="min-w-[1631px] w-screen  mb-[10px] lg:mb-5"
      />
      <div className="marquee fadeout-horizontal" style={{ '--num-items': 10 } as React.CSSProperties}>
        <div className="marquee-track">
            <div className="marquee-item" style={{ '--item-position': 1 } as React.CSSProperties}>
              <Image
                src={`/renew/partner-logo/kemenag.svg`}
                alt="Partner Logo"
                width={70.7}
                height={50}
                className="max-lg:h-10"
              />
            </div>
            <div className="marquee-item" style={{ '--item-position': 2 } as React.CSSProperties}>
              <Image
                src={`/renew/partner-logo/qatar-airways.svg`}
                alt="Partner Logo"
                width={150.66}
                height={50}
                className="max-lg:h-10"
              />
            </div>
            <div className="marquee-item" style={{ '--item-position': 3 } as React.CSSProperties}>
              <Image
                src={`/renew/partner-logo/himpuh.svg`}
                alt="Partner Logo"
                width={42.04}
                height={50}
                className="max-lg:h-10"
              />
            </div>
            <div className="marquee-item" style={{ '--item-position': 4 } as React.CSSProperties}>
              <Image
                src={`/renew/partner-logo/garuda.svg`}
                alt="Partner Logo"
                width={177.78}
                height={50}
                className="max-lg:h-10"
              />
            </div>
            <div className="marquee-item" style={{ '--item-position': 5 } as React.CSSProperties}>
              <Image
                src={`/renew/partner-logo/siskopatuh.svg`}
                alt="Partner Logo"
                width={111.49}
                height={50}
                className="max-lg:h-10"
              />
            </div>
            <div className="marquee-item" style={{ '--item-position': 6 } as React.CSSProperties}>
              <Image
                src={`/renew/partner-logo/emirates.svg`}
                alt="Partner Logo"
                width={70.42}
                height={50}
                className="max-lg:h-10"
              />
            </div>
            <div className="marquee-item" style={{ '--item-position': 7 } as React.CSSProperties}>
              <Image
                src={`/renew/partner-logo/bsi.svg`}
                alt="Partner Logo"
                width={146.06}
                height={50}
                className="max-lg:h-10"
              />
            </div>
            <div className="marquee-item" style={{ '--item-position': 8 } as React.CSSProperties}>
              <Image
                src={`/renew/partner-logo/saudi-airways.svg`}
                alt="Partner Logo"
                width={41.46}
                height={50}
                className="max-lg:h-10"
              />
            </div>
            <div className="marquee-item" style={{ '--item-position': 9 } as React.CSSProperties}>
              <Image
                src={`/renew/partner-logo/oman-air.svg`}
                alt="Partner Logo"
                width={150.59}
                height={50}
                className="max-lg:h-10"
              />
            </div>
            <div className="marquee-item" style={{ '--item-position': 10 } as React.CSSProperties}>
              <Image
                src={`/renew/partner-logo/kan.svg`}
                alt="Partner Logo"
                width={121.36}
                height={50}
                className="max-lg:h-10"
              />
            </div>
        </div>
      </div>
      <Image
        src="/renew/border-line.svg"
        alt="Border Line"
        width={1631}
        height={5}
        className="min-w-[1631px] w-screen mt-[10px] lg:mt-5"
      />
    </div>
  );
};
