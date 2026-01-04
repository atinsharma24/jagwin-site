"use client";

export default function ServiceOverviewCard({
  title,
  subtitle,
  children,
  className = "",
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/40 p-4 sm:p-5 ${className}`}
    >
      <header className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-heading font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          {subtitle ? (
            <p className="mt-1 font-body text-sm text-gray-600 dark:text-gray-300">
              {subtitle}
            </p>
          ) : null}
        </div>
      </header>
      <div className="mt-3">{children}</div>
    </section>
  );
}
