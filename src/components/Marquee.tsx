type MarqueeProps = {
  items: string[];
};

/**
 * Infinite auto-scrolling ticker. Renders the item list twice back-to-back
 * and animates the whole track left by exactly one copy's width, so the
 * loop is seamless — pure CSS, no JS scroll math.
 */
export function Marquee({ items }: MarqueeProps) {
  return (
    <div className="marquee" aria-hidden="false">
      <div className="marquee__track">
        {[...items, ...items].map((item, i) => (
          <span className="marquee__item" key={`${item}-${i}`}>
            {item}
            <span className="marquee__dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
