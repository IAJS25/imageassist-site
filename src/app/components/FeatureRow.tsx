type FeatureRowProps = {
  title: string;
  description: string;
  bullets?: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean; // when true: image left, text right
};

export default function FeatureRow({
  title,
  description,
  bullets = [],
  imageSrc,
  imageAlt,
  reverse = false,
}: FeatureRowProps) {
  return (
    <div
      className={`grid gap-10 items-center lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
      }`}
    >
      {/* Text */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        {bullets.length > 0 && (
          <ul className="space-y-2 text-slate-700">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#114b79]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Image */}
      <div className="rounded-2xl shadow-xl ring-1 ring-slate-200 overflow-hidden bg-white">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}
