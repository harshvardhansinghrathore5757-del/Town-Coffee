import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { menus } from '../data/menus';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const branchKeys = ['cscheme', 'malviya', 'vidyut', 'sirsi'] as const;
type BranchKey = typeof branchKeys[number];

const ITEMS_PER_PAGE = 8;

export default function MenuSection() {
  const [currentBranch, setCurrentBranch] = useState<BranchKey>('cscheme');
  const [currentCat, setCurrentCat] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const menuData = menus[currentBranch];
  const categories = menuData.categories;
  const activeCategory = categories[currentCat];

  // Calculate pages for active category
  const getPages = () => {
    const allPages: any[] = [];
    const cat = activeCategory;

    if (cat.items && cat.items.length) {
      for (let i = 0; i < cat.items.length; i += ITEMS_PER_PAGE) {
        allPages.push({
          sectionTitle: cat.title,
          note: cat.note,
          items: cat.items.slice(i, i + ITEMS_PER_PAGE),
          isFirst: i === 0
        });
      }
    }

    if (cat.subsections) {
      cat.subsections.forEach((sub: any) => {
        for (let i = 0; i < sub.items.length; i += ITEMS_PER_PAGE) {
          allPages.push({
            sectionTitle: sub.title,
            note: sub.note,
            items: sub.items.slice(i, i + ITEMS_PER_PAGE),
            isSubsection: true,
            isFirst: i === 0
          });
        }
      });
    }
    return allPages;
  };

  const pages = getPages();
  const pageCount = pages.length;

  // Reset page when branch/category changes
  useEffect(() => {
    setCurrentPage(0);
  }, [currentBranch, currentCat]);

  const handleBranchChange = (branch: BranchKey) => {
    setCurrentBranch(branch);
    setCurrentCat(0);
  };

  const handleNext = () => {
    setCurrentPage(p => Math.min(pageCount - 1, p + 1));
  };
  const handlePrev = () => {
    setCurrentPage(p => Math.max(0, p - 1));
  };

  const page = pages[currentPage];

  return (
    <section id="menu" className="w-full bg-[#f4f0e6] text-[#1c1c1a] min-h-screen relative font-sans">
      {/* Header */}
      <div className="flex items-center justify-between px-7 py-4 border-b border-[#e8e2d4] shadow-sm z-30 sticky top-[88px] bg-[#f4f0e6]">
        <div className="flex flex-col">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[0.14em] text-[#1e3a28] uppercase">TOWN COFFEE</h2>
          <p className="text-[0.6rem] tracking-[0.28em] text-[#c4622d] mt-1 uppercase font-medium">Est. 2019 • Jaipur</p>
        </div>
        <span className="hidden sm:block text-[0.62rem] tracking-[0.22em] uppercase text-[#6b6b60]">Food & Beverage Menu</span>
      </div>

      {/* Branch Bar */}
      <div className="bg-[#1e3a28] flex justify-center gap-1 py-2.5 px-4 flex-wrap z-30 relative sticky top-[163px] md:top-[169px] shadow-md">
        {branchKeys.map(key => (
          <button
            key={key}
            onClick={() => handleBranchChange(key)}
            className={`font-sans text-[0.68rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-sm transition-colors font-medium border ${
              currentBranch === key
                ? 'bg-[#c4622d] text-white border-[#c4622d]'
                : 'bg-transparent text-white/65 border-white/25 hover:text-white hover:border-white/55'
            }`}
          >
            {menus[key].name}
          </button>
        ))}
      </div>

      {/* Tabs */}
      <div className="overflow-x-auto bg-white border-b-2 border-[#e8e2d4] hide-scrollbar z-20 relative sticky top-[210px] md:top-[216px]">
        <div className="flex min-w-max px-5">
          {categories.map((c: any, i: number) => (
            <button
              key={i}
              onClick={() => setCurrentCat(i)}
              className={`font-sans text-[0.7rem] tracking-[0.13em] uppercase px-4 py-3.5 border-b-2 transition-all whitespace-nowrap ${
                currentCat === i
                  ? 'text-[#1e3a28] border-[#1e3a28] font-semibold flex-shrink-0'
                  : 'text-[#6b6b60] border-transparent hover:text-[#1e3a28] font-medium flex-shrink-0'
              }`}
            >
              {c.tab}
            </button>
          ))}
        </div>
      </div>

      {/* Viewer */}
      <div className="relative max-w-3xl mx-auto px-4 py-8 pb-20">
        <div className="text-center text-[0.65rem] tracking-[0.25em] text-[#6b6b60] uppercase mb-4 font-normal">
          Page {currentPage + 1} of {pageCount}
        </div>

        <div className="relative overflow-hidden w-full">
          {page && (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentBranch}-${currentCat}-${currentPage}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="bg-white rounded-sm p-6 md:p-9 min-h-[400px] shadow-[0_2px_24px_rgba(30,58,40,0.07)] ring-1 ring-[#e8e2d4]"
              >
                {page.isSubsection ? (
                  <p className="font-serif text-base font-semibold text-[#2d4a35] tracking-[0.06em] uppercase italic pt-2 border-t border-[#e8e2d4] mt-5 mb-2">
                    {page.sectionTitle}
                  </p>
                ) : (
                  <h3 className="font-serif text-[1.55rem] font-semibold text-[#1e3a28] tracking-[0.03em] mb-1 pb-3.5 border-b-[1.5px] border-[#e8e2d4] leading-tight">
                    {page.sectionTitle}
                  </h3>
                )}

                {page.note && page.isFirst !== false && (
                  <p className="text-[0.68rem] text-[#6b6b60] tracking-[0.14em] uppercase mt-1.5 mb-4">
                    {page.note}
                  </p>
                )}

                <div className="flex flex-col">
                  {page.items.map((item: any, idx: number) => (
                    <div key={idx} className="flex justify-between items-baseline gap-3 py-[11px] border-b border-[#e8e2d4] last:border-0" style={{ borderBottomWidth: idx === page.items.length - 1 ? '0' : '1px' }}>
                      <div className="flex-1">
                        <div className="text-[0.9rem] font-medium text-[#1c1c1a] tracking-[0.01em] leading-snug">
                          {item.name}
                        </div>
                        {item.desc && (
                          <div className="font-serif italic text-[0.85rem] text-[#6b6b60] mt-0.5 leading-relaxed">
                            {item.desc}
                          </div>
                        )}
                      </div>
                      <div className="font-serif text-base font-semibold text-[#2d4a35] tracking-[0.02em] whitespace-nowrap">
                        {typeof item.price === 'number' ? `₹${item.price}` : `₹${item.price}`}
                      </div>
                    </div>
                  ))}
                </div>

                {activeCategory.note2 && currentPage === pageCount - 1 && (
                  <p className="text-[0.7rem] text-[#6b6b60] italic pt-2.5 pb-1 tracking-[0.04em]">
                    {activeCategory.note2}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* Nav */}
        {pageCount > 1 && (
          <div className="flex justify-center items-center gap-5 mt-7">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="w-11 h-11 rounded-full border-[1.5px] border-[#1e3a28] flex items-center justify-center text-[#1e3a28] transition-all hover:bg-[#1e3a28] hover:text-white disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-[#1e3a28] disabled:cursor-not-allowed hover:scale-105"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-1.5 flex-wrap justify-center max-w-[200px]">
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-1.5 h-1.5 rounded-full border-[1.5px] transition-all cursor-pointer ${
                    currentPage === i
                      ? 'bg-[#1e3a28] border-[#1e3a28] scale-[1.35]'
                      : 'bg-[#e8e2d4] border-[#bbbbbb]'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              disabled={currentPage === pageCount - 1}
              className="w-11 h-11 rounded-full border-[1.5px] border-[#1e3a28] flex items-center justify-center text-[#1e3a28] transition-all hover:bg-[#1e3a28] hover:text-white disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-[#1e3a28] disabled:cursor-not-allowed hover:scale-105"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        <p className="text-center text-[0.64rem] text-[#6b6b60] tracking-[0.17em] uppercase mt-5">
          * Taxes extra as applicable &nbsp;|&nbsp; ★ Chef's Recommendation
        </p>
      </div>
    </section>
  );
                          }
