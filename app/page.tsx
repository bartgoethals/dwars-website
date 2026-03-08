import ArticleCard from "@/components/ArticleCard";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import { getRecentArticles } from "@/lib/drupal";

export default async function Home() {
  const articles = await getRecentArticles(14);

  // We expect 14 articles based on our mock data/Drupal config
  const heroArticle = articles[0];
  const gridArticles = articles.slice(1, 14);

  return (
    <div className="flex flex-col w-full min-h-full pb-48 relative transition-colors duration-300">
      {/* Main Content Area */}
      <div className="w-full max-w-[1600px] mx-auto p-4 md:p-8 lg:p-12">

        {/* Top Section: Hero (Left) + Ads (Right) */}
        <div className="flex flex-col xl:flex-row gap-8 mb-0">

          {/* Hero Article */}
          <div className="flex-1">
            {heroArticle && (
              <Link href={`/artikels/${heroArticle.slug}`} className="group block relative w-full h-[420px] md:h-[520px] lg:h-[620px] xl:h-[550px] overflow-hidden bg-dwars-gray grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
                {heroArticle.imageUrl ? (
                  <img
                    src={heroArticle.imageUrl}
                    alt={heroArticle.title}
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                ) : (
                  <div className="absolute inset-0 w-full h-full bg-gray-200" />
                )}

                {/* Dark gradient at bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute bottom-0 left-0 p-4 md:p-8 lg:p-12 w-full flex items-end">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-[95%] font-heading leading-[0.9] uppercase tracking-wide text-white drop-shadow-xl group-hover:text-dwars-pink transition-colors">
                    {heroArticle.title.split(': ').map((part, index, arr) => (
                      <span key={index}>
                        {part}
                        {index < arr.length - 1 && <><br />: </>}
                      </span>
                    ))}
                  </h1>
                </div>
              </Link>
            )}
          </div>

          {/* Ads Sidebar/Right Column */}
          <div className="w-full xl:w-[200px] shrink-0 flex flex-col sm:flex-row xl:flex-col gap-6">
            {/* Sidebar Article 1 */}
            <article className="group mb-4 pb-4 border-b-2 border-white md:border-black dark:border-white break-inside-avoid relative transition-all duration-300 cursor-pointer flex-1">
              <span className="text-xs font-bold uppercase tracking-wider mb-2 text-gray-300 md:text-gray-600 dark:text-gray-300 md:dark:text-gray-300 block">Opinie</span>
              <h3 className="text-xl font-heading mb-2 leading-tight uppercase tracking-wide text-white md:text-black dark:text-white md:dark:text-white group-hover:text-dwars-pink md:group-hover:text-dwars-pink transition-colors">Lorem ipsum dolor sit amet.</h3>
              <p className="text-sm text-gray-300 md:text-black dark:text-gray-400 md:dark:text-gray-400 leading-relaxed line-clamp-3 transition-colors">Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </article>

            {/* Sidebar Article 2 */}
            <article className="group mb-4 pb-4 border-b-2 border-white md:border-black dark:border-white break-inside-avoid relative transition-all duration-300 cursor-pointer flex-1">
              <span className="text-xs font-bold uppercase tracking-wider mb-2 text-gray-300 md:text-gray-600 dark:text-gray-300 md:dark:text-gray-300 block">Campus</span>
              <h3 className="text-xl font-heading mb-2 leading-tight uppercase tracking-wide text-white md:text-black dark:text-white md:dark:text-white group-hover:text-dwars-pink md:group-hover:text-dwars-pink transition-colors">Excepteur sint occaecat cupidatat non.</h3>
              <p className="text-sm text-gray-300 md:text-black dark:text-gray-400 md:dark:text-gray-400 leading-relaxed line-clamp-3 transition-colors">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </article>
          </div>

        </div>

        {/* Recente Artikels */}
        <section className="mb-8 mt-4">
          <SectionHeader title="recente artikels" />

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 xl:columns-3 gap-6 md:gap-8 w-full mt-0">
            {gridArticles.map((article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                slug={article.slug}
                imageUrl={article.imageUrl}
                excerpt={article.excerpt}
                layout="masonry"
              />
            ))}
          </div>

          <div className="flex justify-center mt-16 mb-12 relative">
            <Link href="/archief" className="relative group inline-block hover:scale-[1.02] hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute inset-0 z-[-1] flex items-center justify-center pointer-events-none scale-[1.3] opacity-90 dark:opacity-80 transition-opacity">
                <img src="/assets/extra/nog lichtere tapejes_5.png" alt="" className="w-full h-full object-contain drop-shadow-sm min-w-[250px]" />
              </div>
              <span className="text-3xl font-heading tracking-widest px-8 py-2 relative text-dwars-text dark:text-white group-hover:text-white transition-colors inline-block">
                meer lezen...
              </span>
            </Link>
          </div>
        </section>

      </div>

      {/* Copyright Image Bottom Right */}
      <div className="absolute bottom-0 right-0 z-50 pointer-events-none w-[200px] md:w-[300px] lg:w-[400px] flex items-end justify-end">
        <img src="/assets/sidebar/copyrighthoekje_zwart.png" alt="Copyright Background" className="w-full h-auto object-contain object-bottom drop-shadow-sm opacity-90" />
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 text-white font-sans text-[10px] md:text-xs opacity-80 text-right">
          © {new Date().getFullYear()} Dwars
        </div>
      </div>

    </div>
  );
}
