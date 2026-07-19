/**
 * Premium loading skeletons shown while below-the-fold sections are
 * code-split and fetched. Mirrors the real section layout so there is
 * never a blank flash, and uses GPU-friendly pulse animation only.
 */

function Pulse({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-full bg-section-light-muted ${className}`}
      aria-hidden="true"
    />
  );
}

export function SectionSkeleton({ variant = "grid" }: { variant?: "grid" | "contact" }) {
  if (variant === "contact") {
    return (
      <section className="section-padding bg-section-light-bg" aria-hidden="true">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-8 w-48 rounded-full bg-section-light-muted animate-pulse mx-auto mb-3" />
          <div className="h-4 w-72 rounded-full bg-section-light-muted animate-pulse mx-auto mb-10" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 card-premium p-6 sm:p-8 space-y-4">
              <Pulse className="h-10 w-full" />
              <Pulse className="h-10 w-full" />
              <Pulse className="h-10 w-full" />
              <Pulse className="h-28 w-full" />
              <Pulse className="h-10 w-32 ml-auto" />
            </div>
            <div className="space-y-4">
              <Pulse className="h-20 w-full" />
              <Pulse className="h-20 w-full" />
              <Pulse className="h-20 w-full" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-section-light-bg" aria-hidden="true">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-8 w-48 rounded-full bg-section-light-muted animate-pulse mx-auto mb-3" />
        <div className="h-4 w-72 rounded-full bg-section-light-muted animate-pulse mx-auto mb-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl bg-section-light-card border border-section-light-border p-5 sm:p-6"
            >
              <Pulse className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4" />
              <Pulse className="h-4 w-32 mx-auto mb-2" />
              <Pulse className="h-3 w-24 mx-auto mb-3" />
              <Pulse className="h-3 w-full mb-2" />
              <Pulse className="h-3 w-5/6 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionSkeleton;
