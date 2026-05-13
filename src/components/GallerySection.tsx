import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const galleryImages = [
  "https://res.cloudinary.com/dqtj9xtfw/image/upload/v1778677205/475914921_18075963631728048_1511555960154089054_n_drckv3.jpg",
  "https://res.cloudinary.com/dqtj9xtfw/image/upload/v1778677207/475946556_18075963568728048_2594342415253118508_n_hgicac.jpg",
  "https://res.cloudinary.com/dqtj9xtfw/image/upload/v1778677208/475587416_18075963559728048_166367550734296574_n_mtwsu0.jpg",
  "https://res.cloudinary.com/dqtj9xtfw/image/upload/v1778677216/621726189_18053197007429875_6750126108714936151_n_sm7769.jpg",
  "https://res.cloudinary.com/dqtj9xtfw/image/upload/v1778677222/622116362_18077056004360096_8853485564021715985_n_jmqgrs.jpg",
  "https://res.cloudinary.com/dqtj9xtfw/image/upload/v1778677227/625414394_18117100465608189_6276968876218987678_n_n1dbit.jpg",
  "https://res.cloudinary.com/dqtj9xtfw/image/upload/v1778677230/622112419_18115166716552329_4116584761814501377_n_dfzxic.jpg",
  "https://res.cloudinary.com/dqtj9xtfw/image/upload/v1778677236/625108211_18104130334827998_2056368970398858984_n_irsnln.jpg",
  "https://res.cloudinary.com/dqtj9xtfw/image/upload/v1778677237/469220852_18069920266728048_8596824879652634602_n_uo1ayr.jpg",
  "https://res.cloudinary.com/dqtj9xtfw/image/upload/v1778677242/623162376_18079237133207355_8543018140812556488_n_gxy1az.jpg",
  "https://res.cloudinary.com/dqtj9xtfw/image/upload/v1778677242/627392275_18367667722166968_3749375149113266817_n_cyq1pd.jpg",
  "https://res.cloudinary.com/dqtj9xtfw/image/upload/v1778677244/622154987_18198982468331546_4448906716031455356_n_w9l1rh.jpg",
  "https://res.cloudinary.com/dqtj9xtfw/image/upload/v1778677244/620489886_18039655022733763_7049300031999129001_n_c4xghy.jpg",
  "https://res.cloudinary.com/dqtj9xtfw/image/upload/v1778677244/623144278_18215586691311403_8018013554590324121_n_unflli.jpg"
];

export default function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="gallery" className="py-24 px-8 md:px-16 max-w-7xl mx-auto w-full" ref={containerRef}>
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif text-tc-dark mb-4 leading-tight">
            Our <span className="italic text-tc-accent">Gallery</span>
          </h2>
          <p className="text-tc-muted-dark font-sans text-sm md:text-base leading-relaxed">
            A glimpse into the Town Coffee experience.
          </p>
        </div>
      </div>
      
      {/* Masonry-style grid for gallery */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {galleryImages.map((src, index) => (
          <motion.div 
            key={index}
            className="break-inside-avoid overflow-hidden bg-[#F5F5F0]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img 
              src={src} 
              alt={`Gallery Image ${index + 1}`} 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
