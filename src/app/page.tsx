import { Hero } from "@/components/hero";
import { FeatureCard } from "@/components/feature-card";

export default function Home() {
  const features = [
    {
      id: "feature-nextjs",
      icon: "⚡",
      title: "Next.js App Router",
      description: "Menggunakan standar routing terbaru dengan Server Components dan performa tinggi.",
    },
    {
      id: "feature-typescript",
      icon: "🛡️",
      title: "Full TypeScript",
      description: "Dukungan tipe data yang ketat untuk mencegah bug dan mempermudah pemeliharaan.",
    },
    {
      id: "feature-tailwind",
      icon: "🎨",
      title: "Tailwind CSS",
      description: "Desain antarmuka modern, responsif, dan fleksibel menggunakan class utility terpercaya.",
    },
    {
      id: "feature-architecture",
      icon: "📁",
      title: "Clean Architecture",
      description: "Struktur folder yang rapi dan terpisah antara komponen, helper, dan halaman.",
    },
  ];

  return (
    <div className="flex flex-col gap-16 pb-24">
      <Hero />

      <section id="features" className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
            Pondasi Utama Aplikasi
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Arsitektur yang telah disiapkan untuk mendukung skalabilitas produk Anda.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </section>

      <section id="get-started" className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 text-center text-white shadow-xl sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Siap Mengembangkan Fitur?</h2>
          <p className="mt-3 text-indigo-100">
            Project skeleton sudah bersih dan siap digunakan. Mulai buat komponen baru di folder{" "}
            <code className="rounded bg-white/20 px-2 py-0.5 text-sm">src/components</code>.
          </p>
        </div>
      </section>
    </div>
  );
}
