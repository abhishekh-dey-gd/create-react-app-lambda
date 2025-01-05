import React from 'react';
import GalleryGrid from './GalleryGrid';
import { SupernovaSection } from '../background/SupernovaSection';

export default function Gallery() {
  return (
    <SupernovaSection>
      <section id="gallery" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Our Impact in Action
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Moments that capture our mission and dedication
            </p>
          </div>
          <GalleryGrid />
        </div>
      </section>
    </SupernovaSection>
  );
}