// src/components/PricingCard.tsx

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
  ctaLink?: string;
  ctaText?: string;
}

export function PricingCard({
  title,
  price,
  features,
  popular = false,
  ctaLink = "#",
  ctaText = "Contratar",
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col bg-white rounded-2xl shadow-lg p-8 ${
        popular ? "border-2 border-blue-600" : ""
      }`}
    >
      {popular && (
        <span className="absolute top-0 right-0 mt-4 mr-4 bg-blue-600 text-white text-xs font-semibold uppercase px-3 py-1 rounded-full">
          Popular
        </span>
      )}

      <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>
      <p className="text-3xl font-extrabold mb-6 text-blue-600">{price}</p>

      <ul className="flex-1 mb-6 space-y-3">
        {features.map((feat) => (
          <li key={feat} className="flex items-start">
            <svg
              className="w-5 h-5 text-green-500 flex-shrink-0 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 
                  001.414 0l8-8a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-3 text-gray-600">{feat}</span>
          </li>
        ))}
      </ul>

      <a
        href={ctaLink}
        className={`mt-auto inline-block text-center font-semibold px-6 py-3 rounded-xl shadow-lg transition ${
          popular
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
        }`}
      >
        {ctaText}
      </a>
    </div>
  );
}
