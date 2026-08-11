interface FeatureCardProps {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export function FeatureCard({ id, icon, title, description }: FeatureCardProps) {
  return (
    <div
      id={id}
      className="group relative rounded-2xl border border-zinc-200/80 bg-white/50 p-6 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 dark:border-zinc-800/80 dark:bg-zinc-900/50"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-2xl text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white dark:bg-indigo-950/50 dark:text-indigo-400 dark:group-hover:bg-indigo-500 dark:group-hover:text-white">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
    </div>
  );
}
