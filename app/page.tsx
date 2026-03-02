import ArticleCard from "@/components/ArticleCard";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import { getRecentArticles } from "@/lib/drupal";

export default async function Home() {
  const articles = await getRecentArticles(12);

  // We expect 12 articles based on our mock data/Drupal config
  const heroArticle = articles[0];
  const gridArticles = articles.slice(1, 12);

  return (
    <div className="flex flex-col w-full min-h-full pb-48 relative bg-white">
      {/* Main Content Area */}
      <div className="w-full max-w-[1600px] mx-auto p-4 md:p-8 lg:p-12">

        {/* Top Section: Hero (Left) + Ads (Right) */}
        <div className="flex flex-col xl:flex-row gap-8 mb-16">

          {/* Hero Article */}
          <div className="flex-1 xl:w-2/3">
            {heroArticle && (
              <Link href={`/artikels/${heroArticle.slug}`} className="group block relative w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-full overflow-hidden bg-dwars-gray grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
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

                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex items-end">
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading leading-[0.9] uppercase tracking-wide text-white drop-shadow-xl group-hover:text-dwars-pink transition-colors">
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
          <div className="w-full xl:w-[380px] shrink-0 flex flex-col sm:flex-row xl:flex-col gap-6">
            {/* Ad 1 */}
            <div className="bg-gray-200 flex-1 aspect-[4/3] w-full p-4 flex flex-col items-center justify-center text-center relative grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-black overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1596683720379-b8fb7b227c8e?q=80&w=2670&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 group-hover:opacity-100 transition-opacity" alt="Protest" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
                <h3 className="font-heading text-5xl mb-2 leading-none uppercase text-black drop-shadow-md bg-white/80 px-2 py-1 transform -rotate-3">Wij<br />Verdienen<br />Beter</h3>
              </div>
              <p className="relative z-10 text-[11px] font-bold bg-black text-white px-2 py-1 mt-auto uppercase tracking-widest w-full">Comac spreekt fatwa uit op dwars</p>
            </div>

            {/* Ad 2 */}
            <div className="bg-[#f0f0f0] flex-[1.2] aspect-[4/3] w-full p-6 md:p-8 flex flex-col relative border border-gray-300 overflow-hidden cursor-pointer group hover:border-black transition-colors">
              <div className="absolute top-4 right-4 bg-black text-white text-[10px] uppercase px-2 py-1 rounded-full font-bold transform rotate-12 z-10">Alleen voor<br />-26<br />jaar</div>
              <h4 className="font-sans font-extrabold text-xl md:text-2xl leading-tight mb-4 relative z-10 w-2/3">Betrouwbare journalistiek is nooit gratis.</h4>
              <p className="font-heading text-4xl md:text-5xl border-y-[3px] border-black py-2 mb-4 relative z-10 uppercase w-2/3 leading-none">Daarom<br />betalen<br /><span className="border-[3px] border-black px-1 inline-block -rotate-3 mt-1 bg-white">wij!</span></p>

              <div className="mt-auto flex justify-between items-center text-[10px] font-bold font-sans relative z-10 w-[80%]">
                <span className="bg-gray-800 text-white px-3 py-2 uppercase tracking-widest group-hover:bg-dwars-pink transition-colors w-full text-center">Start meteen met lezen &gt;</span>
              </div>
              {/* Faux De Standaard logo text at bottom */}
              <div className="absolute bottom-4 right-4 text-[11px] font-serif font-bold italic opacity-60">
                De Standaard
              </div>
            </div>
          </div>

        </div>

        {/* Recente Artikels */}
        <section className="mb-8">
          <SectionHeader title="recente artikels" />

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 xl:columns-3 gap-6 md:gap-8 w-full mt-6">
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
            <Link href="/archief" className="relative group inline-block">
              <div className="absolute inset-0 bg-dwars-gray transform rotate-2 skew-x-6 z-[-1] scale-110 shadow-sm border border-black/5 group-hover:bg-dwars-pink transition-colors duration-300" />
              <span className="text-3xl font-heading tracking-widest px-8 py-2 relative text-dwars-text group-hover:text-white transition-colors">
                meer lezen...
              </span>
              <div className="absolute -right-8 -bottom-6 w-10 h-10 text-dwars-pink opacity-0 group-hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full transform rotate-[130deg] drop-shadow-md">
                  <path d="M4 0l16 12-7 2 4 8-4 2-4-8-3 5z" />
                </svg>
              </div>
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
